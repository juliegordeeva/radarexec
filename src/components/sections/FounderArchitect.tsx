import { founderContent } from '@/content/founder';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function FounderArchitect() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={founderContent.meta.id} theme="light" className="bg-ivory-soft">
      <div ref={ref} className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
        <Reveal visible={isInView}>
          <div
            className="aspect-[3/4] w-full max-w-[280px] border border-champagne/25 bg-taupe/10"
            role="img"
            aria-label="Yulia Gordeeva RADAR EXEC"
          >
            <div className="flex h-full items-end p-6">
              <p className="font-mono text-label uppercase tracking-[0.12em] text-stone">
                Стратегический архитектор
              </p>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal visible={isInView}>
            <Heading as="h2">{founderContent.headline}</Heading>
          </Reveal>
          <div className="mt-8 space-y-6">
            {founderContent.body.map((paragraph, i) => (
              <Reveal key={i} visible={isInView} delay={100 + i * 80}>
                <BodyText className="text-graphite-deep/85">{paragraph}</BodyText>
              </Reveal>
            ))}
          </div>

          <Reveal visible={isInView} delay={400} className="mt-10">
            <div className="mb-10 border border-champagne/20 p-6 font-mono text-xs uppercase tracking-[0.1em] text-stone">
              Задача → сборка практик → формат
            </div>
            {founderContent.ctas?.map((cta) => (
              <Button key={cta.label} variant="secondary" theme="light" href="#contact">
                {cta.label}
              </Button>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
