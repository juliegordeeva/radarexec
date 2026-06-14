import type { FooterColumn } from './types';

// Чтобы добавить/изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const footerContent = {
  brand: 'RADAR EXEC',
  description: 'Бутик-партнёрство для собственников, CEO, C-level лидеров и топ-команд.',
  columns: [
    {
      title: 'Практики',
      links: [
        { label: 'Product Management', href: '#practices' },
        { label: 'Analytics and Business Effectiveness', href: '#practices' },
        { label: 'Business Model Management', href: '#practices' },
        { label: 'Large Educational Systems Management', href: '#practices' },
        { label: 'Marketing, PR, GR Management', href: '#practices' },
        { label: 'Leadership Resilience Strengthening Practices', href: '#practices' },
      ],
    },
    {
      title: 'Форматы',
      links: [
        { label: 'Advisory projects', href: '#formats' },
        { label: 'Strategic sessions', href: '#strategic-sessions' },
        { label: 'Executive masterclasses', href: '#unified-top-team' },
        { label: 'Knowledge management diagnostics', href: '#knowledge-management' },
        { label: 'Interactive lectures / podcasts', href: '#redistributed-teams' },
        { label: 'RADAR Races + Strategy Session', href: '#radar-races' },
      ],
    },
    {
      title: 'Контакт',
      links: [
        { label: 'Обсудить задачу', href: '#contact' },
        { label: 'Получить структуру проекта под ваш запрос', href: '#contact' },
        { label: 'hello@radarexec.com', href: 'mailto:hello@radarexec.com' },
        { label: '@radarexec', href: 'https://t.me/radarexec' },
      ],
    },
  ] satisfies FooterColumn[],
  legal: 'Конфиденциальная работа с управленческими задачами высокого значения.',
};

export const navItems = [
  { label: 'Контекст', href: '#context' },
  { label: 'Форматы', href: '#formats' },
  { label: 'Практики', href: '#practices' },
  { label: 'RADAR', href: '#radar-races' },
  { label: 'Контакт', href: '#contact' },
];
