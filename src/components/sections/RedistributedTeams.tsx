import { redistributedTeamsContent } from '@/content/redistributedTeams';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { RedistributionGraphic } from '@/components/radar/RedistributionGraphic';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function RedistributedTeams() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={redistributedTeamsContent.meta.id} theme="light" className="bg-ivory-soft">
      <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal visible={isInView}>
          <Heading as="h2">{redistributedTeamsContent.headline}</Heading>
          <BodyText className="mt-6 text-graphite-deep/85">{redistributedTeamsContent.body}</BodyText>
          <div className="mt-8">
            {redistributedTeamsContent.ctas?.map((cta) => (
              <Button key={cta.label} variant="secondary" theme="light" href="#contact">
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
        <Reveal visible={isInView} delay={150}>
          <RedistributionGraphic className="mx-auto w-full max-w-sm opacity-70" />
        </Reveal>
      </div>
    </Section>
  );
}
