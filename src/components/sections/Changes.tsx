import { resultsContent } from '@/content/results';
import { useLocale } from '@/i18n';
import { CTA_MAILTO } from '@/lib/contact';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { ThinLine } from '@/components/ui/ThinLine';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Changes() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const c = resultsContent[useLocale()];

  return (
    <Section id={c.meta.id} theme="taupe" label={c.meta.label}>
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl text-ivory">
            {c.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={100}>
          <BodyText className="mt-6 max-w-2xl text-stone-light">{c.intro}</BodyText>
        </Reveal>

        <ul className="mt-12 space-y-6">
          {c.items.map((item, i) => (
            <Reveal key={item.number} visible={isInView} delay={i * 60}>
              <li>
                <div className="flex flex-col gap-2 md:flex-row md:gap-8">
                  <span className="font-mono text-label text-champagne">{item.number}</span>
                  <div className="max-w-3xl">
                    <h3 className="font-display text-subheadline-mobile font-medium text-ivory">
                      {item.title}
                    </h3>
                    <p className="mt-2 font-sans text-body-mobile text-stone-light">
                      {item.description}
                    </p>
                  </div>
                </div>
                <ThinLine className="mt-6" animate visible={isInView} />
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal visible={isInView} delay={200} className="mt-12">
          {c.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="dark" href={CTA_MAILTO}>
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
