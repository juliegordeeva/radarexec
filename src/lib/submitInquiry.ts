/**
 * TODO: подключить реальный backend или сервис (Formspree, Tally, собственный API).
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
  console.info('[RADAR EXEC] Inquiry submitted (stub):', data);
  await new Promise((resolve) => setTimeout(resolve, 800));
}
