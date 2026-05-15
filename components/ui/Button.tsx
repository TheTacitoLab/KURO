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
    'inline-flex items-center type-label transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#111111] disabled:opacity-40 disabled:cursor-not-allowed'

  const variants = {
    primary:
      'bg-[#111111] text-[#FAFAFA] px-7 py-4 hover:bg-[#000000]',
    secondary:
      'bg-transparent text-[#111111] border border-[#111111] px-7 py-4 hover:bg-[#111111] hover:text-[#FAFAFA]',
    ghost:
      'bg-transparent text-[#111111] px-0 py-1 underline underline-offset-4 hover:text-[#4A4A4A]',
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
