import { CONTACT_EMAIL } from '@/lib/contact';
import type { Locale } from '@/content/types';

/**
 * Открывает почтовый клиент с данными заявки.
 */
export interface InquiryData {
  name: string;
  company: string;
  role: string;
  contact: string;
  topics: string[];
  context: string;
  language: string;
  consentNews: boolean;
  locale?: Locale;
}

const mailLabels = {
  ru: {
    subject: 'Запрос с сайта РАДАР EXECUTIVE',
    name: 'Имя',
    company: 'Компания',
    role: 'Роль',
    contact: 'Контакт',
    topics: 'Темы',
    language: 'Язык',
    consentNews: 'Согласие на рассылку',
    yes: 'да',
    no: 'нет',
    date: 'Дата',
    context: 'Контекст:',
    locale: 'ru-RU',
  },
  en: {
    subject: 'Inquiry from the RADAR EXECUTIVE website',
    name: 'Name',
    company: 'Company',
    role: 'Role',
    contact: 'Contact',
    topics: 'Topics',
    language: 'Preferred language',
    consentNews: 'Newsletter consent',
    yes: 'yes',
    no: 'no',
    date: 'Date',
    context: 'Context:',
    locale: 'en-US',
  },
} as const;

export async function submitInquiry(data: InquiryData): Promise<void> {
  const t = mailLabels[data.locale ?? 'ru'];
  const subject = encodeURIComponent(`${t.subject} — ${data.name}`);
  const body = encodeURIComponent(
    [
      `${t.name}: ${data.name}`,
      `${t.company}: ${data.company}`,
      `${t.role}: ${data.role}`,
      `${t.contact}: ${data.contact}`,
      `${t.topics}: ${data.topics.join(', ')}`,
      `${t.language}: ${data.language}`,
      `${t.consentNews}: ${data.consentNews ? t.yes : t.no}`,
      `${t.date}: ${new Date().toLocaleString(t.locale)}`,
      '',
      t.context,
      data.context,
    ].join('\n'),
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  await new Promise((resolve) => setTimeout(resolve, 300));
}
