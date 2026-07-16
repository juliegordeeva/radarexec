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
      'РАДАР EXECUTIVE работает с руководителями в разных культурах и в разных частях света. Сессии ведём на трёх языках: русском, английском, французском.',
      'География проектов — Латинская Америка, СНГ, MENA, Юго-Восточная Азия. Работаем с мультикультурными и распределёнными командами. Международный опыт для нас — это умение услышать контекст и перевести различия в синергетический эффект.',
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
      'RADAR EXECUTIVE works with leaders across cultures and across the world. We run sessions in three languages: Russian, English, and French.',
      'Our projects span Latin America, the CIS, MENA, and Southeast Asia. We work with multicultural and distributed teams. International work, to us, means hearing the context and turning differences into a synergy.',
    ],
    tags: ['Work in three languages', 'Cross-cultural work', 'International management teams'],
    languages: ['RU', 'EN', 'FR'],
    imageAlt: 'International management team — professionals from different cultural contexts',
  },
};
