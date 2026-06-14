import type { CTA, ProcessStep } from './types';

// Чтобы добавить/изменить пункт — отредактируйте объект ниже, типы проверят структуру.
export const strategicSessionsContent = {
  meta: { id: 'strategic-sessions' },
  headline: 'Стратегическая сессия как архитектура действий',
  body:
    'В антикризисной трансформации команде недостаточно обменяться мнениями. Нужно договориться о приоритетах, ролях, решениях, рисках и следующем цикле исполнения. RADAR EXEC проектирует стратегические сессии так, чтобы результатом была не презентация, а рабочая архитектура действий.',
  steps: [
    { number: '01', title: 'Контекст', description: '' },
    { number: '02', title: 'Решения', description: '' },
    { number: '03', title: 'Роли', description: '' },
    { number: '04', title: 'Исполнение', description: '' },
  ] satisfies ProcessStep[],
  ctas: [{ label: 'Получить структуру проекта под ваш запрос', variant: 'secondary' }] satisfies CTA[],
};
