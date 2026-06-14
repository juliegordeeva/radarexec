import { context2026Content } from '@/content/context2026';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Context2026() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section
      id={context2026Content.meta.id}
      theme="light"
      number={context2026Content.meta.number}
      label={context2026Content.meta.label}
    >
      <div ref={ref} className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal visible={isInView}>
          <Heading as="h2">{context2026Content.headline}</Heading>
          <BodyText className="mt-6 text-graphite-deep/80">{context2026Content.subheadline}</BodyText>
        </Reveal>
        <div className="space-y-0">
          {context2026Content.statements.map((item, i) => (
            <Reveal key={item.number} visible={isInView} delay={i * 80}>
              <div className="py-6">
                <div className="flex gap-6">
                  <span className="shrink-0 font-mono text-label text-champagne">{item.number}</span>
                  <p className="font-sans text-body-mobile md:text-body text-graphite-deep/90">{item.text}</p>
                </div>
                <ThinLine className="mt-6" animate visible={isInView} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
