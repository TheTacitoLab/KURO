import { cx } from '@/lib/utils'

interface StatusTagProps {
  children: React.ReactNode
  variant?: 'available' | 'soon'
  className?: string
}

// Neutral light/dark overlays so the pill reads on any coloured accent card in the dark theme.
export function StatusTag({ children, variant = 'available', className }: StatusTagProps) {
  return (
    <span
      className={cx(
        'type-tag inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
        variant === 'available'
          ? 'bg-white/15 text-white border border-white/25'
          : 'bg-void/40 text-white/70 border border-white/15',
        className
      )}
    >
      <span
        className={cx(
          'inline-block w-1.5 h-1.5 rounded-full',
          variant === 'available' ? 'bg-white animate-pulse' : 'bg-white/40'
        )}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}
