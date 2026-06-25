import { topTeamContent } from '@/content/topTeam';
import { CTA_MAILTO } from '@/lib/contact';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { UnifiedTopTeamVisual } from '@/components/radar/UnifiedTopTeamVisual';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function UnifiedTopTeam() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={topTeamContent.meta.id} theme="light">
      <div ref={ref} className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal visible={isInView}>
          <Heading as="h2">{topTeamContent.headline}</Heading>
          <BodyText className="mt-6 text-graphite-deep/85">{topTeamContent.body}</BodyText>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {topTeamContent.ctas?.map((cta) => (
              <Button key={cta.label} variant="secondary" theme="light" href={CTA_MAILTO}>
                {cta.label}
              </Button>
            ))}
          </div>
        </Reveal>
        <Reveal visible={isInView} delay={150}>
          <UnifiedTopTeamVisual className="mx-auto" />
        </Reveal>
      </div>
    </Section>
  );
}
