import { Seo } from '@/app/Seo';
import { expertsContent } from '@/content/experts';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { BodyText } from '@/components/ui/Typography';
import { ExpertCard } from '@/components/ui/ExpertCard';
import { CallToAction } from '@/components/ui/CallToAction';

export function ExpertsPage() {
  return (
    <>
      <Seo
        title="Эксперты РАДАР EXECUTIVE — команда практик"
        description="Команда практик РАДАР EXECUTIVE: директора разработки по бизнес-моделированию, образовательным системам, продукту, эффективности, маркетингу и лидерской устойчивости."
        path="/experts"
      />
      <PageHero title={expertsContent.headline} subtitle={expertsContent.intro}>
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Эксперты' }]} />
      </PageHero>

      <section className="bg-ivory py-section-y-sm md:py-section-y-md">
        <Container>
          <div className="mb-12 max-w-3xl border-l-2 border-champagne/40 pl-6">
            <BodyText className="text-graphite-deep/80">{expertsContent.founderNote}</BodyText>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {expertsContent.experts.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction
        title="Соберём команду под вашу ситуацию"
        text="Расскажите о задаче — подберём экспертов с нужной специализацией и предложим формат работы."
      />
    </>
  );
}
