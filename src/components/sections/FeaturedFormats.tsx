import { Link } from 'react-router-dom';
import { formatsContent, featuredFormatIds } from '@/content/formats';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { FormatCard } from '@/components/ui/FormatCard';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

const featured = formatsContent.items.filter((item) => featuredFormatIds.includes(item.id));

export function FeaturedFormats() {
  const { ref, isInView } = useInView<HTMLDivElement>();

  return (
    <Section id="formats" theme="dark" label="Форматы">
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl text-ivory">
            {formatsContent.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={100}>
          <BodyText className="mt-6 max-w-2xl text-stone-light">{formatsContent.intro}</BodyText>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featured.map((format, i) => (
            <Reveal key={format.id} visible={isInView} delay={i * 80}>
              <FormatCard format={format} />
            </Reveal>
          ))}
        </div>

        <Reveal visible={isInView} delay={200}>
          <Link
            to="/practices"
            className="mt-10 inline-flex items-center gap-2 font-mono text-cta uppercase tracking-[0.08em] text-champagne transition-colors hover:text-champagne-deep"
          >
            Все форматы и практики →
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
