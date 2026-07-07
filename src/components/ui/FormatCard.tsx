import type { FormatItem } from '@/content/types';
import { useLocale } from '@/i18n';
import { Button } from './Button';
import { CTA_MAILTO } from '@/lib/contact';

interface FormatCardProps {
  format: FormatItem;
}

const labels = {
  ru: { situation: 'Ситуация', whatWeDo: 'Что делаем' },
  en: { situation: 'Situation', whatWeDo: 'What we do' },
} as const;

export function FormatCard({ format }: FormatCardProps) {
  const t = labels[useLocale()];

  return (
    <article className="flex h-full flex-col border border-champagne/20 bg-graphite-light/40 p-6 md:p-8">
      <span className="font-mono text-label uppercase tracking-[0.14em] text-champagne/70">
        {format.number}
      </span>
      <h3 className="mt-4 font-display text-subheadline-mobile font-medium text-ivory md:text-subheadline">
        {format.title}
      </h3>

      <dl className="mt-6 space-y-4 text-body-mobile">
        <div>
          <dt className="font-mono text-label uppercase tracking-[0.12em] text-stone">
            {t.situation}
          </dt>
          <dd className="mt-1 font-sans text-stone-light">{format.situation}</dd>
        </div>
        <div>
          <dt className="font-mono text-label uppercase tracking-[0.12em] text-stone">
            {t.whatWeDo}
          </dt>
          <dd className="mt-1 font-sans text-stone-light">{format.whatWeDo}</dd>
        </div>
      </dl>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-label uppercase tracking-[0.1em] text-champagne/70">
        <span>{format.format}</span>
        <span className="text-stone">{format.forWhom}</span>
      </div>

      <div className="mt-8 pt-2">
        <Button variant="secondary" theme="dark" href={CTA_MAILTO} className="w-full sm:w-auto">
          {format.cta.label}
        </Button>
      </div>
    </article>
  );
}
