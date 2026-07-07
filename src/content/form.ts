import type { Locale } from './types';

type FormContent = {
  meta: { id: string; label: string };
  headline: string;
  intro: string;
  microcopy: string;
  submitLabel: string;
  submittingLabel: string;
  consentPd: {
    prefix: string;
    consentLink: string;
    privacyLink: string;
    and: string;
    error: string;
  };
  consentNews: string;
  mailtoHint: string;
};

export const formContent: Record<Locale, FormContent> = {
  ru: {
    meta: { id: 'contact', label: 'Контакт' },
    headline: 'Обсудим управленческую задачу',
    intro:
      'Нажмите «Обсудить задачу» — откроется ваша почтовая программа с готовым письмом на prof@jgordeeva.ru. Опишите ситуацию в свободной форме, и мы ответим.',
    microcopy:
      'Мы ответим в течение 12 часов и предложим либо проект, либо точечный первый шаг — знакомство.',
    submitLabel: 'Обсудить задачу',
    submittingLabel: 'Открываем почту…',
    consentPd: {
      prefix: 'Даю согласие на обработку персональных данных в соответствии с',
      consentLink: 'Согласием на обработку персональных данных',
      privacyLink: 'Политикой обработки персональных данных',
      and: 'и',
      error: 'Пожалуйста, подтвердите согласие на обработку персональных данных.',
    },
    consentNews: 'Хочу получать новости и специальные предложения',
    mailtoHint:
      'Сейчас откроется ваша почтовая программа с письмом на prof@jgordeeva.ru — опишите задачу и нажмите «Отправить».',
  },
  en: {
    meta: { id: 'contact', label: 'Contact' },
    headline: 'Let’s discuss your management task',
    intro:
      'Click “Discuss your task” — your email app will open with a message addressed to prof@jgordeeva.ru. Describe the situation in your own words and we’ll reply.',
    microcopy:
      'We reply within 12 hours and propose either a project or a focused first step — an introductory conversation.',
    submitLabel: 'Discuss your task',
    submittingLabel: 'Opening your email…',
    consentPd: {
      prefix: 'I consent to the processing of my personal data in accordance with the',
      consentLink: 'Consent to personal data processing',
      privacyLink: 'Personal data processing policy',
      and: 'and the',
      error: 'Please confirm your consent to the processing of personal data.',
    },
    consentNews: 'I’d like to receive news and special offers',
    mailtoHint:
      'Your email client will now open with a message addressed to prof@jgordeeva.ru — describe your task and click “Send”.',
  },
};
