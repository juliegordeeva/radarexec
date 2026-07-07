import type { Locale, SectionContent } from './types';

// Чтобы изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const heroContent: Record<Locale, SectionContent> = {
  ru: {
    meta: { id: 'hero' },
    headline:
      'Помогаем собственникам и топ-командам принимать согласованные решения в период изменений',
    subheadline:
      'Проводим стратегические сессии, диагностируем системы управления и знаний, помогаем командам восстановить координацию после реструктуризации.',
    body: 'Сначала разбираем ситуацию, затем подбираем команду экспертов и формат работы.',
    ctas: [{ label: 'Обсудить задачу', variant: 'primary' }],
  },
  en: {
    meta: { id: 'hero' },
    headline: 'We help owners and leadership teams make aligned decisions through change',
    subheadline:
      'We run strategy sessions, assess management and knowledge systems, and help teams rebuild coordination after restructuring.',
    body: 'First we work through the situation, then we assemble the right team of experts and the right format.',
    ctas: [{ label: 'Discuss your task', variant: 'primary' }],
  },
};
