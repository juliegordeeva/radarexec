import { Seo } from '@/app/Seo';
import { formatsContent } from '@/content/formats';
import { seoContent } from '@/content/seo';
import { primaryNav } from '@/content/navigation';
import { useLocale } from '@/i18n';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { FormatCard } from '@/components/ui/FormatCard';
import { CallToAction } from '@/components/ui/CallToAction';

const copy = {
  ru: {
    ctaTitle: 'Не уверены, какой формат подходит?',
    ctaText:
      'Опишите ситуацию — предложим точную структуру первого шага без универсальных пакетов.',
  },
  en: {
    ctaTitle: 'Not sure which format fits?',
    ctaText:
      'Describe your situation — we’ll propose a precise structure for the first step, without generic packages.',
  },
} as const;

export function PracticesPage() {
  const locale = useLocale();
  const c = formatsContent[locale];
  const seo = seoContent[locale].practices;
  const t = copy[locale];
  const nav = primaryNav[locale];

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/practices" />
      <PageHero title={c.headline} subtitle={c.intro}>
        <Breadcrumbs
          items={[
            { label: nav[0].label, to: '/' },
            { label: c.meta.label },
          ]}
        />
      </PageHero>

      <section className="bg-graphite-deep pb-section-y-sm text-ivory md:pb-section-y-md">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {c.items.map((format) => (
              <FormatCard key={format.id} format={format} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
