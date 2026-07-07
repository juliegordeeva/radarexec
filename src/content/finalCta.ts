import type { CTA, Locale } from './types';

type FinalCtaContent = {
  meta: { id: string };
  headline: string;
  body: string;
  ctas: CTA[];
};

export const finalCtaContent: Record<Locale, FinalCtaContent> = {
  ru: {
    meta: { id: 'final-cta' },
    headline: 'Начнём с вашей управленческой задачи',
    body: 'Расскажите, что сейчас требует внимания: топ-команда, трансформация, перераспределённые роли, система знаний, эффективность, коммуникация, мультипоколенческая команда или стрессоустойчивость лидеров. Мы предложим точную структуру первого шага — без универсальных пакетов, лишнего давления и поверхностной диагностики.',
    ctas: [{ label: 'Обсудить задачу', variant: 'primary' }],
  },
  en: {
    meta: { id: 'final-cta' },
    headline: 'Let’s start with your management task',
    body: 'Tell us what needs attention right now: the leadership team, transformation, redistributed roles, the knowledge system, effectiveness, communication, a multigenerational team, or leadership resilience. We’ll propose a precise structure for the first step — without generic packages, undue pressure, or shallow diagnostics.',
    ctas: [{ label: 'Discuss your task', variant: 'primary' }],
  },
};
