import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CTA_MAILTO } from '@/lib/contact';
import { primaryNav } from '@/content/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const location = useLocation();

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-graphite-deep/95 text-ivory backdrop-blur-sm">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 md:px-10 xl:px-20">
        <Link to="/" className="font-mono text-sm uppercase tracking-[0.2em] text-ivory">
          RADAR EXECUTIVE
        </Link>

        <nav aria-label="Основная навигация" className="hidden items-center gap-8 lg:flex">
          {primaryNav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navLinkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" theme="dark" href={CTA_MAILTO}>
            Обсудить задачу
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
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 top-[73px] z-40 flex flex-col gap-2 bg-graphite-deep px-8 py-10 text-ivory lg:hidden"
        >
          {primaryNav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
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
          <Button variant="secondary" theme="dark" href={CTA_MAILTO} fullWidth className="mt-4">
            Обсудить задачу
          </Button>
        </div>
      )}
    </header>
  );
}
