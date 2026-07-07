import { Link } from 'react-router-dom';
import { localizedTo, useLocale } from '@/i18n';

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const locale = useLocale();
  const ariaLabel = locale === 'ru' ? 'Хлебные крошки' : 'Breadcrumbs';

  return (
    <nav aria-label={ariaLabel} className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-label uppercase tracking-[0.12em] text-stone-light">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={localizedTo(item.to, locale)} className="transition-colors hover:text-champagne">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ivory/80">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && <span className="text-champagne/50">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
