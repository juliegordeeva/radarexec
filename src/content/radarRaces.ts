import type { CTA, ProcessStep } from './types';

// Чтобы добавить/изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const radarRacesContent = {
  meta: { id: 'radar-races', label: 'RADAR' },
  headline: 'RADAR Races: скорость решений как видимая управленческая система',
  subheadline:
    'Гоночная среда используется не как развлечение, а как живая модель управленческого поведения: давления, ролей, решений и командной динамики.',
  body: [
    'В переговорах команда часто говорит о себе правильно. В динамической среде она показывает, как действует на самом деле: кто берёт ответственность, кто ждёт разрешения, где теряется коммуникация, как распределяются роли и как быстро стратегия превращается в действие.',
    'После практической части команда проходит стратегическую сессию: разбирает наблюдаемые паттерны, зоны риска, лидерские реакции и принципы, которые можно перенести в бизнес-контекст.',
  ],
  steps: [
    { number: '01', title: 'Executive briefing', description: '' },
    { number: '02', title: 'Racing environment', description: '' },
    { number: '03', title: 'Observation', description: '' },
    { number: '04', title: 'Strategic debrief', description: '' },
    { number: '05', title: 'Business translation', description: '' },
  ] satisfies ProcessStep[],
  ctas: [{ label: 'Запросить специальный формат RADAR', variant: 'secondary' }] satisfies CTA[],
};
