import { cx } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  number?: string
  theme?: 'dark' | 'light'
  accent?: 'sun' | 'coral' | 'sea' | 'olive' | 'lilac' | 'none'
}

const accentClass: Record<string, string> = {
  sun: 'bg-sun text-ink',
  coral: 'bg-coral text-cream',
  sea: 'bg-sea text-cream',
  olive: 'bg-olive text-cream',
  lilac: 'bg-lilac text-ink',
  none: '',
}

export function SectionLabel({
  children,
  className,
  number,
  theme = 'light',
  accent = 'none',
}: SectionLabelProps) {
  const baseColor = theme === 'dark' ? 'text-cream/70' : 'text-smoke'
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
