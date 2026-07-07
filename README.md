# RADAR EXEC — сайт

Бутиковый advisory-лендинг для RADAR EXEC. React 18 + TypeScript + Vite + Tailwind CSS.

## Запуск

```bash
npm install
npm run dev
```

Сборка для продакшена:

```bash
npm run build
npm run preview
```

## Структура проекта

```
src/
  app/           — роутинг, SEO
  pages/         — HomePage (собирает все секции)
  components/
    ui/          — Button, Container, Section, Typography…
    layout/      — Header, Footer
    sections/    — секции лендинга
    radar/       — абстрактная SVG-графика
  content/       — весь текстовый контент (типизированный)
  i18n/          — язык (Locale), провайдер и хелперы маршрутов
  hooks/
  lib/
  styles/
```

## Как изменить контент

Весь копирайт хранится в `src/content/*.ts`. Каждый файл содержит комментарий с инструкцией. Контент двуязычный: объекты имеют вид `Record<Locale, T>` (`ru` и `en`). Редактируйте нужную языковую ветку — TypeScript проверит структуру через типы из `src/content/types.ts`.

Пример: заголовок hero — `src/content/hero.ts`, карточки форматов — `src/content/formats.ts`, SEO-заголовки — `src/content/seo.ts`, служебные подписи интерфейса — `src/content/ui.ts`.

## Как изменить дизайн

Цвета, шрифты и отступы — в `tailwind.config.ts` как дизайн-токены:

- `graphite`, `ivory`, `stone`, `taupe`, `champagne`, `burgundy`
- `fontFamily.display`, `fontFamily.sans`, `fontFamily.mono`

Глобальные стили — `src/styles/index.css`.

## Страницы и маршруты

Русская версия (по умолчанию):

- `/` — главная (короткая): ситуации, основные форматы, процесс, изменения, команда, международный опыт, форма;
- `/practices` — все форматы работы бюро;
- `/experts` — команда практик;

Английская версия — те же страницы с префиксом `/en`:

- `/en`, `/en/practices`, `/en/experts`.

Любой неизвестный путь → страница 404 (`NotFoundPage`).

## Двуязычность (RU / EN)

- Язык определяется по URL: пути с префиксом `/en` — английские, остальные — русские (`src/i18n/locale.ts`).
- `LocaleProvider` (в `src/app/SiteLayout.tsx`) прокидывает текущий язык; компоненты получают его через хук `useLocale()`.
- Внутренние ссылки строятся хелпером `localizedTo(path, locale)`, переключатель RU/EN в шапке сохраняет текущую страницу (`stripLocale`).
- Юридические документы (`privacy-policy.html`, `consent.html`) остаются на русском по 152-ФЗ; в EN-версии ссылки ведут на них же.

Общий каркас (шапка, футер, прокрутка к началу) — в `src/app/SiteLayout.tsx`. SEO для каждой страницы задаётся через `src/app/Seo.tsx`: уникальные `title`/`description` по языку, `canonical`, `hreflang` (`ru`/`en`/`x-default`) и `og:locale`. Все шесть маршрутов пререндерятся в статический HTML (`scripts/prerender.mjs`).

## Форма заявки

Отправка реализована через `mailto` (`src/lib/submitInquiry.ts`): открывается почтовый клиент с заполненным письмом на адрес из `src/lib/contact.ts`. Чтобы перейти на серверную отправку (например, PHP на хостинге), замените тело функции `submitInquiry`.

## Деплой

Статический билд (`dist/`) подходит для Vercel, Netlify или любого static hosting.
