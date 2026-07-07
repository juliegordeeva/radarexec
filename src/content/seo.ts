import type { Locale } from './types';

type SeoEntry = { title: string; description: string };

type SeoContent = {
  home: SeoEntry;
  practices: SeoEntry;
  experts: SeoEntry;
  notFound: SeoEntry;
};

export const seoContent: Record<Locale, SeoContent> = {
  ru: {
    home: {
      title: 'РАДАР EXECUTIVE — решения для сложных управленческих ситуаций',
      description:
        'Экспертное партнёрское бюро для собственников и топ-команд: стратегические сессии, диагностика систем управления и знаний, восстановление координации после реструктуризации.',
    },
    practices: {
      title: 'Практики РАДАР EXECUTIVE — форматы работы',
      description:
        'Форматы работы бюро: стратегические сессии, антикризисные модули, оценка систем знаний, работа с перераспределёнными и мультипоколенческими командами, ГОНКИ РАДАР.',
    },
    experts: {
      title: 'Эксперты РАДАР EXECUTIVE — команда практик',
      description:
        'Команда практик РАДАР EXECUTIVE: директора разработки по бизнес-моделированию, образовательным системам, продукту, эффективности, маркетингу и лидерской устойчивости.',
    },
    notFound: {
      title: 'Страница не найдена — РАДАР EXECUTIVE',
      description: 'Запрошенная страница не найдена.',
    },
  },
  en: {
    home: {
      title: 'RADAR EXECUTIVE — solutions for complex management situations',
      description:
        'An expert partnership bureau for owners and leadership teams: strategy sessions, assessment of management and knowledge systems, and rebuilding coordination after restructuring.',
    },
    practices: {
      title: 'Practices — RADAR EXECUTIVE',
      description:
        'Formats the bureau works in: strategy sessions, turnaround modules, knowledge-system assessment, work with redistributed and multigenerational teams, and RADAR Races.',
    },
    experts: {
      title: 'Experts — the RADAR EXECUTIVE team',
      description:
        'The RADAR EXECUTIVE practice team: development directors for business modeling, educational systems, product, performance, marketing, and leadership resilience.',
    },
    notFound: {
      title: 'Page not found — RADAR EXECUTIVE',
      description: 'The requested page could not be found.',
    },
  },
};
