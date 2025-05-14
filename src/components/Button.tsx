'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils'; // Optional: a utility to merge classNames
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
    'inline-flex items-center justify-center rounded-full font-normal px-6 py-3 transition duration-300';

  const variants: Record<ButtonVariants, string> = {
    primary:
      'bg-[#262628] text-white hover:border-2 border border-[var(--primary)] transition',
    secondary:
      'bg-transparent text-black hover:border-2 border border-[#262628] transition',
    ghost:
      'bg-transparent text-white hover:text-[var(--primary)] hover:underline',
  };

  const classes = cn(baseClasses, variants[variant], className);

  return href ? (
    <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
      {text}
    </Link>
  ) : (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {text}
    </button>
  );
}
