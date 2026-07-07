import { internationalContent } from '@/content/international';
import { useLocale } from '@/i18n';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { assetUrl } from '@/lib/utils';

export function InternationalFlexibility() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const c = internationalContent[useLocale()];

  return (
    <Section id={c.meta.id} theme="taupe">
      <div ref={ref} className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
        <div>
          <Reveal visible={isInView}>
            <Heading as="h2" className="max-w-2xl">
              {c.headline}
            </Heading>
          </Reveal>
          <div className="mt-8 space-y-6">
            {c.body.map((paragraph, i) => (
              <Reveal key={i} visible={isInView} delay={i * 80}>
                <BodyText>{paragraph}</BodyText>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <Reveal visible={isInView} delay={120}>
            <div className="relative overflow-hidden border border-champagne/20 bg-graphite-deep/30">
              <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-champagne/45" />
              <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-champagne/45" />
              <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-champagne/45" />
              <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-champagne/45" />
              <img
                src={assetUrl('/images/international-experience.webp')}
                alt={c.imageAlt}
                className="aspect-[16/10] w-full object-cover object-[center_20%]"
                loading="lazy"
              />
            </div>
          </Reveal>

          <Reveal visible={isInView} delay={200}>
            <div className="flex flex-col gap-8 lg:px-2">
              <div className="flex gap-6 font-display text-4xl text-champagne/80">
                {c.languages.map((lang) => (
                  <span key={lang}>{lang}</span>
                ))}
              </div>
              <div className="space-y-2">
                {c.tags.map((tag) => (
                  <p
                    key={tag}
                    className="font-mono text-label uppercase tracking-[0.12em] text-stone-light"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
