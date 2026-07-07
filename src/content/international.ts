import type { Locale } from './types';

type InternationalContent = {
  meta: { id: string };
  headline: string;
  body: string[];
  tags: string[];
  languages: string[];
  imageAlt: string;
};

export const internationalContent: Record<Locale, InternationalContent> = {
  ru: {
    meta: { id: 'international' },
    headline: 'Международный опыт в разных культурных контекстах',
    body: [
      'РАДАР EXECUTIVE работает с руководителями в разных культурах — от Латинской Америки до Филиппин и региона MENA. Сессии ведём на трёх языках: русском, английском, французском.',
      'География проектов — Россия, СНГ, MENA, Азия и распределённые команды. Международный опыт для нас — это умение услышать контекст и перевести сложность в ясное решение.',
    ],
    tags: [
      'Работа на трёх языках',
      'Межкультурная работа',
      'Международные управленческие команды',
    ],
    languages: ['RU', 'EN', 'FR'],
    imageAlt:
      'Международная управленческая команда — профессионалы разных культурных контекстов',
  },
  en: {
    meta: { id: 'international' },
    headline: 'International experience across cultural contexts',
    body: [
      'RADAR EXECUTIVE works with leaders across cultures — from Latin America to the Philippines and the MENA region. We run sessions in three languages: Russian, English, and French.',
      'Our projects span Russia, the CIS, MENA, and Asia, including distributed teams. International work, to us, means hearing the context and turning complexity into a clear decision.',
    ],
    tags: ['Work in three languages', 'Cross-cultural work', 'International management teams'],
    languages: ['RU', 'EN', 'FR'],
    imageAlt: 'International management team — professionals from different cultural contexts',
  },
};
