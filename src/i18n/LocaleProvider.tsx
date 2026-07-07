import { type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { LocaleContext, localeFromPath } from './locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}
