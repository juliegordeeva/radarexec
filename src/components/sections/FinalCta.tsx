import { finalCtaContent } from '@/content/finalCta';
import { Container } from '@/components/ui/Container';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function FinalCta() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id={finalCtaContent.meta.id}
      ref={ref}
      className="bg-graphite-deep py-section-y-sm text-ivory md:py-section-y-md xl:py-section-y"
    >
      <Container>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-3xl text-ivory">
            {finalCtaContent.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={120} className="mt-8">
          <BodyText className="max-w-2xl text-stone-light">{finalCtaContent.body}</BodyText>
        </Reveal>
        <Reveal visible={isInView} delay={240} className="mt-12 flex flex-col gap-4 sm:flex-row">
          {finalCtaContent.ctas?.map((cta) => (
            <Button
              key={cta.label}
              variant={cta.variant}
              theme="dark"
              href="#contact"
              fullWidth
              className="sm:w-auto"
            >
              {cta.label}
            </Button>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
