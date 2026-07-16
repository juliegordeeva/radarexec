import type { Locale } from './types';

/** Schematic diagrams cropped from brand preview visuals. */
export const formatDiagrams: Partial<
  Record<string, { src: string; alt: Record<Locale, string> }>
> = {
  'unified-top-team': {
    src: '/images/diagrams/top-team.webp',
    alt: {
      ru: 'Схема единого управленческого контура: стратегия, финансы, операции, продукт, люди',
      en: 'Unified management contour: strategy, finance, operations, product, people',
    },
  },
  'redistributed-teams': {
    src: '/images/diagrams/redistributed.webp',
    alt: {
      ru: 'Схема координации перераспределённой команды: роли, коммуникация, нагрузка',
      en: 'Coordination map for a redistributed team: roles, communication, workload',
    },
  },
  'radar-races': {
    src: '/images/diagrams/radar-races.webp',
    alt: {
      ru: 'Схема формата ГОНКИ РАДАР: давление, роли, решения на трассе',
      en: 'RADAR Races format map: pressure, roles, and decisions on the track',
    },
  },
};

export const practicesEcosystemDiagram = {
  src: '/images/diagrams/practices-ecosystem.webp',
  alt: {
    ru: 'Экосистема практик вокруг управленческой задачи клиента',
    en: 'Practice ecosystem assembled around the client’s management task',
  },
  caption: {
    ru: 'Сборка практик под конкретную управленческую задачу',
    en: 'Practices assembled around a specific management task',
  },
} as const;
