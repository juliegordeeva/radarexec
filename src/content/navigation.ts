import type { NavLink } from './types';

// Основная навигация по маршрутам. Чтобы изменить пункт — отредактируйте массив.
export const primaryNav: NavLink[] = [
  { label: 'Главная', to: '/' },
  { label: 'Практики', to: '/practices' },
  { label: 'Эксперты', to: '/experts' },
];
