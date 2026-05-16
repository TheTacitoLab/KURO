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
    primary:
      'bg-ink text-cream hover:bg-coal focus-visible:outline-ink',
    secondary:
      'bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream focus-visible:outline-ink',
    ghost:
      'bg-transparent text-ink hover:text-ember underline underline-offset-4 decoration-2 decoration-ember/40 hover:decoration-ember rounded-none px-0 py-1',
    sun:
      'bg-sun text-ink hover:bg-coral hover:text-cream focus-visible:outline-ink',
    coral:
      'bg-coral text-cream hover:bg-ember focus-visible:outline-ink',
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
