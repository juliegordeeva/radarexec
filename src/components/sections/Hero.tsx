import { heroContent } from '@/content/hero';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Heading, BodyText } from '@/components/ui/Typography';
import { HeroVisual } from '@/components/radar/HeroVisual';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function Hero() {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen bg-graphite-deep pt-28 text-ivory md:pt-32"
    >
      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-8">
          <div>
            <Reveal visible={isInView}>
              <Heading as="h1" className="max-w-3xl text-ivory">
                {heroContent.headline}
              </Heading>
            </Reveal>
            <Reveal visible={isInView} delay={120} className="mt-8">
              <p className="max-w-xl font-sans text-subheadline-mobile md:text-subheadline text-stone-light leading-relaxed">
                {heroContent.subheadline}
              </p>
            </Reveal>
            <Reveal visible={isInView} delay={220} className="mt-6">
              <BodyText className="max-w-lg text-stone">{heroContent.body}</BodyText>
            </Reveal>
            <Reveal visible={isInView} delay={320} className="mt-10 flex flex-col gap-4 sm:flex-row">
              {heroContent.ctas?.map((cta) => (
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
          </div>
          <Reveal visible={isInView} delay={180} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-25 lg:hidden">
        <HeroVisual className="absolute -right-16 top-1/4 w-72" />
      </div>
    </section>
  );
}
