import { resultsContent } from '@/content/results';
import { CTA_MAILTO } from '@/lib/contact';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Results() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={resultsContent.meta.id} theme="light">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2">{resultsContent.headline}</Heading>
          <BodyText className="mt-6 max-w-3xl text-graphite-deep/85">{resultsContent.intro}</BodyText>
        </Reveal>

        <div className="mt-14 space-y-0">
          {resultsContent.items.map((item, i) => (
            <Reveal key={item.number} visible={isInView} delay={i * 80}>
              <div className="py-8">
                <div className="grid gap-4 md:grid-cols-[60px_1fr]">
                  <span className="font-mono text-label text-champagne">{item.number}</span>
                  <div>
                    <h3 className="font-display text-xl text-graphite-deep">{item.title}</h3>
                    <p className="mt-3 font-sans text-body-mobile text-stone">{item.description}</p>
                  </div>
                </div>
                <ThinLine className="mt-8" animate visible={isInView} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={400} className="mt-6">
          {resultsContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="light" href={CTA_MAILTO}>
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
