/**
 * Generates a clean corporate PDF overview of RADAR EXECUTIVE (RU)
 * for clients whose networks block the website.
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
    label: '01 / Ситуации',
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
    label: '02 / Форматы и практики',
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
    label: '03 / Как мы работаем',
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
    label: '04 / Что меняется',
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
    label: '05 / Эксперты',
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
    label: '06 / Международный опыт',
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

function formatCard(f) {
  return `
  <div class="card">
    <table class="card-table"><tr>
      <td class="num">${esc(f.number)}</td>
      <td>
        <div class="card-title">${esc(f.title)}</div>
        <p><span class="label">Ситуация.</span> ${esc(f.situation)}</p>
        <p><span class="label">Что делаем.</span> ${esc(f.whatWeDo)}</p>
        <div class="meta">${esc(f.format)} · ${esc(f.forWhom)}</div>
      </td>
    </tr></table>
  </div>`;
}

function expertBlock(e) {
  return `
  <div class="expert">
    <div class="expert-name">${esc(e.name)}</div>
    <div class="role">${esc(e.role)} · ${esc(e.specialization)}</div>
    <p><span class="label">Образование.</span> ${esc(e.education)}</p>
    <p><span class="label">Опыт.</span> ${e.experience.map(esc).join(' ')}</p>
  </div>`;
}

function buildHtml(c) {
  const situationsRows = c.situations.items
    .map(
      (text, i) => `
      <tr>
        <td class="num">${String(i + 1).padStart(2, '0')}</td>
        <td>${esc(text)}</td>
      </tr>`,
    )
    .join('');

  const processRows = c.process.steps
    .map(
      (s) => `
      <tr>
        <td class="num">${esc(s.number)}</td>
        <td><strong>${esc(s.title)}.</strong> ${esc(s.description)}</td>
      </tr>`,
    )
    .join('');

  const resultRows = c.results.items
    .map(
      (r) => `
      <tr>
        <td class="num">${esc(r.number)}</td>
        <td><strong>${esc(r.title)}.</strong> ${esc(r.description)}</td>
      </tr>`,
    )
    .join('');

  const formatsA = c.formats.items.slice(0, 4).map(formatCard).join('');
  const formatsB = c.formats.items.slice(4).map(formatCard).join('');
  const expertsA = c.experts.items.slice(0, 3).map(expertBlock).join('');
  const expertsB = c.experts.items.slice(3).map(expertBlock).join('');
  const tags = c.international.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('');

  return `<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8" />
<title>${esc(c.brand)} — обзор бюро</title>
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=IBM+Plex+Mono:wght@400;500&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; }
  html, body {
    margin: 0; padding: 0;
    background: #fff; color: #151515;
    font-family: "Manrope", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 9.5pt; line-height: 1.45;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1, h2, .card-title, .expert-name {
    font-family: "Cormorant Garamond", Georgia, "Times New Roman", serif;
    font-weight: 600; color: #111; margin: 0;
  }
  h1 { font-size: 24pt; line-height: 1.18; letter-spacing: -0.01em; }
  h2 { font-size: 16pt; line-height: 1.2; margin: 0 0 6px; }
  p { margin: 0 0 6px; }
  strong { font-weight: 600; }

  .sheet {
    width: 210mm;
    height: 297mm;
    padding: 16mm 16mm 14mm;
    overflow: hidden;
    page-break-after: always;
    position: relative;
  }
  .sheet:last-child { page-break-after: auto; }
  .sheet-inner { width: 178mm; }

  .sheet.cover {
    background: #111;
    color: #F4F0E8;
    padding: 22mm 16mm 18mm;
  }
  .sheet.cover .sheet-inner {
    height: 257mm;
    display: flex;
    flex-direction: column;
  }
  .sheet.cover h1 { color: #F4F0E8; margin: 0 0 8mm; }
  .sheet.cover p { color: #C8C2B8; margin: 0 0 3.5mm; width: 100%; }
  .cover-bottom { margin-top: auto; }

  .brand {
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 8.5pt; letter-spacing: 0.18em; text-transform: uppercase;
    color: #C6AA74; margin: 0 0 18mm;
  }
  .cover-meta {
    margin-top: 16mm;
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 8pt; line-height: 1.7; color: #9D9A93;
  }
  .note {
    margin-top: 10mm; width: 100%;
    border: 1px solid rgba(198,170,116,0.55);
    padding: 8px 10px; color: #C6AA74; font-size: 8.5pt; line-height: 1.45;
  }

  .eyebrow {
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 7.5pt; letter-spacing: 0.12em; text-transform: uppercase;
    color: #9D9A93; margin: 0 0 4px;
  }
  .lead { color: #3A352F; margin: 0 0 8px; width: 100%; }

  table.list { width: 100%; border-collapse: collapse; margin: 2px 0 10px; }
  table.list td {
    vertical-align: top; padding: 6px 0;
    border-bottom: 1px solid rgba(198,170,116,0.28);
  }
  table.list tr:last-child td { border-bottom: none; }
  td.num {
    width: 12mm; padding-right: 3mm;
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 8pt; letter-spacing: 0.06em; color: #B99A63; white-space: nowrap;
  }

  .block { margin: 0 0 9mm; }
  .label {
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 7pt; letter-spacing: 0.08em; text-transform: uppercase; color: #9D9A93;
  }

  .card {
    border: 1px solid rgba(198,170,116,0.35);
    background: #FAF7F1;
    padding: 6px 8px; margin: 0 0 4px;
  }
  .card-table { width: 100%; border-collapse: collapse; }
  .card-table td { vertical-align: top; padding: 0; border: none; }
  .card-table td.num { width: 10mm; padding-right: 3mm; padding-top: 2px; }
  .card-title { font-size: 11pt; margin: 0 0 3px; }
  .card p { margin: 0 0 3px; }
  .card p { margin: 0 0 3px; }
  .meta {
    margin-top: 4px;
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 7pt; letter-spacing: 0.05em; text-transform: uppercase; color: #B99A63;
  }

  .expert {
    border-top: 1px solid rgba(198,170,116,0.3);
    padding: 7px 0;
  }
  .expert:first-child { border-top: none; padding-top: 2px; }
  .expert-name { font-size: 12pt; margin: 0 0 2px; }
  .role { color: #4B463F; margin: 0 0 3px; font-size: 9pt; }

  .langs {
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 9pt; letter-spacing: 0.1em; color: #B99A63; margin: 6px 0;
  }
  .tag {
    display: inline-block;
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 7pt; letter-spacing: 0.08em; text-transform: uppercase;
    color: #4B463F; border: 1px solid rgba(198,170,116,0.45);
    padding: 3px 7px; margin: 0 4px 4px 0;
  }

  .contact-box {
    background: #111; color: #F4F0E8;
    padding: 12px 14px; margin-top: 8mm;
  }
  .contact-box h2 { color: #F4F0E8; margin-bottom: 6px; }
  .contact-box p { color: #D8D2C8; }
  .contact-box a { color: #C6AA74; text-decoration: none; }
  .contact-row {
    font-family: "IBM Plex Mono", "Courier New", monospace;
    font-size: 8.5pt; color: #C6AA74; margin: 5px 0 0 !important;
  }
  .footer-line {
    margin-top: 8mm; padding-top: 6px;
    border-top: 1px solid rgba(198,170,116,0.35);
    font-size: 7.5pt; color: #9D9A93;
  }
</style>
</head>
<body>

<section class="sheet cover">
  <div class="sheet-inner">
    <div class="brand">${esc(c.brand)}</div>
    <h1>${esc(c.hero.headline)}</h1>
    <p>${esc(c.hero.subheadline)}</p>
    <p>${esc(c.hero.body)}</p>
    <div class="cover-bottom">
      <div class="cover-meta">
        ${esc(c.tagline)}<br/>
        Сайт: ${esc(c.contact.site)}<br/>
        Почта: ${esc(c.contact.email)} · Telegram: ${esc(c.contact.telegram)}
      </div>
      <div class="note">
        Документ для корпоративной рассылки. Полная информация с сайта bureau.radarexec.ru —
        для случаев, когда сеть ограничивает доступ к сайту.
      </div>
    </div>
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="block">
      <div class="eyebrow">${esc(c.situations.label)}</div>
      <h2>${esc(c.situations.headline)}</h2>
      <p class="lead">${esc(c.situations.subheadline)}</p>
      <table class="list">${situationsRows}</table>
    </div>
    <div class="block">
      <div class="eyebrow">${esc(c.process.label)}</div>
      <h2>${esc(c.process.headline)}</h2>
      <p class="lead">${esc(c.process.body)}</p>
      <table class="list">${processRows}</table>
    </div>
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="eyebrow">${esc(c.formats.label)}</div>
    <h2>${esc(c.formats.headline)}</h2>
    <p class="lead">${esc(c.formats.intro)}</p>
    ${formatsA}
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="eyebrow">${esc(c.formats.label)} · продолжение</div>
    <h2>Форматы 05–06</h2>
    ${formatsB}
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="eyebrow">${esc(c.results.label)}</div>
    <h2>${esc(c.results.headline)}</h2>
    <p class="lead">${esc(c.results.intro)}</p>
    <table class="list">${resultRows}</table>
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="eyebrow">${esc(c.experts.label)}</div>
    <h2>${esc(c.experts.headline)}</h2>
    <p class="lead">${esc(c.experts.intro)}</p>
    <p class="lead"><em>${esc(c.experts.founderNote)}</em></p>
    ${expertsA}
  </div>
</section>

<section class="sheet">
  <div class="sheet-inner">
    <div class="eyebrow">${esc(c.experts.label)} · продолжение</div>
    <h2>Команда практик</h2>
    ${expertsB}

    <div style="margin-top:7mm;">
      <div class="eyebrow">${esc(c.international.label)}</div>
      <h2>${esc(c.international.headline)}</h2>
      ${c.international.body.map((p) => `<p>${esc(p)}</p>`).join('')}
      <div class="langs">${esc(c.international.languages)}</div>
      <div>${tags}</div>
    </div>

    <div class="contact-box">
      <h2>${esc(c.contact.headline)}</h2>
      <p>${esc(c.contact.body)}</p>
      <p class="contact-row">Email: <a href="mailto:${esc(c.contact.email)}">${esc(c.contact.email)}</a></p>
      <p class="contact-row">Telegram: ${esc(c.contact.telegram)}</p>
      <p class="contact-row">Сайт: ${esc(c.contact.site)}</p>
    </div>
    <p class="footer-line">
      ${esc(c.brand)} · Конфиденциальная работа с управленческими задачами высокого значения ·
      Документ для офлайн-рассылки
    </p>
  </div>
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
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=medium'],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 2 });
    await page.goto(`file://${outHtml}`, { waitUntil: 'networkidle0', timeout: 60000 });
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });
    await new Promise((r) => setTimeout(r, 500));

    await page.pdf({
      path: outPdf,
      width: '210mm',
      height: '297mm',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    });
  } finally {
    await browser.close();
  }

  const stats = fs.statSync(outPdf);
  console.log(`PDF ready: ${outPdf} (${Math.round(stats.size / 1024)} KB)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
