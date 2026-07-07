import { CONTACT_EMAIL } from '@/lib/contact';
import type { Locale } from '@/content/types';

/**
 * Открывает почтовый клиент с письмом на адрес бюро.
 */
export interface InquiryData {
  consentNews: boolean;
  locale?: Locale;
}

const mailLabels = {
  ru: {
    subject: 'Запрос с сайта РАДАР EXECUTIVE',
    intro: 'Здравствуйте! Хочу обсудить управленческую задачу.',
    hint: 'Кратко опишите ситуацию, компанию и роль:',
    consentNews: 'Согласие на рассылку',
    yes: 'да',
    no: 'нет',
  },
  en: {
    subject: 'Inquiry from the RADAR EXECUTIVE website',
    intro: 'Hello! I’d like to discuss a management task.',
    hint: 'Briefly describe the situation, your company and role:',
    consentNews: 'Newsletter consent',
    yes: 'yes',
    no: 'no',
  },
} as const;

export async function submitInquiry(data: InquiryData): Promise<void> {
  const t = mailLabels[data.locale ?? 'ru'];
  const subject = encodeURIComponent(t.subject);
  const body = encodeURIComponent(
    [t.intro, '', t.hint, '', '', `${t.consentNews}: ${data.consentNews ? t.yes : t.no}`].join('\n'),
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  await new Promise((resolve) => setTimeout(resolve, 300));
}
