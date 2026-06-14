import { radarRacesContent } from '@/content/radarRaces';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { ThinLine } from '@/components/ui/ThinLine';
import { Button } from '@/components/ui/Button';
import { RacingTrackGraphic } from '@/components/radar/RacingTrackGraphic';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function RadarRaces() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section
      id={radarRacesContent.meta.id}
      theme="dark"
      className="bg-gradient-to-b from-graphite-deep to-burgundy/30"
    >
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-3xl text-ivory">
            {radarRacesContent.headline}
          </Heading>
          <p className="mt-6 max-w-2xl font-sans text-subheadline-mobile md:text-subheadline text-stone-light">
            {radarRacesContent.subheadline}
          </p>
        </Reveal>

        <RacingTrackGraphic className="my-12 w-full max-w-2xl opacity-60" />

        <div className="max-w-3xl space-y-6">
          {radarRacesContent.body.map((paragraph, i) => (
            <Reveal key={i} visible={isInView} delay={120 + i * 80}>
              <BodyText>{paragraph}</BodyText>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-8 md:gap-12">
          {radarRacesContent.steps.map((step, i) => (
            <Reveal key={step.number} visible={isInView} delay={i * 100}>
              <div className="min-w-[120px]">
                <span className="font-mono text-label text-champagne">{step.number}</span>
                <p className="mt-2 font-sans text-sm text-ivory">{step.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <ThinLine className="my-10 max-w-xl" animate visible={isInView} />

        <Reveal visible={isInView} delay={500}>
          {radarRacesContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="dark" href="#contact">
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
