import { multigenTeamsContent } from '@/content/multigenTeams';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function MultigenTeams() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={multigenTeamsContent.meta.id} theme="light">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-3xl">
            {multigenTeamsContent.headline}
          </Heading>
          <BodyText className="mt-6 max-w-3xl text-graphite-deep/85">{multigenTeamsContent.body}</BodyText>
        </Reveal>

        <div className="mt-12 flex flex-wrap gap-3">
          {multigenTeamsContent.axes.map((axis, i) => (
            <Reveal key={axis} visible={isInView} delay={i * 80}>
              <span className="border border-champagne/25 px-4 py-2 font-mono text-label uppercase tracking-[0.12em] text-graphite-deep/80">
                {axis}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={400} className="mt-10">
          {multigenTeamsContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="light" href="#contact">
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
