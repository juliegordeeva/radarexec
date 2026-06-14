import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Container } from './Container';
import { SectionLabel } from './SectionLabel';

type SectionTheme = 'dark' | 'light' | 'taupe';

interface SectionProps {
  id: string;
  children: ReactNode;
  theme?: SectionTheme;
  className?: string;
  number?: string;
  label?: string;
}

const themeClasses: Record<SectionTheme, string> = {
  dark: 'bg-graphite-deep text-ivory',
  light: 'bg-ivory text-graphite-deep',
  taupe: 'bg-taupe text-ivory',
};

export function Section({
  id,
  children,
  theme = 'light',
  className,
  number,
  label,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-section-y-sm md:py-section-y-md xl:py-section-y',
        themeClasses[theme],
        className,
      )}
    >
      <Container>
        {(number || label) && <SectionLabel number={number} label={label} theme={theme} />}
        {children}
      </Container>
    </section>
  );
}
