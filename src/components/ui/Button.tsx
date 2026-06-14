import type { ButtonHTMLAttributes } from 'react';
import { cn, scrollToSection } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary';
type ButtonTheme = 'dark' | 'light';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  theme?: ButtonTheme;
  href?: string;
  fullWidth?: boolean;
}

export function Button({
  variant = 'primary',
  theme = 'dark',
  href,
  fullWidth,
  className,
  children,
  onClick,
  type = 'button',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center border px-6 py-3 font-sans text-cta uppercase tracking-[0.08em] transition-colors duration-300 rounded-sm';

  const variants: Record<ButtonVariant, Record<ButtonTheme, string>> = {
    primary: {
      dark: 'border-ivory/20 bg-ivory text-graphite-deep hover:bg-champagne hover:border-champagne',
      light:
        'border-graphite-deep/20 bg-ivory text-graphite-deep hover:bg-champagne hover:border-champagne',
    },
    secondary: {
      dark: 'border-ivory/30 bg-transparent text-ivory hover:bg-ivory/5',
      light: 'border-graphite-deep/30 bg-transparent text-graphite-deep hover:bg-graphite-deep/5',
    },
  };

  const classes = cn(base, variants[variant][theme], fullWidth && 'w-full', className);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      scrollToSection(href);
    }
    onClick?.(e);
  };

  return (
    <button type={type} className={classes} onClick={handleClick} {...props}>
      {children}
    </button>
  );
}
