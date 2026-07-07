import { howWeWorkContent } from '@/content/howWeWork';
import { CTA_MAILTO } from '@/lib/contact';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ThinLine } from '@/components/ui/ThinLine';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Process() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={howWeWorkContent.meta.id} theme="light" label={howWeWorkContent.meta.label}>
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl">
            {howWeWorkContent.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={100}>
          <BodyText className="mt-6 max-w-2xl text-graphite-deep/70">
            {howWeWorkContent.body}
          </BodyText>
        </Reveal>

        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {howWeWorkContent.steps.map((step, i) => (
            <Reveal key={step.number} visible={isInView} delay={i * 80}>
              <li>
                <span className="font-mono text-label text-champagne-deep">{step.number}</span>
                <ThinLine className="mt-3" animate visible={isInView} />
                <h3 className="mt-4 font-display text-subheadline-mobile font-medium text-graphite-deep">
                  {step.title}
                </h3>
                <p className="mt-2 font-sans text-body-mobile text-graphite-deep/70">
                  {step.description}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal visible={isInView} delay={200} className="mt-12">
          {howWeWorkContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="light" href={CTA_MAILTO}>
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
