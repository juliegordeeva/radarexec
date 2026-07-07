import { Link } from 'react-router-dom';
import { expertsContent } from '@/content/experts';
import { ui } from '@/content/ui';
import { useLocale, localizedTo } from '@/i18n';
import { Section } from '@/components/ui/Section';
import { Heading, BodyText } from '@/components/ui/Typography';
import { Reveal } from '@/components/ui/Reveal';
import { useInView } from '@/hooks/useInView';
import { assetUrl } from '@/lib/utils';

export function TeamPreview() {
  const { ref, isInView } = useInView<HTMLDivElement>();
  const locale = useLocale();
  const c = expertsContent[locale];

  return (
    <Section id="team" theme="light" label={c.meta.label}>
      <div ref={ref}>
        <Reveal visible={isInView}>
          <Heading as="h2" className="max-w-2xl">
            {c.headline}
          </Heading>
        </Reveal>
        <Reveal visible={isInView} delay={100}>
          <BodyText className="mt-6 max-w-2xl text-graphite-deep/70">{c.intro}</BodyText>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {c.experts.map((expert, i) => (
            <Reveal key={expert.id} visible={isInView} delay={i * 60}>
              <li className="flex items-center gap-4">
                {expert.photo && (
                  <img
                    src={assetUrl(expert.photo)}
                    alt={`${expert.name} — ${expert.specialization}`}
                    className="size-16 shrink-0 rounded-sm border border-champagne/20 object-cover"
                    style={{ objectPosition: expert.photoPosition ?? 'top' }}
                    loading="lazy"
                  />
                )}
                <div>
                  <p className="font-display text-subheadline-mobile font-medium text-graphite-deep">
                    {expert.name}
                  </p>
                  <p className="mt-1 font-sans text-sm text-graphite-deep/70">
                    {expert.specialization}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal visible={isInView} delay={200}>
          <Link
            to={localizedTo('/experts', locale)}
            className="mt-10 inline-flex items-center gap-2 font-mono text-cta uppercase tracking-[0.08em] text-champagne transition-colors hover:text-champagne-deep"
          >
            {ui[locale].viewAllExperts}
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}
