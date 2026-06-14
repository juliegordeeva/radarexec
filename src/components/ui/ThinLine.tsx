import { cn } from '@/lib/utils';

interface ThinLineProps {
  className?: string;
  animate?: boolean;
  visible?: boolean;
}

export function ThinLine({ className, animate = false, visible = true }: ThinLineProps) {
  return (
    <div
      className={cn(
        'h-px bg-champagne/40',
        animate && 'origin-left transition-transform duration-reveal ease-reveal',
        animate && (visible ? 'scale-x-100' : 'scale-x-0'),
        className,
      )}
    />
  );
}
