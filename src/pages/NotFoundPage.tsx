import { Link } from 'react-router-dom';
import { Seo } from '@/app/Seo';
import { seoContent } from '@/content/seo';
import { ui } from '@/content/ui';
import { localizedTo, useLocale } from '@/i18n';
import { Container } from '@/components/ui/Container';
import { Heading, BodyText } from '@/components/ui/Typography';

export function NotFoundPage() {
  const locale = useLocale();
  const seo = seoContent[locale].notFound;
  const t = ui[locale].notFound;

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/404" noAlternates />
      <section className="flex min-h-[70vh] items-center bg-graphite-deep pt-32 pb-20 text-ivory">
        <Container>
          <p className="font-mono text-label uppercase tracking-[0.14em] text-champagne/70">
            {t.code}
          </p>
          <Heading as="h1" className="mt-4 max-w-2xl text-ivory">
            {t.title}
          </Heading>
          <BodyText className="mt-6 max-w-xl text-stone-light">{t.body}</BodyText>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to={localizedTo('/', locale)}
              className="inline-flex items-center justify-center rounded-sm border border-ivory/20 bg-ivory px-6 py-3 font-sans text-cta uppercase tracking-[0.08em] text-graphite-deep transition-colors hover:border-champagne hover:bg-champagne"
            >
              {t.back}
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
