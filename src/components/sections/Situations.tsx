import { situationsContent } from '@/content/situations';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Situations() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={situationsContent.meta.id} theme="light" label={situationsContent.meta.label}>
      <div ref={ref} className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal visible={isInView}>
            <Heading as="h2" className="max-w-md">
              {situationsContent.headline}
            </Heading>
          </Reveal>
          <Reveal visible={isInView} delay={100}>
            <BodyText className="mt-6 max-w-md text-graphite-deep/70">
              {situationsContent.subheadline}
            </BodyText>
          </Reveal>
        </div>

        <ul className="flex flex-col">
          {situationsContent.items.map((item, i) => (
            <Reveal key={item.number} visible={isInView} delay={i * 80}>
              <li className="py-5">
                <div className="flex gap-6">
                  <span className="font-mono text-label text-champagne-deep">{item.number}</span>
                  <p className="font-sans text-body-mobile text-graphite-deep md:text-body">
                    {item.text}
                  </p>
                </div>
                <ThinLine className="mt-5" animate visible={isInView} />
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
