import { Link } from 'react-router-dom';

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Хлебные крошки" className="mb-6">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-label uppercase tracking-[0.12em] text-stone-light">
        {items.map((item, i) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.to ? (
              <Link to={item.to} className="transition-colors hover:text-champagne">
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
