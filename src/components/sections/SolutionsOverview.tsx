import { solutionsContent } from '@/content/solutions';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/utils';

export function SolutionsOverview() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section
      id={solutionsContent.meta.id}
      theme="dark"
      number={solutionsContent.meta.number}
      label={solutionsContent.meta.label}
    >
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-3xl text-ivory">
            {solutionsContent.headline}
          </Heading>
          <BodyText className="mt-6 max-w-2xl text-stone">{solutionsContent.subheadline}</BodyText>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {solutionsContent.cards.map((card, i) => (
            <Reveal key={card.id} visible={isInView} delay={i * 100}>
              <article
                id={card.id}
                className={cn(
                  'group border border-champagne/15 bg-graphite-light/50 p-8 transition-colors duration-300',
                  'hover:border-champagne/40 hover:bg-graphite-light/80',
                )}
              >
                <span className="font-mono text-label text-champagne">{card.number}</span>
                <h3 className="mt-4 font-display text-2xl text-ivory">{card.title}</h3>
                <p className="mt-4 font-sans text-body-mobile text-stone leading-relaxed">{card.description}</p>
                <ThinLine className="my-6" />
                <div className="flex flex-col gap-3">
                  {card.ctas.map((cta) => (
                    <Button
                      key={cta.label}
                      variant="secondary"
                      theme="dark"
                      href="#contact"
                      className="justify-start transition-transform duration-300 group-hover:translate-x-1"
                    >
                      {cta.label}
                    </Button>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
