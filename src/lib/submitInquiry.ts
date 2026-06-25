import { CONTACT_EMAIL } from '@/lib/contact';

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
}

export async function submitInquiry(data: InquiryData): Promise<void> {
  const subject = encodeURIComponent(`Запрос с сайта РАДАР EXECUTIVE — ${data.name}`);
  const body = encodeURIComponent(
    [
      `Имя: ${data.name}`,
      `Компания: ${data.company}`,
      `Роль: ${data.role}`,
      `Контакт: ${data.contact}`,
      `Темы: ${data.topics.join(', ')}`,
      `Язык: ${data.language}`,
      '',
      'Контекст:',
      data.context,
    ].join('\n'),
  );

  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  await new Promise((resolve) => setTimeout(resolve, 300));
}
