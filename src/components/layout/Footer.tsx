import { Link } from 'react-router-dom';
import { footerContent } from '@/content/footer';
import { localizedTo, useLocale } from '@/i18n';
import { ThinLine } from '@/components/ui/ThinLine';
import { Container } from '@/components/ui/Container';

const linkClass = 'font-sans text-sm text-stone-light transition-colors hover:text-ivory';

function FooterLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  const locale = useLocale();

  if (external) {
    const isHttp = href.startsWith('http');
    return (
      <a
        href={href}
        className={linkClass}
        {...(isHttp ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={localizedTo(href, locale)} className={linkClass}>
      {label}
    </Link>
  );
}

export function Footer() {
  const content = footerContent[useLocale()];

  return (
    <footer className="bg-graphite text-ivory">
      <Container className="py-section-y-sm md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-mono text-sm uppercase tracking-[0.2em]">{content.brand}</p>
            <p className="mt-4 max-w-xs font-sans text-body-mobile text-stone-light leading-relaxed">
              {content.description}
            </p>
          </div>

          {content.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 font-mono text-label uppercase tracking-[0.14em] text-champagne/70">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <FooterLink href={link.href} label={link.label} external={link.external} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ThinLine className="my-10" />

        <div className="flex flex-col gap-2 font-mono text-xs text-stone md:flex-row md:justify-between">
          <span>© {content.brand}</span>
          <span>{content.legal}</span>
        </div>
      </Container>
    </footer>
  );
}
