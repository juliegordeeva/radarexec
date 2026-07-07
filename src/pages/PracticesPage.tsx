import { Seo } from '@/app/Seo';
import { formatsContent } from '@/content/formats';
import { PageHero } from '@/components/ui/PageHero';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Container } from '@/components/ui/Container';
import { FormatCard } from '@/components/ui/FormatCard';
import { CallToAction } from '@/components/ui/CallToAction';

export function PracticesPage() {
  return (
    <>
      <Seo
        title="Практики РАДАР EXECUTIVE — форматы работы"
        description="Форматы работы бюро: стратегические сессии, антикризисные модули, оценка систем знаний, работа с перераспределёнными и мультипоколенческими командами, ГОНКИ РАДАР."
        path="/practices"
      />
      <PageHero title={formatsContent.headline} subtitle={formatsContent.intro}>
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Практики' }]} />
      </PageHero>

      <section className="bg-graphite-deep pb-section-y-sm text-ivory md:pb-section-y-md">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {formatsContent.items.map((format) => (
              <FormatCard key={format.id} format={format} />
            ))}
          </div>
        </Container>
      </section>

      <CallToAction
        title="Не уверены, какой формат подходит?"
        text="Опишите ситуацию — предложим точную структуру первого шага без универсальных пакетов."
      />
    </>
  );
}
