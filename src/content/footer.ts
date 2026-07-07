import type { FooterColumn } from './types';
import { CTA_MAILTO, CONTACT_EMAIL, CONSENT_PAGE_URL, PRIVACY_PAGE_URL } from '@/lib/contact';

// Чтобы изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const footerContent = {
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
        { label: 'Политика обработки персональных данных', href: PRIVACY_PAGE_URL },
        { label: 'Согласие на обработку данных', href: CONSENT_PAGE_URL },
      ],
    },
    {
      title: 'Контакт',
      links: [
        { label: 'Обсудить задачу', href: CTA_MAILTO },
        { label: CONTACT_EMAIL, href: CTA_MAILTO },
        { label: '@Prof_jouls', href: 'https://t.me/Prof_jouls' },
      ],
    },
  ] satisfies FooterColumn[],
  legal: 'Конфиденциальная работа с управленческими задачами высокого значения.',
};
