import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}

/** Зарезервировано под будущие страницы `/practices/:slug` */
export function AppLayout({ children }: AppLayoutProps) {
  return <>{children}</>;
}
