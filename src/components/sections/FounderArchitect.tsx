import { founderContent } from '@/content/founder';
import { CTA_MAILTO } from '@/lib/contact';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { assetUrl } from '@/lib/utils';

export function FounderArchitect() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={founderContent.meta.id} theme="light" className="bg-ivory-soft">
      <div ref={ref} className="grid items-start gap-12 lg:grid-cols-[280px_1fr]">
        <Reveal visible={isInView}>
          <div className="aspect-[3/4] w-full max-w-[280px] overflow-hidden border border-champagne/25 bg-taupe/10">
            <img
              src={assetUrl(founderContent.portraitSrc)}
              alt={founderContent.portraitAlt}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <p className="mt-3 font-mono text-label uppercase tracking-[0.12em] text-stone">
            {founderContent.portraitLabel}
          </p>
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
              {founderContent.schemeLabel}
            </div>
            {founderContent.ctas?.map((cta) => (
              <Button key={cta.label} variant="secondary" theme="light" href={CTA_MAILTO}>
                {cta.label}
              </Button>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
