import type { FooterColumn, Locale } from './types';
import { CTA_MAILTO, CONTACT_EMAIL, CONSENT_PAGE_URL, PRIVACY_PAGE_URL } from '@/lib/contact';

type FooterContent = {
  brand: string;
  description: string;
  columns: FooterColumn[];
  legal: string;
};

// Внутренние ссылки (external не указан) получают языковой префикс в компоненте Footer.
export const footerContent: Record<Locale, FooterContent> = {
  ru: {
    brand: 'РАДАР EXECUTIVE',
    description:
      'Экспертное партнёрское бюро для собственников, руководителей, директоров и топ-команд.',
    columns: [
      {
        title: 'Разделы',
        links: [
          { label: 'Главная', href: '/' },
          { label: 'Практики', href: '/practices' },
          { label: 'Эксперты', href: '/experts' },
        ],
      },
      {
        title: 'Документы',
        links: [
          { label: 'Политика обработки персональных данных', href: PRIVACY_PAGE_URL, external: true },
          { label: 'Согласие на обработку данных', href: CONSENT_PAGE_URL, external: true },
        ],
      },
      {
        title: 'Контакт',
        links: [
          { label: 'Обсудить задачу', href: CTA_MAILTO, external: true },
          { label: CONTACT_EMAIL, href: CTA_MAILTO, external: true },
          { label: '@Prof_jouls', href: 'https://t.me/Prof_jouls', external: true },
        ],
      },
    ],
    legal: 'Конфиденциальная работа с управленческими задачами высокого значения.',
  },
  en: {
    brand: 'RADAR EXECUTIVE',
    description:
      'An expert partnership bureau for owners, executives, directors, and leadership teams.',
    columns: [
      {
        title: 'Sections',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Practices', href: '/practices' },
          { label: 'Experts', href: '/experts' },
        ],
      },
      {
        title: 'Documents',
        links: [
          { label: 'Personal data processing policy', href: PRIVACY_PAGE_URL, external: true },
          { label: 'Consent to data processing', href: CONSENT_PAGE_URL, external: true },
        ],
      },
      {
        title: 'Contact',
        links: [
          { label: 'Discuss your task', href: CTA_MAILTO, external: true },
          { label: CONTACT_EMAIL, href: CTA_MAILTO, external: true },
          { label: '@Prof_jouls', href: 'https://t.me/Prof_jouls', external: true },
        ],
      },
    ],
    legal: 'Confidential work on high-stakes management tasks.',
  },
};
