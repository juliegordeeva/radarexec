import type { Locale } from './types';

// Служебные строки интерфейса (не относящиеся к конкретной секции).
type UiStrings = {
  headerCta: string;
  skipToContent: string;
  openMenu: string;
  closeMenu: string;
  languageSwitchAria: string;
  viewAllPractices: string;
  viewAllExperts: string;
  featuredFormatsLabel: string;
  breadcrumbHome: string;
  notFound: {
    code: string;
    title: string;
    body: string;
    back: string;
  };
};

export const ui: Record<Locale, UiStrings> = {
  ru: {
    headerCta: 'Обсудить задачу',
    skipToContent: 'Перейти к содержанию',
    openMenu: 'Открыть меню',
    closeMenu: 'Закрыть меню',
    languageSwitchAria: 'Выбор языка',
    viewAllPractices: 'Все форматы и практики →',
    viewAllExperts: 'Все эксперты →',
    featuredFormatsLabel: 'Форматы',
    breadcrumbHome: 'Главная',
    notFound: {
      code: '404',
      title: 'Страница не найдена',
      body: 'Похоже, такой страницы нет или она была перемещена.',
      back: 'Вернуться на главную',
    },
  },
  en: {
    headerCta: 'Discuss your task',
    skipToContent: 'Skip to content',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSwitchAria: 'Language selection',
    viewAllPractices: 'All practices and formats →',
    viewAllExperts: 'All experts →',
    featuredFormatsLabel: 'Formats',
    breadcrumbHome: 'Home',
    notFound: {
      code: '404',
      title: 'Page not found',
      body: 'This page doesn’t exist or may have been moved.',
      back: 'Back to home',
    },
  },
};
