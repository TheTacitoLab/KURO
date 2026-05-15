import { cx } from '@/lib/utils'

interface StatusTagProps {
  children: React.ReactNode
  variant?: 'available' | 'soon'
  className?: string
}

export function StatusTag({ children, variant = 'available', className }: StatusTagProps) {
  return (
    <span
      className={cx(
        'type-label inline-block px-3 py-1.5 border',
        variant === 'available'
          ? 'border-white text-white'
          : 'border-ash text-mute',
        className
      )}
    >
      {children}
    </span>
  )
}
