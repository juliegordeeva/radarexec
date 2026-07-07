import { Seo } from '@/app/Seo';
import { expertsContent } from '@/content/experts';
import { seoContent } from '@/content/seo';
import { primaryNav } from '@/content/navigation';
import { useLocale } from '@/i18n';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { BodyText } from '@/components/ui/Typography';
import { ExpertCard } from '@/components/ui/ExpertCard';
import { CallToAction } from '@/components/ui/CallToAction';

const copy = {
  ru: {
    ctaTitle: 'Соберём команду под вашу ситуацию',
    ctaText:
      'Расскажите о задаче — подберём экспертов с нужной специализацией и предложим формат работы.',
  },
  en: {
    ctaTitle: 'We’ll assemble a team for your situation',
    ctaText:
      'Tell us about the task — we’ll bring together experts with the right specialization and propose a format.',
  },
} as const;

export function ExpertsPage() {
  const locale = useLocale();
  const c = expertsContent[locale];
  const seo = seoContent[locale].experts;
  const t = copy[locale];
  const nav = primaryNav[locale];

  return (
    <>
      <Seo title={seo.title} description={seo.description} path="/experts" />
      <PageHero title={c.headline} subtitle={c.intro}>
        <Breadcrumbs
          items={[
            { label: nav[0].label, to: '/' },
            { label: c.meta.label },
          ]}
        />
      </PageHero>

      <section className="bg-ivory py-section-y-sm md:py-section-y-md">
        <Container>
          <div className="mb-12 max-w-3xl border-l-2 border-champagne/40 pl-6">
            <BodyText className="text-graphite-deep/80">{c.founderNote}</BodyText>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {c.experts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}
