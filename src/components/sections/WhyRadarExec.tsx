import { whyUsContent } from '@/content/whyUs';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function WhyRadarExec() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={whyUsContent.meta.id} theme="light">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2">{whyUsContent.headline}</Heading>
          <BodyText className="mt-6 max-w-3xl text-graphite-deep/85">{whyUsContent.intro}</BodyText>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {whyUsContent.advantages.map((item, i) => (
            <Reveal key={item.number} visible={isInView} delay={i * 100}>
              <div>
                <span className="font-mono text-label text-champagne">{item.number}</span>
                <h3 className="mt-3 font-display text-xl text-graphite-deep">{item.title}</h3>
                <p className="mt-3 font-sans text-body-mobile text-stone leading-relaxed">{item.description}</p>
                <ThinLine className="mt-6" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
