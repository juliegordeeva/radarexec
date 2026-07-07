import type { Locale, NavLink } from './types';

// Основная навигация. `to` — логический путь; языковой префикс добавляется автоматически.
export const primaryNav: Record<Locale, NavLink[]> = {
  ru: [
    { label: 'Главная', to: '/' },
    { label: 'Практики', to: '/practices' },
    { label: 'Эксперты', to: '/experts' },
  ],
  en: [
    { label: 'Home', to: '/' },
    { label: 'Practices', to: '/practices' },
    { label: 'Experts', to: '/experts' },
  ],
};
