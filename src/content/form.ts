import type { FormField, Locale } from './types';

type FormContent = {
  meta: { id: string; label: string };
  headline: string;
  microcopy: string;
  submitLabel: string;
  submittingLabel: string;
  errors: { required: string; requiredMulti: string; contact: string };
  consentPd: {
    prefix: string;
    consentLink: string;
    privacyLink: string;
    and: string;
    error: string;
  };
  consentNews: string;
  mailtoHint: string;
  fields: FormField[];
};

export const formContent: Record<Locale, FormContent> = {
  ru: {
    meta: { id: 'contact', label: 'Контакт' },
    headline: 'Коротко опишите управленческую задачу',
    microcopy:
      'Мы ответим в течение 12 часов и предложим либо проект, либо точечный первый шаг — знакомство.',
    submitLabel: 'Обсудить задачу',
    submittingLabel: 'Отправка…',
    errors: {
      required: 'Обязательное поле',
      requiredMulti: 'Выберите хотя бы один вариант',
      contact: 'Укажите email или Telegram',
    },
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
      {
        name: 'company',
        label: 'Компания',
        type: 'text',
        required: true,
        placeholder: 'Название компании',
      },
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
    ],
  },
  en: {
    meta: { id: 'contact', label: 'Contact' },
    headline: 'Briefly describe your management task',
    microcopy:
      'We reply within 12 hours and propose either a project or a focused first step — an introductory conversation.',
    submitLabel: 'Discuss your task',
    submittingLabel: 'Sending…',
    errors: {
      required: 'Required field',
      requiredMulti: 'Select at least one option',
      contact: 'Enter an email or Telegram handle',
    },
    consentPd: {
      prefix: 'I consent to the processing of my personal data in accordance with the',
      consentLink: 'Consent to personal data processing',
      privacyLink: 'Personal data processing policy',
      and: 'and the',
      error: 'Please confirm your consent to the processing of personal data.',
    },
    consentNews: 'I’d like to receive news and special offers',
    mailtoHint:
      'Your email client will now open with a ready-made message — click “Send” so we receive your request.',
    fields: [
      { name: 'name', label: 'Name', type: 'text', required: true, placeholder: 'Your name' },
      {
        name: 'company',
        label: 'Company',
        type: 'text',
        required: true,
        placeholder: 'Company name',
      },
      { name: 'role', label: 'Role', type: 'text', required: true, placeholder: 'Your role' },
      {
        name: 'contact',
        label: 'Email / Telegram',
        type: 'text',
        required: true,
        placeholder: 'How to reach you',
      },
      {
        name: 'topics',
        label: 'What needs attention right now?',
        type: 'multiselect',
        required: true,
        options: [
          { value: 'top-team', label: 'Leadership team' },
          { value: 'transformation', label: 'Turnaround and transformation' },
          { value: 'redistributed', label: 'Redistributed teams' },
          { value: 'knowledge', label: 'Knowledge system' },
          { value: 'multigen', label: 'Multigenerational team' },
          { value: 'leadership-style', label: 'How leaders respond under pressure' },
          { value: 'resilience', label: 'Leadership resilience' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        name: 'context',
        label: '3–5 lines of context',
        type: 'textarea',
        required: true,
        placeholder: 'Briefly describe the situation',
      },
      {
        name: 'language',
        label: 'Preferred language',
        type: 'select',
        required: true,
        options: [
          { value: 'en', label: 'English' },
          { value: 'ru', label: 'Russian' },
          { value: 'fr', label: 'French' },
        ],
      },
    ],
  },
};
