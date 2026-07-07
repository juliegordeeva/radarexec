import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CTA_MAILTO } from '@/lib/contact';
import { primaryNav } from '@/content/navigation';
import { ui } from '@/content/ui';
import { LOCALES, localizedTo, stripLocale, useLocale, type Locale } from '@/i18n';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

function LanguageSwitcher({ className }: { className?: string }) {
  const locale = useLocale();
  const { pathname } = useLocation();
  const basePath = stripLocale(pathname);

  return (
    <div
      className={cn('flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em]', className)}
      role="group"
      aria-label={ui[locale].languageSwitchAria}
    >
      {LOCALES.map((code: Locale, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && <span className="text-ivory/25">/</span>}
          <Link
            to={localizedTo(basePath, code)}
            aria-current={code === locale ? 'true' : undefined}
            className={cn(
              'transition-colors hover:text-champagne',
              code === locale ? 'text-champagne' : 'text-stone-light',
            )}
          >
            {code}
          </Link>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();
  const locale = useLocale();
  const t = ui[locale];
  const nav = primaryNav[locale];

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;

    document.body.style.overflow = 'hidden';
    firstLinkRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      'font-mono text-xs uppercase tracking-[0.14em] transition-colors hover:text-champagne',
      isActive ? 'text-champagne' : 'text-stone-light',
    );

  const navAriaLabel = locale === 'ru' ? 'Основная навигация' : 'Main navigation';

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-graphite-deep/95 text-ivory backdrop-blur-sm">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 md:px-10 xl:px-20">
          <Link
            to={localizedTo('/', locale)}
            className="font-mono text-sm uppercase tracking-[0.2em] text-ivory"
          >
            RADAR EXECUTIVE
          </Link>

          <nav aria-label={navAriaLabel} className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={localizedTo(item.to, locale)}
                end={item.to === '/'}
                className={navLinkClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            <LanguageSwitcher />
            <Button variant="secondary" theme="dark" href={CTA_MAILTO}>
              {t.headerCta}
            </Button>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className="min-h-[44px] font-mono text-xs uppercase tracking-[0.14em] lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (locale === 'ru' ? 'Закрыть' : 'Close') : locale === 'ru' ? 'Меню' : 'Menu'}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[73px] z-40 flex flex-col gap-2 overflow-y-auto bg-graphite-deep px-8 py-10 text-ivory lg:hidden"
        >
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={localizedTo(item.to, locale)}
              end={item.to === '/'}
              ref={i === 0 ? firstLinkRef : undefined}
              className={({ isActive }) =>
                cn(
                  'min-h-[44px] py-2 text-left font-mono text-sm uppercase tracking-[0.14em]',
                  isActive ? 'text-champagne' : 'text-ivory',
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
          <LanguageSwitcher className="mt-4 py-2" />
          <Button variant="secondary" theme="dark" href={CTA_MAILTO} fullWidth className="mt-2">
            {t.headerCta}
          </Button>
        </div>
      )}
    </>
  );
}
