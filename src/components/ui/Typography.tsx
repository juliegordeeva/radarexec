import { cn } from '@/lib/utils';

interface HeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
}

export function Heading({ as = 'h2', children, className }: HeadingProps) {
  const Tag = as;
  const sizes = {
    h1: 'font-display text-hero-mobile md:text-hero-desktop font-medium',
    h2: 'font-display text-section-mobile md:text-section-desktop font-medium',
    h3: 'font-display text-subheadline-mobile md:text-subheadline font-medium',
  };

  return <Tag className={cn(sizes[as], className)}>{children}</Tag>;
}

export function BodyText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cn('font-sans text-body-mobile md:text-body text-stone leading-relaxed', className)}>
      {children}
    </p>
  );
}
