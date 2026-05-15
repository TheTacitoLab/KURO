import { cx } from '@/lib/utils'

interface MetadataLineProps {
  items: string[]
  className?: string
  theme?: 'dark' | 'light'
}

export function MetadataLine({ items, className, theme = 'dark' }: MetadataLineProps) {
  return (
    <div
      className={cx(
        'type-label flex flex-wrap gap-x-3 gap-y-1',
        theme === 'dark' ? 'text-ash' : 'text-mid',
        className
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item}
        </span>
      ))}
    </div>
  )
}
