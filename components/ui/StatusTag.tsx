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
          ? 'border-[#111111] text-[#111111]'
          : 'border-[#DDDDDD] text-[#777777]',
        className
      )}
    >
      {children}
    </span>
  )
}
