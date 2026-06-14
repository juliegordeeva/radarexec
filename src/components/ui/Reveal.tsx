import { cn } from '@/lib/utils';

interface RevealProps {
  children: React.ReactNode;
  visible?: boolean;
  className?: string;
  delay?: number;
}

export function Reveal({ children, visible = true, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={cn(
        'transition-all duration-reveal ease-reveal',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
