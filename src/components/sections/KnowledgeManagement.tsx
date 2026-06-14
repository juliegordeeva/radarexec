import { knowledgeManagementContent } from '@/content/knowledgeManagement';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function KnowledgeManagement() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id={knowledgeManagementContent.meta.id} theme="light">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2">{knowledgeManagementContent.headline}</Heading>
          <BodyText className="mt-6 max-w-3xl text-graphite-deep/85">{knowledgeManagementContent.body}</BodyText>
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {knowledgeManagementContent.layers.map((layer, i) => (
            <Reveal key={layer.number} visible={isInView} delay={i * 100}>
              <div className="border border-champagne/20 bg-ivory-soft/50 p-6">
                <span className="font-mono text-label text-champagne">{layer.number}</span>
                <p className="mt-3 font-display text-xl text-graphite-deep">{layer.title}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={400} className="mt-10">
          {knowledgeManagementContent.ctas?.map((cta) => (
            <Button key={cta.label} variant="secondary" theme="light" href="#contact">
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}
