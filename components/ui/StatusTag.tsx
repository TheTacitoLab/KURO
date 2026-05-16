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
        'type-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
        variant === 'available'
          ? 'bg-mint/40 text-ink border border-ink/15'
          : 'bg-cream text-smoke border border-ink/15',
        className
      )}
    >
      <span
        className={cx(
          'inline-block w-1.5 h-1.5 rounded-full',
          variant === 'available' ? 'bg-olive animate-pulse' : 'bg-dust'
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
