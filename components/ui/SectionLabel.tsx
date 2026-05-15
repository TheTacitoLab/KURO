import { cx } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  number?: string
  theme?: 'dark' | 'light'
}

export function SectionLabel({
  children,
  className,
  number,
  theme = 'dark',
}: SectionLabelProps) {
  return (
    <div className={cx('flex items-center gap-4 mb-8 md:mb-10', className)}>
      {number && (
        <span className={cx('type-label', theme === 'dark' ? 'text-ash' : 'text-hair')}>
          {number}
        </span>
      )}
      <span className={cx('type-label', theme === 'dark' ? 'text-mute' : 'text-mid')}>
        {children}
      </span>
    </div>
  )
}
