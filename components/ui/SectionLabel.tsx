import { cx } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  number?: string
  theme?: 'dark' | 'light'
  accent?: 'sun' | 'coral' | 'sea' | 'olive' | 'lilac' | 'none'
}

// Accent keys kept stable for call sites; values remapped to the OBRA palette.
const accentClass: Record<string, string> = {
  sun: 'bg-flare text-void',
  coral: 'bg-coral text-white',
  sea: 'bg-electric text-white',
  olive: 'bg-violet text-white',
  lilac: 'bg-violet text-white',
  none: '',
}

export function SectionLabel({
  children,
  className,
  number,
  theme = 'light',
  accent = 'none',
}: SectionLabelProps) {
  const baseColor = theme === 'dark' ? 'text-white/70' : 'text-ash'
  return (
    <div className={cx('flex items-center gap-3 mb-6', className)}>
      {accent !== 'none' && (
        <span
          className={cx(
            'type-tag px-2.5 py-1.5 rounded-full',
            accentClass[accent]
          )}
        >
          {number ?? '•'}
        </span>
      )}
      {accent === 'none' && number && (
        <span className={cx('type-tag', baseColor)}>{number}</span>
      )}
      <span className={cx('type-label', baseColor)}>{children}</span>
    </div>
  )
}
