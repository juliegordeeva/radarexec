import { Helmet } from 'react-helmet-async';

export const SITE_URL = 'https://bureau.radarexec.ru';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

export function Seo({ title, description, path }: SeoProps) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <html lang="ru" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="ru_RU" />
    </Helmet>
  );
}
