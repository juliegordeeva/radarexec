import type { CTA, Locale, ResultItem } from './types';

type ResultsContent = {
  meta: { id: string; label: string };
  headline: string;
  intro: string;
  items: ResultItem[];
  ctas: CTA[];
};

// Ожидаемые изменения в управлении после работы — без непроверенных цифр и кейсов.
export const resultsContent: Record<Locale, ResultsContent> = {
  ru: {
    meta: { id: 'changes', label: 'Что меняется' },
    headline: 'Что меняется в управлении после работы',
    intro:
      'Мы не раскрываем детали клиентских ситуаций. Но эффект нашей работы виден там, где компания принимает решения, распределяет ответственность и действует.',
    items: [
      {
        number: '01',
        title: 'Топ-команда работает как единый контур',
        description:
          'Снижается конкуренция функций, появляется общая повестка, уточняются роли и принципы принятия решений.',
      },
      {
        number: '02',
        title: 'Антикризисная сессия превращается в план действий',
        description:
          'Участники выходят не с набором идей, а с согласованными приоритетами, ответственностью и логикой следующего цикла.',
      },
      {
        number: '03',
        title: 'Знания перестают зависеть от отдельных людей',
        description:
          'Компания видит, где теряется экспертиза, какие практики нужно сохранить и как передавать критическое знание внутри системы.',
      },
      {
        number: '04',
        title: 'Перераспределённые команды получают новую управленческую рамку',
        description:
          'Руководители осознанно работают с нагрузкой, коммуникацией, ожиданиями и зонами ответственности после изменений.',
      },
      {
        number: '05',
        title: 'Разные поколения работают продуктивнее',
        description:
          'Различия в коммуникации, технологиях и ожиданиях переводятся в согласованный план работы, а не в скрытое напряжение.',
      },
    ],
    ctas: [{ label: 'Обсудить задачу', variant: 'secondary' }],
  },
  en: {
    meta: { id: 'changes', label: 'What changes' },
    headline: 'What changes in management after the work',
    intro:
      'We don’t disclose the details of client situations. But the effect of our work shows where the company makes decisions, assigns responsibility, and acts.',
    items: [
      {
        number: '01',
        title: 'The leadership team works as one',
        description:
          'Competition between functions eases, a shared agenda emerges, and roles and decision-making principles become clearer.',
      },
      {
        number: '02',
        title: 'A crisis session turns into a plan of action',
        description:
          'Participants leave not with a set of ideas, but with agreed priorities, accountability, and the logic of the next cycle.',
      },
      {
        number: '03',
        title: 'Knowledge stops depending on individuals',
        description:
          'The company sees where expertise is being lost, which practices to preserve, and how to pass critical knowledge on within the system.',
      },
      {
        number: '04',
        title: 'Redistributed teams gain a new management framework',
        description:
          'Leaders work deliberately with workload, communication, expectations, and areas of responsibility after change.',
      },
      {
        number: '05',
        title: 'Different generations work more productively',
        description:
          'Differences in communication, technology, and expectations turn into an agreed way of working rather than quiet tension.',
      },
    ],
    ctas: [{ label: 'Discuss your task', variant: 'secondary' }],
  },
};
