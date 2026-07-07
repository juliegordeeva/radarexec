import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface TextLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
}

const linkClass =
  'inline-flex items-center gap-1 font-mono text-cta uppercase tracking-[0.08em] text-champagne underline-offset-4 transition-colors hover:text-champagne-deep focus-visible:underline';

/** Внутренняя (React Router) или внешняя ссылка с единым стилем. */
export function TextLink({ to, children, className }: TextLinkProps) {
  const isExternal = to.startsWith('http') || to.startsWith('mailto:') || to.endsWith('.html');

  if (isExternal) {
    const external = to.startsWith('http');
    return (
      <a
        href={to}
        className={cn(linkClass, className)}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={cn(linkClass, className)}>
      {children}
    </Link>
  );
}
