import { Outlet } from 'react-router-dom';
import { LocaleProvider, useLocale } from '@/i18n';
import { ui } from '@/content/ui';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollToTop } from '@/app/ScrollToTop';

function LayoutShell() {
  const t = ui[useLocale()];

  return (
    <>
      <ScrollToTop />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-graphite-deep"
      >
        {t.skipToContent}
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export function SiteLayout() {
  return (
    <LocaleProvider>
      <LayoutShell />
    </LocaleProvider>
  );
}
