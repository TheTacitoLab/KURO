import { cx } from '@/lib/utils'

interface MetadataLineProps {
  items: string[]
  className?: string
  theme?: 'dark' | 'light'
  separator?: string
}

export function MetadataLine({
  items,
  className,
  theme = 'light',
  separator = '✶',
}: MetadataLineProps) {
  return (
    <div
      className={cx(
        'type-label flex flex-wrap items-center gap-x-3 gap-y-1',
        theme === 'dark' ? 'text-white/70' : 'text-ash',
        className
      )}
    >
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 && (
            <span aria-hidden="true" className="text-coral/70">
              {separator}
            </span>
          )}
          {item}
        </span>
      ))}
    </div>
  )
}
