import Link from 'next/link'
import { cx } from '@/lib/utils'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  className?: string
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
  'aria-label': ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center type-label transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white disabled:opacity-40 disabled:cursor-not-allowed'

  const variants = {
    // White fill on dark backgrounds
    primary: 'bg-white text-ink px-7 py-4 hover:bg-hair',
    // White border on dark backgrounds
    secondary:
      'bg-transparent text-white border border-white px-7 py-4 hover:bg-white hover:text-ink',
    // Subtle text link
    ghost: 'bg-transparent text-mute px-0 py-1 underline underline-offset-4 hover:text-white',
  }

  const classes = cx(base, variants[variant], className)

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
