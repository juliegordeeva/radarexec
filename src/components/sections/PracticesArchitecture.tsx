import { practicesContent } from '@/content/practices';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { PracticesEcosystemVisual } from '@/components/radar/PracticesEcosystemVisual';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { assetUrl } from '@/lib/utils';

export function PracticesArchitecture() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section
      id={practicesContent.meta.id}
      theme="light"
      number={practicesContent.meta.number}
      label={practicesContent.meta.label}
    >
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2">{practicesContent.headline}</Heading>
          <BodyText className="mt-6 max-w-3xl text-graphite-deep/85">{practicesContent.intro}</BodyText>
        </Reveal>

        <Reveal visible={isInView} delay={150} className="my-12">
          <PracticesEcosystemVisual
            centerLabel={practicesContent.centerLabel}
            className="mx-auto"
          />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {practicesContent.practices.map((practice, i) => (
            <Reveal key={practice.id} visible={isInView} delay={i * 80}>
              <article className="border-t border-champagne/25 pt-6">
                <span className="font-mono text-label text-champagne">{practice.number}</span>
                <h3 className="mt-3 font-display text-2xl text-graphite-deep">{practice.title}</h3>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-stone">
                  {practice.director}
                </p>
                {practice.photo && (
                  <div className="mt-4 aspect-[4/5] max-w-[200px] overflow-hidden border border-champagne/20">
                    <img
                      src={assetUrl(practice.photo)}
                      alt={practice.director}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                )}
                {practice.education && (
                  <div className="mt-4">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-champagne/80">
                      Образование
                    </p>
                    <p className="mt-2 font-sans text-sm text-graphite-deep/75 leading-relaxed">
                      {practice.education}
                    </p>
                  </div>
                )}
                {practice.experience && practice.experience.length > 0 && (
                  <div className="mt-4">
                    <p className="font-mono text-xs uppercase tracking-[0.1em] text-champagne/80">
                      Опыт работы
                    </p>
                    <ul className="mt-2 space-y-2">
                      {practice.experience.map((item) => (
                        <li
                          key={item}
                          className="font-sans text-sm text-graphite-deep/75 leading-relaxed"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className="mt-4 font-sans text-body-mobile text-graphite-deep/80 leading-relaxed">
                  {practice.description}
                </p>
                <ThinLine className="mt-6" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
