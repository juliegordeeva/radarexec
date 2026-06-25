import { useEffect, useState } from 'react';
import { CTA_MAILTO } from '@/lib/contact';
import { navItems } from '@/content/footer';
import { Button } from '@/components/ui/Button';
import { cn, scrollToSection } from '@/lib/utils';

const SECTION_THEMES: Record<string, 'dark' | 'light'> = {
  hero: 'dark',
  context: 'light',
  formats: 'dark',
  practices: 'light',
  'radar-races': 'dark',
  contact: 'light',
};

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const sections = Object.keys(SECTION_THEMES)
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id && SECTION_THEMES[visible.target.id]) {
          setTheme(SECTION_THEMES[visible.target.id]);
        }
      },
      { threshold: [0.2, 0.5], rootMargin: '-80px 0px -40% 0px' },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const isDark = theme === 'dark';

  const handleNav = (href: string) => {
    scrollToSection(href);
    setMenuOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-500',
        isDark ? 'bg-graphite-deep/90 text-ivory' : 'bg-ivory/95 text-graphite-deep',
        'backdrop-blur-sm border-b',
        isDark ? 'border-ivory/5' : 'border-graphite-deep/5',
      )}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-5 md:px-10 xl:px-20">
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#hero');
          }}
          className="font-mono text-sm uppercase tracking-[0.2em]"
        >
          RADAR EXEC
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className="font-mono text-xs uppercase tracking-[0.14em] text-stone transition-colors hover:text-champagne"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button variant="secondary" theme={isDark ? 'dark' : 'light'} href={CTA_MAILTO}>
            Обсудить задачу
          </Button>
        </div>

        <button
          type="button"
          className="font-mono text-xs uppercase tracking-[0.14em] lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          {menuOpen ? 'Закрыть' : 'Меню'}
        </button>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 flex flex-col gap-6 bg-graphite-deep px-8 py-12 text-ivory lg:hidden">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href)}
              className="text-left font-mono text-sm uppercase tracking-[0.14em]"
            >
              {item.label}
            </button>
          ))}
          <Button variant="secondary" theme="dark" href={CTA_MAILTO} fullWidth>
            Обсудить задачу
          </Button>
        </div>
      )}
    </header>
  );
}
