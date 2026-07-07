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
      'Команда РАДАР EXECUTIVE работает с управленческими аудиториями в разных культурных и организационных контекстах — от Латинской Америки до Филиппин, включая регион MENA (Ближний Восток и Северная Африка).',
      'Мы проводим работу на русском, английском и французском языках, адаптируя формат, тон и ритм взаимодействия под зрелость аудитории, структуру компании и чувствительность задачи.',
      'РАДАР EXECUTIVE работает в проектах, связанных с Россией, СНГ, MENA и Азией, а также в распределённых и мультикультурных командах.',
      'Для нас международность — это опыт, заработанный десятилетиями: способность слышать контекст, уважать различия в коммуникации и статусе, удерживать качество работы с лидерами и переводить сложность в ясные управленческие решения.',
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
      'The RADAR EXECUTIVE team works with management audiences in different cultural and organizational contexts — from Latin America to the Philippines, including the MENA region (Middle East and North Africa).',
      'We work in Russian, English, and French, adapting the format, tone, and rhythm of interaction to the maturity of the audience, the structure of the company, and the sensitivity of the task.',
      'RADAR EXECUTIVE works on projects connected with Russia, the CIS, MENA, and Asia, as well as with distributed and multicultural teams.',
      'For us, international reach is experience earned over decades: the ability to hear context, respect differences in communication and status, sustain the quality of work with leaders, and turn complexity into clear management decisions.',
    ],
    tags: ['Work in three languages', 'Cross-cultural work', 'International management teams'],
    languages: ['RU', 'EN', 'FR'],
    imageAlt: 'International management team — professionals from different cultural contexts',
  },
};
