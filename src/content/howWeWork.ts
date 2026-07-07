import type { CTA, Locale, ProcessStep } from './types';

type HowWeWorkContent = {
  meta: { id: string; label: string };
  headline: string;
  body: string;
  steps: ProcessStep[];
  ctas?: CTA[];
};

export const howWeWorkContent: Record<Locale, HowWeWorkContent> = {
  ru: {
    meta: { id: 'how-we-work', label: 'Как мы работаем' },
    headline: 'Начинаем не с продукта, а с вашей ситуации',
    body: 'Что именно нарушено в управлении? Где теряется скорость? Почему решения не превращаются в действия? Ответы на эти вопросы определяют формат работы.',
    steps: [
      {
        number: '01',
        title: 'Разбираем ситуацию',
        description: 'Обсуждаем задачу с собственником, директорами или руководителем изменений.',
      },
      {
        number: '02',
        title: 'Определяем задачу и результат',
        description: 'Договариваемся, что именно нужно изменить и как будет виден результат.',
      },
      {
        number: '03',
        title: 'Подбираем команду и формат',
        description: 'Собираем экспертов и выбираем формат под вашу ситуацию.',
      },
      {
        number: '04',
        title: 'Проводим работу и фиксируем шаги',
        description: 'Проводим работу и оставляем понятный план дальнейших действий.',
      },
    ],
    ctas: [{ label: 'Обсудить задачу', variant: 'secondary' }],
  },
  en: {
    meta: { id: 'how-we-work', label: 'How we work' },
    headline: 'We start with your situation, not with a product',
    body: 'What exactly has broken down in management? Where is speed being lost? Why don’t decisions turn into action? The answers shape the format of the work.',
    steps: [
      {
        number: '01',
        title: 'We work through the situation',
        description:
          'We discuss the task with the owner, the directors, or the person leading the change.',
      },
      {
        number: '02',
        title: 'We define the task and the outcome',
        description: 'We agree on what exactly needs to change and how the result will be visible.',
      },
      {
        number: '03',
        title: 'We assemble the team and the format',
        description: 'We bring together experts and choose the format for your situation.',
      },
      {
        number: '04',
        title: 'We do the work and set the next steps',
        description: 'We carry out the work and leave a clear plan for what comes next.',
      },
    ],
    ctas: [{ label: 'Discuss your task', variant: 'secondary' }],
  },
};
