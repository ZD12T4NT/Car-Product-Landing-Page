'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type ButtonVariants = 'primary' | 'secondary' | 'ghost';

type CommonProps = {
  text: string;
  variant?: ButtonVariants;
  className?: string;
};

type ButtonProps = CommonProps &
  (
    | ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
    | (ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  );

export default function Button({
  text,
  variant = 'primary',
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    'relative inline-block group rounded-full overflow-hidden isolate transition duration-300';

  const innerSpanClasses =
    'inline-flex items-center justify-center px-6 py-3 font-normal rounded-full z-10 relative transition-all duration-300 ease-in-out group-hover:scale-[0.95]';

  const variants: Record<ButtonVariants, string> = {
    primary:
      'border border-[var(--primary)] bg-[#262628] text-white',
    secondary:
      'border border-[#262628] bg-transparent text-black',
    ghost:
      'bg-transparent text-white hover:text-[var(--primary)] hover:underline border-transparent',
  };

  const classes = cn(baseClasses, variants[variant], className);

  const renderContent = () => (
    <span className={innerSpanClasses}>
      {text}
    </span>
  );

  return href ? (
    <Link
      href={href}
      className={classes}
      {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {renderContent()}
    </Link>
  ) : (
    <button
      className={classes}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {renderContent()}
    </button>
  );
}
