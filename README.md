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
  hooks/
  lib/
  styles/
```

## Как изменить контент

Весь копирайт хранится в `src/content/*.ts`. Каждый файл содержит комментарий с инструкцией. Редактируйте массивы/объекты — TypeScript проверит структуру через типы из `src/content/types.ts`.

Пример: заголовок hero — `src/content/hero.ts`, карточки форматов — `src/content/solutions.ts`.

## Как изменить дизайн

Цвета, шрифты и отступы — в `tailwind.config.ts` как дизайн-токены:

- `graphite`, `ivory`, `stone`, `taupe`, `champagne`, `burgundy`
- `fontFamily.display`, `fontFamily.sans`, `fontFamily.mono`

Глобальные стили — `src/styles/index.css`.

## Форма заявки

Отправка реализована как заглушка в `src/lib/submitInquiry.ts`. Подключите Formspree, Tally или собственный API — замените тело функции `submitInquiry`.

## Деплой

Статический билд (`dist/`) подходит для Vercel, Netlify или любого static hosting.
