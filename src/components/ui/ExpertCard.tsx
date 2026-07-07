import type { Expert } from '@/content/types';
import { assetUrl } from '@/lib/utils';

interface ExpertCardProps {
  expert: Expert;
}

export function ExpertCard({ expert }: ExpertCardProps) {
  return (
    <article className="flex h-full flex-col border border-champagne/20 bg-ivory-soft">
      {expert.photo && (
        <div className="aspect-[4/3] w-full overflow-hidden bg-taupe/10">
          <img
            src={assetUrl(expert.photo)}
            alt={`${expert.name} — ${expert.specialization}`}
            className="h-full w-full object-cover"
            style={{ objectPosition: expert.photoPosition ?? 'top' }}
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-subheadline-mobile font-medium text-graphite-deep">
          {expert.name}
        </h3>
        <p className="mt-1 font-mono text-label uppercase tracking-[0.12em] text-champagne-deep">
          {expert.role}
        </p>
        <p className="mt-3 font-sans text-body-mobile text-graphite-deep/80">
          {expert.specialization}
        </p>

        {expert.education && (
          <div className="mt-5">
            <p className="font-mono text-label uppercase tracking-[0.12em] text-stone">
              Образование
            </p>
            <p className="mt-1 font-sans text-sm text-graphite-deep/75">{expert.education}</p>
          </div>
        )}

        {expert.experience && expert.experience.length > 0 && (
          <div className="mt-5">
            <p className="font-mono text-label uppercase tracking-[0.12em] text-stone">Опыт</p>
            <ul className="mt-1 space-y-1.5">
              {expert.experience.map((item, i) => (
                <li key={i} className="font-sans text-sm text-graphite-deep/75">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </article>
  );
}
