import { Helmet } from 'react-helmet-async';
import { localizedTo, useLocale } from '@/i18n';

export const SITE_URL = 'https://bureau.radarexec.ru';

interface SeoProps {
  title: string;
  description: string;
  /** Логический путь без языкового префикса, например '/practices'. */
  path: string;
  /** Отключает alternate-ссылки (например, для 404). */
  noAlternates?: boolean;
}

function absoluteUrl(path: string): string {
  const withPrefix = path;
  return `${SITE_URL}${withPrefix === '/' ? '' : withPrefix}`;
}

export function Seo({ title, description, path, noAlternates }: SeoProps) {
  const locale = useLocale();
  const canonical = absoluteUrl(localizedTo(path, locale));
  const ruUrl = absoluteUrl(localizedTo(path, 'ru'));
  const enUrl = absoluteUrl(localizedTo(path, 'en'));

  return (
    <Helmet>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {!noAlternates && <link rel="alternate" hrefLang="ru" href={ruUrl} />}
      {!noAlternates && <link rel="alternate" hrefLang="en" href={enUrl} />}
      {!noAlternates && <link rel="alternate" hrefLang="x-default" href={ruUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale === 'ru' ? 'ru_RU' : 'en_US'} />
    </Helmet>
  );
}
