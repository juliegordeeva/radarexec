import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const PORT = 4173;
const BASE = `http://127.0.0.1:${PORT}`;

// Все публичные маршруты, которые нужно превратить в статический HTML (RU + EN).
const ROUTES = ['/', '/practices', '/experts', '/en', '/en/practices', '/en/experts'];

async function startPreview() {
  const server = await preview({
    root: rootDir,
    preview: { port: PORT, strictPort: true, host: '127.0.0.1' },
  });

  await new Promise((resolve, reject) => {
    const httpServer = server.httpServer;
    if (!httpServer) return reject(new Error('Preview server did not expose httpServer'));
    if (httpServer.listening) return resolve(undefined);
    httpServer.once('listening', resolve);
    httpServer.once('error', reject);
  });

  return server;
}

function outputFileForRoute(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  await page.goto(`${BASE}${route}`, { waitUntil: 'networkidle0', timeout: 60000 });

  // Устойчивый маркер: заголовок h1 отрисован и в body есть содержательный текст.
  await page.waitForSelector('h1', { timeout: 30000 });
  await page.waitForFunction(() => document.body.innerText.trim().length > 500, {
    timeout: 30000,
  });

  // Дать react-helmet-async обновить <head>.
  await new Promise((resolve) => setTimeout(resolve, 400));

  const html = await page.content();
  const textLength = await page.evaluate(() => document.body.innerText.trim().length);

  const outFile = outputFileForRoute(route);
  await mkdir(path.dirname(outFile), { recursive: true });
  await writeFile(outFile, html, 'utf8');
  console.log(
    `Prerender: ${route} → ${path.relative(rootDir, outFile)} (${html.length} bytes, ${textLength} chars text)`,
  );

  await page.close();
}

async function prerender() {
  // Сохраняем исходную пустую оболочку как SPA-fallback для неизвестных маршрутов.
  const shell = await readFile(path.join(distDir, 'index.html'), 'utf8');
  await writeFile(path.join(distDir, '404.html'), shell, 'utf8');

  console.log('Prerender: starting preview server…');
  const server = await startPreview();

  try {
    console.log('Prerender: launching headless browser…');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    try {
      for (const route of ROUTES) {
        await prerenderRoute(browser, route);
      }
    } finally {
      await browser.close();
    }
  } finally {
    await server.close();
  }
}

prerender().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
