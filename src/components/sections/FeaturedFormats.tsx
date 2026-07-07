import { Link } from 'react-router-dom';
import { formatsContent, featuredFormatIds } from '@/content/formats';
import { ui } from '@/content/ui';
import { useLocale, localizedTo } from '@/i18n';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { FormatCard } from '@/components/ui/FormatCard';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';

export function FeaturedFormats() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const locale = useLocale();
  const c = formatsContent[locale];
  const featured = c.items.filter((item) => featuredFormatIds.includes(item.id));

  return (
    <Section id="formats" theme="dark" label={ui[locale].featuredFormatsLabel}>
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl text-ivory">
            {c.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={100}>
          <BodyText className="mt-6 max-w-2xl text-stone-light">{c.intro}</BodyText>
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
            to={localizedTo('/practices', locale)}
            className="mt-10 inline-flex items-center gap-2 font-mono text-cta uppercase tracking-[0.08em] text-champagne transition-colors hover:text-champagne-deep"
          >
            {ui[locale].viewAllPractices}
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
