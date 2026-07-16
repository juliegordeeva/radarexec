import type { CTA, FormatItem, Locale } from './types';

// Форматы работы бюро. Полный список — на странице «Практики»,
// подмножество (featuredFormatIds) — на главной.

const discussRu: CTA = { label: 'Обсудить задачу', variant: 'secondary' };
const discussEn: CTA = { label: 'Discuss your task', variant: 'secondary' };

type FormatsContent = {
  meta: { id: string; label: string };
  headline: string;
  intro: string;
  items: FormatItem[];
};

export const formatsContent: Record<Locale, FormatsContent> = {
  ru: {
    meta: { id: 'practices', label: 'Практики' },
    headline: 'Форматы работы под разные управленческие задачи',
    intro:
      'Мы не предлагаем универсальную программу. Разбираем ситуацию и собираем формат под задачу, уровень команды и чувствительность вопроса.',
    items: [
      {
        id: 'unified-top-team',
        number: '01',
        title: 'Топ-команда как единый управленческий контур',
        situation:
          'Сильные руководители тянут в разные стороны: функции защищают свои приоритеты, решения теряют скорость, ответственность уходит в стыки.',
        whatWeDo:
          'Помогаем топ-команде договориться об общей повестке, ролях, правилах принятия решений и дисциплине исполнения.',
        format: 'Трёхдневная стратегическая сессия',
        forWhom: 'Собственники и топ-команды',
        cta: discussRu,
      },
      {
        id: 'strategic-sessions',
        number: '02',
        title: 'Стратегические модули антикризисной трансформации',
        situation:
          'Команде нужна не дискуссия, а понятный план: приоритеты, решения, ответственность и следующий цикл действий.',
        whatWeDo:
          'Проектируем и модерируем сессии так, чтобы на выходе был рабочий план от «как есть сейчас» к «как будет лучше».',
        format: 'Двухнедельные стратегические модули',
        forWhom: 'Собственники, директора, топ-команды',
        cta: discussRu,
      },
      {
        id: 'knowledge-management',
        number: '03',
        title: 'Оценка систем управления знаниями',
        situation:
          'Критические знания, методологии и практики держатся на отдельных людях и уходят вместе с ними.',
        whatWeDo:
          'Диагностируем, как компания сохраняет и передаёт экспертизу, и показываем, что нужно закрепить в системе.',
        format: 'Тридцатидневная диагностика',
        forWhom: 'Компании, которые теряют экспертизу',
        cta: discussRu,
      },
      {
        id: 'redistributed-teams',
        number: '04',
        title: 'Перераспределённые команды после реструктуризации',
        situation:
          'После сокращений и слияний руководители управляют командами, которые стали больше, сложнее и разнороднее.',
        whatWeDo:
          'Помогаем восстановить координацию: ясность ролей, новые правила коммуникации и бережную работу с нагрузкой.',
        format: 'Практический курс',
        forWhom: 'Руководители изменившихся команд',
        cta: discussRu,
      },
      {
        id: 'multigen-teams',
        number: '05',
        title: 'Мультипоколенческие команды',
        situation:
          'В одной команде — разные ожидания от руководителя, разная скорость коммуникации и разное отношение к автономии и технологиям.',
        whatWeDo:
          'Под руководством коуча (ICF) переводим различия в согласованные правила совместной работы.',
        format: 'Обучающий корпоративный проект',
        forWhom: 'Смешанные по возрасту команды',
        cta: discussRu,
      },
      {
        id: 'radar-races',
        number: '06',
        title: 'ГОНКИ РАДАР (RADAR Races) + стратегическая сессия',
        situation: 'На словах команда описывает себя правильно, но под давлением действует иначе.',
        whatWeDo:
          'День 1 — гоночная среда как живая модель поведения под давлением. День 2 — стратегическая сессия «как есть — как будет лучше».',
        format: 'Двухдневный формат',
        forWhom: 'Лидеры и топ-команды',
        cta: { label: 'Запросить формат ГОНКИ РАДАР', variant: 'secondary' },
      },
    ],
  },
  en: {
    meta: { id: 'practices', label: 'Practices' },
    headline: 'Formats for different management challenges',
    intro:
      'We don’t offer a one-size-fits-all program. We work through the situation and assemble a format that fits the task, the team’s level, and the sensitivity of the issue.',
    items: [
      {
        id: 'unified-top-team',
        number: '01',
        title: 'A leadership team that works as one',
        situation:
          'Strong leaders pull in different directions: functions defend their own priorities, decisions lose speed, and accountability falls through the cracks.',
        whatWeDo:
          'We help the leadership team align on a shared agenda, roles, decision-making rules, and delivery discipline.',
        format: 'Three-day strategy session',
        forWhom: 'Owners and leadership teams',
        cta: discussEn,
      },
      {
        id: 'strategic-sessions',
        number: '02',
        title: 'Strategic modules for turnaround and transformation',
        situation:
          'The team needs more than a discussion — it needs a clear plan: priorities, decisions, accountability, and the next cycle of action.',
        whatWeDo:
          'We design and facilitate the sessions so the outcome is a working plan — from “where we are now” to “where we need to be”.',
        format: 'Two-week strategic modules',
        forWhom: 'Owners, directors, leadership teams',
        cta: discussEn,
      },
      {
        id: 'knowledge-management',
        number: '03',
        title: 'Assessing knowledge management systems',
        situation:
          'Critical knowledge, methods, and practices depend on individuals and leave with them.',
        whatWeDo:
          'We assess how the company retains and transfers expertise and show what needs to be secured within the system.',
        format: 'Thirty-day assessment',
        forWhom: 'Companies losing expertise',
        cta: discussEn,
      },
      {
        id: 'redistributed-teams',
        number: '04',
        title: 'Redistributed teams after restructuring',
        situation:
          'After layoffs and mergers, leaders manage teams that have grown larger, more complex, and less homogeneous.',
        whatWeDo:
          'We help restore coordination: clear roles, new communication rules, and careful management of workload.',
        format: 'Applied course',
        forWhom: 'Leaders of reshaped teams',
        cta: discussEn,
      },
      {
        id: 'multigen-teams',
        number: '05',
        title: 'Multigenerational teams',
        situation:
          'One team holds different expectations of a manager, different communication speeds, and different attitudes to autonomy and technology.',
        whatWeDo:
          'Guided by an ICF coach, we turn these differences into agreed rules for working together.',
        format: 'Corporate learning project',
        forWhom: 'Age-diverse teams',
        cta: discussEn,
      },
      {
        id: 'radar-races',
        number: '06',
        title: 'RADAR Races + strategy session',
        situation:
          'On paper a team describes itself accurately, but under pressure it behaves differently.',
        whatWeDo:
          'Day 1 — a racing environment as a live model of behavior under pressure. Day 2 — a strategy session, “as it is now — as it should be”.',
        format: 'Two-day format',
        forWhom: 'Leaders and leadership teams',
        cta: { label: 'Request the RADAR Races format', variant: 'secondary' },
      },
    ],
  },
};

export const featuredFormatIds = [
  'unified-top-team',
  'redistributed-teams',
  'strategic-sessions',
  'radar-races',
];
