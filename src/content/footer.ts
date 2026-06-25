import type { FooterColumn } from './types';
import { CTA_MAILTO, CONTACT_EMAIL } from '@/lib/contact';

// Чтобы добавить/изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const footerContent = {
  brand: 'РАДАР EXECUTIVE',
  description:
    'Экспертное партнерское бюро для собственников, руководителей, лидеров, директоров и топ-команд.',
  columns: [
    {
      title: 'Практики',
      links: [
        { label: 'Бизнес моделирование', href: '#practices' },
        { label: 'Управление образовательными системами', href: '#practices' },
        { label: 'Управление продуктом', href: '#practices' },
        { label: 'Управленческая аналитика', href: '#practices' },
        { label: 'Маркетинг, PR, GR', href: '#practices' },
        { label: 'Лидерская устойчивость', href: '#practices' },
      ],
    },
    {
      title: 'Форматы',
      links: [
        { label: 'Стратегические сессии', href: '#unified-top-team' },
        { label: 'Стратегические модули', href: '#strategic-sessions' },
        { label: 'Аудит систем', href: '#knowledge-management' },
        { label: 'Практические курсы', href: '#redistributed-teams' },
        { label: 'Обучающие проекты', href: '#multigen-teams' },
        { label: 'ГОНКИ РАДАР + стратегическая сессия', href: '#radar-races' },
      ],
    },
    {
      title: 'Контакт',
      links: [
        { label: 'Обсудить задачу', href: CTA_MAILTO },
        { label: 'Получить структуру проекта под ваш запрос', href: CTA_MAILTO },
        { label: CONTACT_EMAIL, href: CTA_MAILTO },
        { label: '@Prof_jouls', href: 'https://t.me/Prof_jouls' },
      ],
    },
  ] satisfies FooterColumn[],
  legal: 'Конфиденциальная работа с управленческими задачами высокого значения.',
};

export const navItems = [
  { label: 'Контекст', href: '#context' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Практики', href: '#practices' },
  { label: 'Гонки РАДАР', href: '#radar-races' },
  { label: 'Контакт', href: '#contact' },
];
