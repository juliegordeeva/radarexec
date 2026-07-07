export type Locale = 'ru' | 'en';

export interface CTA {
  label: string;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export interface SectionMeta {
  id: string;
  number?: string;
  label?: string;
}

export interface StatementItem {
  number: string;
  text: string;
}

export interface SolutionCard {
  id: string;
  number: string;
  title: string;
  description: string;
  ctas: CTA[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  number: string;
  title: string;
  description: string;
}

export interface ResultItem {
  number: string;
  title: string;
  description: string;
}

export interface PracticeCard {
  id: string;
  number: string;
  title: string;
  director: string;
  description: string;
  education?: string;
  experience?: string[];
  photo?: string;
}

export interface FormFieldOption {
  value: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'multiselect' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: FormFieldOption[];
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface SituationItem {
  number: string;
  text: string;
}

export interface FormatItem {
  id: string;
  number: string;
  title: string;
  situation: string;
  whatWeDo: string;
  format: string;
  forWhom: string;
  cta: CTA;
}

export interface Expert {
  id: string;
  name: string;
  role: string;
  specialization: string;
  education?: string;
  experience?: string[];
  photo?: string;
  /** CSS object-position для кадрирования фото. По умолчанию 'top'. */
  photoPosition?: string;
  isFounder?: boolean;
}

export interface SectionContent {
  meta: SectionMeta;
  headline: string;
  subheadline?: string;
  body?: string | string[];
  ctas?: CTA[];
}
