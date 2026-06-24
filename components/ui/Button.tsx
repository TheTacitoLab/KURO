import Link from 'next/link'
import { cx } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost' | 'sun' | 'coral'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
  size?: 'md' | 'lg'
  'aria-label'?: string
}

export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled,
  className,
  size = 'md',
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 type-label rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 disabled:opacity-40 disabled:cursor-not-allowed'

  const sizes = {
    md: 'px-6 py-3.5',
    lg: 'px-8 py-4',
  }

  const variants = {
    // Primary CTA — electric punches hardest on near-black.
    primary:
      'bg-electric text-white hover:brightness-110 focus-visible:outline-white',
    secondary:
      'bg-transparent text-white border border-line hover:bg-white hover:text-void focus-visible:outline-white',
    ghost:
      'bg-transparent text-white hover:text-coral underline underline-offset-4 decoration-2 decoration-coral/40 hover:decoration-coral rounded-none px-0 py-1',
    sun:
      'bg-flare text-void hover:brightness-105 focus-visible:outline-white',
    coral:
      'bg-coral text-white hover:brightness-110 focus-visible:outline-white',
  }

  const classes = cx(
    base,
    variant !== 'ghost' && sizes[size],
    variants[variant],
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
