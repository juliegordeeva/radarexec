import type { FormField } from './types';

// Чтобы добавить/изменить пункт — отредактируйте массив ниже, типы проверят структуру.
export const formContent = {
  meta: { id: 'contact', label: 'Контакт' },
  headline: 'Коротко опишите управленческую задачу',
  microcopy:
    'Мы ответим в течение 12 часов и предложим либо проект, либо точечный первый шаг — знакомство.',
  submitLabel: 'Обсудить задачу',
  consentPd: {
    prefix: 'Даю согласие на обработку персональных данных в соответствии с',
    consentLink: 'Согласием на обработку персональных данных',
    privacyLink: 'Политикой обработки персональных данных',
    and: 'и',
    error: 'Пожалуйста, подтвердите согласие на обработку персональных данных.',
  },
  consentNews: 'Хочу получать новости и специальные предложения',
  mailtoHint:
    'Сейчас откроется ваша почтовая программа с готовым письмом — нажмите «Отправить», чтобы мы получили заявку.',
  fields: [
    { name: 'name', label: 'Имя', type: 'text', required: true, placeholder: 'Ваше имя' },
    { name: 'company', label: 'Компания', type: 'text', required: true, placeholder: 'Название компании' },
    { name: 'role', label: 'Роль', type: 'text', required: true, placeholder: 'Ваша роль' },
    {
      name: 'contact',
      label: 'Email / Telegram',
      type: 'text',
      required: true,
      placeholder: 'Как с вами связаться',
    },
    {
      name: 'topics',
      label: 'Что сейчас требует внимания?',
      type: 'multiselect',
      required: true,
      options: [
        { value: 'top-team', label: 'Топ-команда' },
        { value: 'transformation', label: 'Антикризисная трансформация' },
        { value: 'redistributed', label: 'Перераспределённые команды' },
        { value: 'knowledge', label: 'Система знаний' },
        { value: 'multigen', label: 'Мультипоколенческая команда' },
        { value: 'leadership-style', label: 'Личный стиль реагирования топов' },
        { value: 'resilience', label: 'Стрессоустойчивость руководителей' },
        { value: 'other', label: 'Другое' },
      ],
    },
    {
      name: 'context',
      label: '3–5 строк о контексте',
      type: 'textarea',
      required: true,
      placeholder: 'Кратко опишите ситуацию',
    },
    {
      name: 'language',
      label: 'Предпочтительный язык',
      type: 'select',
      required: true,
      options: [
        { value: 'ru', label: 'русский' },
        { value: 'en', label: 'English' },
        { value: 'fr', label: 'français' },
      ],
    },
  ] satisfies FormField[],
};
