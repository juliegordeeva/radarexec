import type { Locale, SituationItem } from './types';

// Типовые ситуации, с которыми к нам обращаются — языком клиента.
export const situationsContent: Record<
  Locale,
  {
    meta: { id: string; label: string };
    headline: string;
    subheadline: string;
    items: SituationItem[];
  }
> = {
  ru: {
    meta: { id: 'situations', label: 'Ситуации' },
    headline: 'С чем к нам обращаются',
    subheadline:
      'Мы подключаемся, когда цена управленческой ошибки высока, а решение нужно принять согласованно.',
    items: [
      { number: '01', text: 'Руководители не могут договориться о приоритетах.' },
      { number: '02', text: 'После реструктуризации нарушилась координация в команде.' },
      { number: '03', text: 'Критические знания держатся на отдельных сотрудниках.' },
      { number: '04', text: 'Нужен внешний взгляд на сложную управленческую ситуацию.' },
    ],
  },
  en: {
    meta: { id: 'situations', label: 'Situations' },
    headline: 'What clients come to us with',
    subheadline:
      'We step in when the cost of a management mistake is high and the decision has to be made in alignment.',
    items: [
      { number: '01', text: 'Leaders can’t agree on priorities.' },
      { number: '02', text: 'Coordination broke down after restructuring.' },
      { number: '03', text: 'Critical knowledge sits with a few individuals.' },
      { number: '04', text: 'You need an outside perspective on a complex management situation.' },
    ],
  },
};
