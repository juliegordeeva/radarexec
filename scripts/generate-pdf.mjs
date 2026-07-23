/**
 * Generates a printable PDF overview of the RADAR EXECUTIVE site (RU)
 * for clients whose corporate networks block the website.
 *
 * Usage: node scripts/generate-pdf.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const outDir = path.join(root, 'public');
const outPdf = path.join(outDir, 'radar-executive-overview.pdf');
const outHtml = path.join(outDir, 'radar-executive-overview.html');

const CONTACT_EMAIL = 'prof@jgordeeva.ru';
const SITE_URL = 'https://bureau.radarexec.ru';
const TELEGRAM = '@Prof_jouls';

const content = {
  brand: 'РАДАР EXECUTIVE',
  tagline: 'Экспертное партнёрское бюро для собственников, руководителей, директоров и топ-команд',
  hero: {
    headline:
      'Помогаем собственникам и топ-командам принимать согласованные решения в период изменений',
    subheadline:
      'Проводим стратегические сессии, диагностируем системы управления и знаний, помогаем командам восстановить координацию после реструктуризации.',
    body: 'Сначала разбираем ситуацию, затем подбираем команду экспертов и формат работы.',
  },
  situations: {
    label: 'Ситуации',
    headline: 'С чем к нам обращаются',
    subheadline:
      'Мы подключаемся, когда цена управленческой ошибки высока, а решение нужно принять согласованно.',
    items: [
      'Руководители не могут договориться о приоритетах.',
      'После реструктуризации нарушилась координация в команде.',
      'Критические знания держатся на отдельных сотрудниках.',
      'Нужен внешний взгляд на сложную управленческую ситуацию.',
    ],
  },
  formats: {
    label: 'Форматы и практики',
    headline: 'Форматы работы под разные управленческие задачи',
    intro:
      'Мы не предлагаем универсальную программу. Разбираем ситуацию и собираем формат под задачу, уровень команды и чувствительность вопроса.',
    items: [
      {
        number: '01',
        title: 'Топ-команда как единый управленческий контур',
        situation:
          'Сильные руководители тянут в разные стороны: функции защищают свои приоритеты, решения теряют скорость, ответственность уходит в стыки.',
        whatWeDo:
          'Помогаем топ-команде договориться об общей повестке, ролях, правилах принятия решений и дисциплине исполнения.',
        format: 'Трёхдневная стратегическая сессия',
        forWhom: 'Собственники и топ-команды',
      },
      {
        number: '02',
        title: 'Стратегические модули антикризисной трансформации',
        situation:
          'Команде нужна не дискуссия, а понятный план: приоритеты, решения, ответственность и следующий цикл действий.',
        whatWeDo:
          'Проектируем и модерируем сессии так, чтобы на выходе был рабочий план от «как есть сейчас» к «как будет лучше».',
        format: 'Двухнедельные стратегические модули',
        forWhom: 'Собственники, директора, топ-команды',
      },
      {
        number: '03',
        title: 'Оценка систем управления знаниями',
        situation:
          'Критические знания, методологии и практики держатся на отдельных людях и уходят вместе с ними.',
        whatWeDo:
          'Диагностируем, как компания сохраняет и передаёт экспертизу, и показываем, что нужно закрепить в системе.',
        format: 'Тридцатидневная диагностика',
        forWhom: 'Компании, которые теряют экспертизу',
      },
      {
        number: '04',
        title: 'Перераспределённые команды после реструктуризации',
        situation:
          'После сокращений и слияний руководители управляют командами, которые стали больше, сложнее и разнороднее.',
        whatWeDo:
          'Помогаем восстановить координацию: ясность ролей, новые правила коммуникации и бережную работу с нагрузкой.',
        format: 'Практический курс',
        forWhom: 'Руководители изменившихся команд',
      },
      {
        number: '05',
        title: 'Мультипоколенческие команды',
        situation:
          'В одной команде — разные ожидания от руководителя, разная скорость коммуникации и разное отношение к автономии и технологиям.',
        whatWeDo:
          'Под руководством коуча (ICF) переводим различия в согласованные правила совместной работы.',
        format: 'Обучающий корпоративный проект',
        forWhom: 'Смешанные по возрасту команды',
      },
      {
        number: '06',
        title: 'ГОНКИ РАДАР (RADAR Races) + стратегическая сессия',
        situation: 'На словах команда описывает себя правильно, но под давлением действует иначе.',
        whatWeDo:
          'День 1 — гоночная среда как живая модель поведения под давлением. День 2 — стратегическая сессия «как есть — как будет лучше».',
        format: 'Двухдневный формат',
        forWhom: 'Лидеры и топ-команды',
      },
    ],
  },
  process: {
    label: 'Как мы работаем',
    headline: 'Начинаем не с продукта, а с вашей ситуации',
    body: 'Что именно нарушено в управлении? Где теряется скорость? Почему решения не превращаются в действия? Ответы на эти вопросы определяют формат работы.',
    steps: [
      {
        number: '01',
        title: 'Разбираем ситуацию',
        description: 'Обсуждаем задачу с собственником, директорами или руководителем изменений.',
      },
      {
        number: '02',
        title: 'Определяем задачу и результат',
        description: 'Договариваемся, что именно нужно изменить и как будет виден результат.',
      },
      {
        number: '03',
        title: 'Подбираем команду и формат',
        description: 'Собираем экспертов и выбираем формат под вашу ситуацию.',
      },
      {
        number: '04',
        title: 'Проводим работу и фиксируем шаги',
        description: 'Проводим работу и оставляем понятный план дальнейших действий.',
      },
    ],
  },
  results: {
    label: 'Что меняется',
    headline: 'Что меняется в управлении после работы',
    intro:
      'Мы не раскрываем детали клиентских ситуаций. Но эффект нашей работы виден там, где компания принимает решения, распределяет ответственность и действует.',
    items: [
      {
        number: '01',
        title: 'Топ-команда работает как единый контур',
        description:
          'Снижается конкуренция функций, появляется общая повестка, уточняются роли и принципы принятия решений.',
      },
      {
        number: '02',
        title: 'Антикризисная сессия превращается в план действий',
        description:
          'Участники выходят не с набором идей, а с согласованными приоритетами, ответственностью и логикой следующего цикла.',
      },
      {
        number: '03',
        title: 'Знания перестают зависеть от отдельных людей',
        description:
          'Компания видит, где теряется экспертиза, какие практики нужно сохранить и как передавать критическое знание внутри системы.',
      },
      {
        number: '04',
        title: 'Перераспределённые команды получают новую управленческую рамку',
        description:
          'Руководители осознанно работают с нагрузкой, коммуникацией, ожиданиями и зонами ответственности после изменений.',
      },
      {
        number: '05',
        title: 'Разные поколения работают продуктивнее',
        description:
          'Различия в коммуникации, технологиях и ожиданиях переводятся в согласованный план работы, а не в скрытое напряжение.',
      },
    ],
  },
  experts: {
    label: 'Эксперты',
    headline: 'Команда практик РАДАР EXECUTIVE',
    intro:
      'РАДАР EXECUTIVE — не список консультантов с рынка и не бренд одного человека. Это экосистема практик, которую мы бережно собираем с 2006 года. Под каждую задачу собирается команда экспертов с нужной специализацией.',
    founderNote:
      'Юлия Гордеева — основатель РАДАР EXECUTIVE, директор разработки практики бизнес-моделирования и архитектор кросс-культурного и кросс-функционального подхода. Её роль — видеть бизнес-ситуацию целиком: модель, лидерскую команду, экономику решений и человеческую сложность изменений. При этом РАДАР EXECUTIVE остаётся командным брендом.',
    items: [
      {
        name: 'Юлия Гордеева',
        role: 'Основатель, директор разработки',
        specialization: 'Бизнес-моделирование управленческих процессов',
        education:
          'Лингвистика, финансы, управление, MBA, бизнес-психология и организационное консультирование, коучинг, продюсирование.',
        experience: [
          '2010–2022 — руководитель международных корпоративных программ обучения IBS Plekhanov.',
          '2022 — наст. время — руководитель консалтинговых и обучающих практик для среднего и крупного бизнеса.',
        ],
      },
      {
        name: 'Олег Емих',
        role: 'Директор разработки',
        specialization: 'Управление образовательными системами',
        education: 'Кандидат технических наук.',
        experience: [
          '2006–2014 — руководитель корпоративной академии.',
          '2006–2024 — директор альянса «Бизнес-консалтинга».',
          '2022 — наст. время — заместитель директора Школы управления Финансового университета при Правительстве РФ.',
        ],
      },
      {
        name: 'Ольга Гордеева',
        role: 'Директор разработки',
        specialization: 'Управление продуктом, продуктовый подход',
        education:
          'Магистр управления проектами (Россия). Магистр Business Administration (SKEMA, Франция). Магистр организационного консультирования (Россия). Магистр Counseling (The University of Manchester, Великобритания).',
        experience: [
          '2024 — наст. время — директор по продукту инвестиционного банка.',
          '2014–2024 — руководитель продуктовой аналитики в трёх крупных российских и международных банках.',
        ],
      },
      {
        name: 'Валерия Липова',
        role: 'Директор разработки',
        specialization: 'Оценка эффективности бизнеса',
        education: 'Юрист, продюсер.',
        experience: [
          'Более 10 лет на позициях CBDO / Head of E-commerce. Десятки проектов в e-commerce, travel tech, B2B, e-grocery и на маркетплейсах: Яндекс, МТС Travel, Moldretail Group.',
        ],
      },
      {
        name: 'Лада Кузминская',
        role: 'Директор разработки',
        specialization: 'Маркетинг, PR, GR',
        education: 'Метрология, экономика и управление, международное управление, MBA.',
        experience: [
          'Более 12 лет в управлении образовательными системами, сотрудничестве с государственными организациями, развитии нового бизнеса в сфере образования и кооперации с индустриальными партнёрами.',
        ],
      },
      {
        name: 'Елизавета Сарычева',
        role: 'Директор разработки',
        specialization: 'Лидерская устойчивость',
        education: 'Менеджмент (туризм), управление организацией (Франция, магистр), коучинг (ICF).',
        experience: [
          'Два проекта Олимпийских игр, два проекта FIFA (2014–2025), 10 лет в международном консалтинге ICG Inc. для миссии Airbus.',
        ],
      },
    ],
  },
  international: {
    label: 'Международный опыт',
    headline: 'Международный опыт в разных культурных контекстах',
    body: [
      'РАДАР EXECUTIVE работает с руководителями в разных культурах и в разных частях света. Сессии ведём на трёх языках: русском, английском, французском.',
      'География проектов — Латинская Америка, СНГ, MENA, Юго-Восточная Азия. Работаем с мультикультурными и распределёнными командами. Международный опыт для нас — это умение услышать контекст и перевести различия в синергетический эффект.',
    ],
    tags: [
      'Работа на трёх языках',
      'Межкультурная работа',
      'Международные управленческие команды',
    ],
    languages: 'RU · EN · FR',
  },
  contact: {
    headline: 'Обсудим управленческую задачу',
    body: 'Опишите ситуацию в свободной форме — мы ответим в течение 12 часов и предложим либо проект, либо точечный первый шаг — знакомство.',
    email: CONTACT_EMAIL,
    telegram: TELEGRAM,
    site: SITE_URL,
  },
};

function esc(s) {
  return String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildHtml(c) {
  const situations = c.situations.items
    .map(
      (text, i) =>
        `<div class="item"><span class="num">${String(i + 1).padStart(2, '0')}</span><p>${esc(text)}</p></div>`,
    )
    .join('');

  const formats = c.formats.items
    .map(
      (f) => `
      <article class="card">
        <div class="card-head"><span class="num">${esc(f.number)}</span><h3>${esc(f.title)}</h3></div>
        <p><span class="label">Ситуация</span> ${esc(f.situation)}</p>
        <p><span class="label">Что делаем</span> ${esc(f.whatWeDo)}</p>
        <p class="meta">${esc(f.format)} · ${esc(f.forWhom)}</p>
      </article>`,
    )
    .join('');

  const steps = c.process.steps
    .map(
      (s) =>
        `<div class="item"><span class="num">${esc(s.number)}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.description)}</p></div></div>`,
    )
    .join('');

  const results = c.results.items
    .map(
      (r) =>
        `<div class="item"><span class="num">${esc(r.number)}</span><div><h3>${esc(r.title)}</h3><p>${esc(r.description)}</p></div></div>`,
    )
    .join('');

  const experts = c.experts.items
    .map(
      (e) => `
      <article class="expert">
        <h3>${esc(e.name)}</h3>
        <p class="role">${esc(e.role)} · ${esc(e.specialization)}</p>
        <p><span class="label">Образование</span> ${esc(e.education)}</p>
        <p><span class="label">Опыт</span></p>
        <ul>${e.experience.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      </article>`,
    )
    .join('');

  const intlBody = c.international.body.map((p) => `<p>${esc(p)}</p>`).join('');
  const tags = c.international.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <title>${esc(c.brand)} — обзор бюро</title>
  <style>
    @page { size: A4; margin: 18mm 16mm 20mm; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      color: #151515;
      background: #F4F0E8;
      font-family: "Manrope", "Helvetica Neue", Arial, sans-serif;
      font-size: 10.5pt;
      line-height: 1.55;
    }
    h1, h2, h3 {
      font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
      font-weight: 500;
      line-height: 1.15;
      margin: 0 0 0.4em;
    }
    h1 { font-size: 26pt; letter-spacing: -0.01em; }
    h2 { font-size: 18pt; margin-top: 0; }
    h3 { font-size: 13pt; }
    p { margin: 0 0 0.7em; }
    ul { margin: 0.2em 0 0.8em; padding-left: 1.1em; }
    li { margin-bottom: 0.25em; }
    .cover {
      background: #111111;
      color: #F4F0E8;
      padding: 28mm 14mm 22mm;
      margin: -18mm -16mm 10mm;
      page-break-after: always;
    }
    .brand {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 9pt;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #C6AA74;
      margin-bottom: 18mm;
    }
    .cover h1 { color: #F4F0E8; font-size: 28pt; max-width: 92%; }
    .cover .sub { color: #B7B0A6; max-width: 88%; margin-top: 8mm; font-size: 11pt; }
    .cover .meta {
      margin-top: 22mm;
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 8pt;
      letter-spacing: 0.08em;
      color: #9D9A93;
      line-height: 1.8;
    }
    .note {
      border: 1px solid #C6AA74;
      padding: 3mm 4mm;
      margin: 8mm 0 0;
      font-size: 9pt;
      color: #C6AA74;
    }
    .section { margin: 0 0 9mm; page-break-inside: avoid; }
    .section.break { page-break-before: always; }
    .eyebrow {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 8pt;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #9D9A93;
      margin-bottom: 2mm;
    }
    .label {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 7.5pt;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #9D9A93;
      display: inline-block;
      margin-right: 1.5mm;
    }
    .num {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 8pt;
      color: #B99A63;
      letter-spacing: 0.08em;
      min-width: 8mm;
      display: inline-block;
    }
    .item {
      display: flex;
      gap: 4mm;
      padding: 2.5mm 0;
      border-bottom: 1px solid rgba(198, 170, 116, 0.28);
    }
    .item:last-child { border-bottom: none; }
    .card {
      border: 1px solid rgba(198, 170, 116, 0.35);
      padding: 4mm 4.5mm;
      margin: 0 0 3.5mm;
      page-break-inside: avoid;
      background: rgba(255,255,255,0.35);
    }
    .card-head { display: flex; gap: 3mm; align-items: baseline; margin-bottom: 2mm; }
    .card .meta {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 7.5pt;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #B99A63;
      margin: 2mm 0 0;
    }
    .expert {
      border-top: 1px solid rgba(198, 170, 116, 0.35);
      padding: 3.5mm 0;
      page-break-inside: avoid;
    }
    .expert .role { color: #4B463F; margin-bottom: 1.5mm; }
    .tags { margin-top: 3mm; }
    .tag {
      display: inline-block;
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 7.5pt;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #4B463F;
      border: 1px solid rgba(198, 170, 116, 0.4);
      padding: 1.2mm 2.5mm;
      margin: 0 1.5mm 1.5mm 0;
    }
    .contact-box {
      background: #111111;
      color: #F4F0E8;
      padding: 8mm 7mm;
      margin-top: 4mm;
    }
    .contact-box h2 { color: #F4F0E8; }
    .contact-box a { color: #C6AA74; text-decoration: none; }
    .contact-box .row {
      font-family: "IBM Plex Mono", "Courier New", monospace;
      font-size: 9pt;
      letter-spacing: 0.04em;
      margin: 2mm 0 0;
      color: #C6AA74;
    }
    .footer-line {
      margin-top: 6mm;
      font-size: 8pt;
      color: #9D9A93;
      border-top: 1px solid rgba(198, 170, 116, 0.3);
      padding-top: 3mm;
    }
  </style>
</head>
<body>
  <header class="cover">
    <div class="brand">${esc(c.brand)}</div>
    <h1>${esc(c.hero.headline)}</h1>
    <p class="sub">${esc(c.hero.subheadline)}</p>
    <p class="sub">${esc(c.hero.body)}</p>
    <div class="meta">
      ${esc(c.tagline)}<br/>
      Сайт: ${esc(c.contact.site)} · Почта: ${esc(c.contact.email)} · Telegram: ${esc(c.contact.telegram)}
    </div>
    <div class="note">
      Документ для рассылки: полная информация с сайта bureau.radarexec.ru —
      для случаев, когда корпоративная сеть ограничивает доступ к сайту.
    </div>
  </header>

  <section class="section">
    <div class="eyebrow">${esc(c.situations.label)}</div>
    <h2>${esc(c.situations.headline)}</h2>
    <p>${esc(c.situations.subheadline)}</p>
    ${situations}
  </section>

  <section class="section break">
    <div class="eyebrow">${esc(c.formats.label)}</div>
    <h2>${esc(c.formats.headline)}</h2>
    <p>${esc(c.formats.intro)}</p>
    ${formats}
  </section>

  <section class="section break">
    <div class="eyebrow">${esc(c.process.label)}</div>
    <h2>${esc(c.process.headline)}</h2>
    <p>${esc(c.process.body)}</p>
    ${steps}
  </section>

  <section class="section">
    <div class="eyebrow">${esc(c.results.label)}</div>
    <h2>${esc(c.results.headline)}</h2>
    <p>${esc(c.results.intro)}</p>
    ${results}
  </section>

  <section class="section break">
    <div class="eyebrow">${esc(c.experts.label)}</div>
    <h2>${esc(c.experts.headline)}</h2>
    <p>${esc(c.experts.intro)}</p>
    <p><em>${esc(c.experts.founderNote)}</em></p>
    ${experts}
  </section>

  <section class="section break">
    <div class="eyebrow">${esc(c.international.label)}</div>
    <h2>${esc(c.international.headline)}</h2>
    ${intlBody}
    <p class="meta" style="font-family:IBM Plex Mono,monospace;font-size:9pt;letter-spacing:.12em;color:#B99A63;">
      ${esc(c.international.languages)}
    </p>
    <div class="tags">${tags}</div>
  </section>

  <section class="section">
    <div class="contact-box">
      <h2>${esc(c.contact.headline)}</h2>
      <p>${esc(c.contact.body)}</p>
      <p class="row">Email: <a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></p>
      <p class="row">Telegram: ${esc(c.contact.telegram)}</p>
      <p class="row">Сайт: ${esc(c.contact.site)}</p>
    </div>
    <p class="footer-line">
      ${esc(c.brand)} · Конфиденциальная работа с управленческими задачами высокого значения ·
      Документ сформирован для офлайн-рассылки
    </p>
  </section>
</body>
</html>`;
}

async function main() {
  const html = buildHtml(content);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outHtml, html, 'utf8');

  const systemChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: fs.existsSync(systemChrome) ? systemChrome : undefined,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();
    await page.goto(`file://${outHtml}`, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: outPdf,
      format: 'A4',
      printBackground: true,
      margin: { top: '18mm', right: '16mm', bottom: '20mm', left: '16mm' },
    });
  } finally {
    await browser.close();
  }

  const stats = fs.statSync(outPdf);
  console.log(`PDF ready: ${outPdf} (${Math.round(stats.size / 1024)} KB)`);
  console.log(`HTML source: ${outHtml}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
