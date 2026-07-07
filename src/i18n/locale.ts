import { createContext, useContext } from 'react';
import type { Locale } from '@/content/types';

export type { Locale };

export const LOCALES: Locale[] = ['ru', 'en'];

export const LocaleContext = createContext<Locale>('ru');

/** Определяет язык по текущему пути (маршруты с префиксом /en). */
export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ru';
}

/** Логический путь (для русского) с языковым префиксом для английского. */
export function localizedTo(to: string, locale: Locale): string {
  if (locale === 'ru') return to;
  return to === '/' ? '/en' : `/en${to}`;
}

/** Убирает языковой префикс, возвращая логический путь. */
export function stripLocale(pathname: string): string {
  if (pathname === '/en') return '/';
  if (pathname.startsWith('/en/')) return pathname.slice(3);
  return pathname;
}

export function useLocale(): Locale {
  return useContext(LocaleContext);
}
