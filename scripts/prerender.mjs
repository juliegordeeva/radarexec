import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { preview } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const PORT = 4173;
const PREVIEW_URL = `http://127.0.0.1:${PORT}/`;
const CONTENT_MARKER = 'Экспертное партнёрское бюро';

async function startPreview() {
  const previewServer = await preview({
    root: rootDir,
    preview: {
      port: PORT,
      strictPort: true,
      host: '127.0.0.1',
    },
  });

  await new Promise((resolve, reject) => {
    const httpServer = previewServer.httpServer;
    if (!httpServer) {
      reject(new Error('Preview server did not expose httpServer'));
      return;
    }

    if (httpServer.listening) {
      resolve(undefined);
      return;
    }

    httpServer.once('listening', resolve);
    httpServer.once('error', reject);
  });

  return previewServer;
}

async function prerender() {
  console.log('Prerender: starting preview server…');
  const previewServer = await startPreview();

  try {
    console.log('Prerender: launching headless browser…');
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    await page.goto(PREVIEW_URL, { waitUntil: 'networkidle0', timeout: 60000 });

    await page.waitForFunction(
      (marker) => document.body.innerText.includes(marker),
      { timeout: 30000 },
      CONTENT_MARKER,
    );

    // Let react-helmet-async finish updating <head>.
    await new Promise((resolve) => setTimeout(resolve, 500));

    const html = await page.content();
    const textLength = await page.evaluate(() => document.body.innerText.trim().length);

    await writeFile(path.join(distDir, 'index.html'), html, 'utf8');
    console.log(`Prerender: wrote dist/index.html (${html.length} bytes, ${textLength} chars text)`);

    await browser.close();
  } finally {
    await previewServer.close();
  }
}

prerender().catch((error) => {
  console.error('Prerender failed:', error);
  process.exit(1);
});
