import { strategicSessionsContent } from '@/content/strategicSessions';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function StrategicSessions() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={strategicSessionsContent.meta.id} theme="taupe">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl">
            {strategicSessionsContent.headline}
          </Heading>
          <BodyText className="mt-6 max-w-2xl">{strategicSessionsContent.body}</BodyText>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
          {strategicSessionsContent.steps.map((step, i) => (
            <Reveal key={step.number} visible={isInView} delay={i * 100}>
              <div>
                <span className="font-mono text-label text-champagne">{step.number}</span>
                <p className="mt-2 font-display text-xl">{step.title}</p>
                {i < strategicSessionsContent.steps.length - 1 && (
                  <ThinLine className="mt-6 hidden md:block" animate visible={isInView} />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={400} className="mt-10">
          {strategicSessionsContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="dark" href="#contact">
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
