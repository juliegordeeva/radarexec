import { howWeWorkContent } from '@/content/howWeWork';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function HowWeWork() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={howWeWorkContent.meta.id} theme="dark">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl text-ivory">
            {howWeWorkContent.headline}
          </Heading>
          <BodyText className="mt-6 max-w-3xl">{howWeWorkContent.body}</BodyText>
        </Reveal>

        <div className="mt-14 space-y-8">
          {howWeWorkContent.steps.map((step, i) => (
            <Reveal key={step.number} visible={isInView} delay={i * 100}>
              <div className="grid gap-4 md:grid-cols-[80px_1fr]">
                <span className="font-mono text-label text-champagne">{step.number}</span>
                <div>
                  <h3 className="font-display text-xl text-ivory">{step.title}</h3>
                  <p className="mt-2 font-sans text-body-mobile text-stone">{step.description}</p>
                  <ThinLine className="mt-6" animate visible={isInView} />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={500} className="mt-10">
          {howWeWorkContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="dark" href="#contact">
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
