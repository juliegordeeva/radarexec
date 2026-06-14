import { footerContent } from '@/content/footer';
import { ThinLine } from '@/components/ui/ThinLine';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="bg-graphite text-ivory">
      <Container className="py-section-y-sm md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <p className="font-mono text-sm uppercase tracking-[0.2em]">{footerContent.brand}</p>
            <p className="mt-4 max-w-xs font-sans text-body-mobile text-stone-light leading-relaxed">
              {footerContent.description}
            </p>
          </div>

          {footerContent.columns.map((column) => (
            <div key={column.title}>
              <p className="mb-4 font-mono text-label uppercase tracking-[0.14em] text-champagne/70">
                {column.title}
              </p>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-stone-light transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <ThinLine className="my-10" />

        <div className="flex flex-col gap-2 font-mono text-xs text-stone md:flex-row md:justify-between">
          <span>© RADAR EXEC</span>
          <span>{footerContent.legal}</span>
        </div>
      </Container>
    </footer>
  );
}
