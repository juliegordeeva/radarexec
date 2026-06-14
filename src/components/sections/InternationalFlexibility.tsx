import { internationalContent } from '@/content/international';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function InternationalFlexibility() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={internationalContent.meta.id} theme="taupe">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_auto]">
        <div>
          <Reveal visible={isInView}>
            <Heading as="h2" className="max-w-2xl">
              {internationalContent.headline}
            </Heading>
          </Reveal>
          <div className="mt-8 space-y-6">
            {internationalContent.body.map((paragraph, i) => (
              <Reveal key={i} visible={isInView} delay={i * 80}>
                <BodyText>{paragraph}</BodyText>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal visible={isInView} delay={200}>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 font-display text-4xl text-champagne/80">
              {internationalContent.languages.map((lang) => (
                <span key={lang}>{lang}</span>
              ))}
            </div>
            <div className="space-y-2">
              {internationalContent.tags.map((tag) => (
                <p key={tag} className="font-mono text-label uppercase tracking-[0.12em] text-stone-light">
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
