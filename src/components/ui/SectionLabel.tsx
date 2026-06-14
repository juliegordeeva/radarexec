import { cn } from '@/lib/utils';

interface SectionLabelProps {
  number?: string;
  label?: string;
  theme?: 'dark' | 'light' | 'taupe';
}

export function SectionLabel({ number, label, theme = 'light' }: SectionLabelProps) {
  return (
    <div
      className={cn(
        'mb-8 font-mono text-label uppercase tracking-[0.14em]',
        theme === 'light' ? 'text-stone' : 'text-stone-light',
      )}
    >
      {number && <span>{number}</span>}
      {number && label && <span className="mx-2 text-champagne/60">/</span>}
      {label && <span>{label}</span>}
    </div>
  );
}
