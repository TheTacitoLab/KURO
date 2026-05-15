import { cx } from '@/lib/utils'

interface SpecItem {
  label?: string
  value: string
}

interface SpecListProps {
  items: SpecItem[]
  className?: string
  theme?: 'dark' | 'light'
}

export function SpecList({ items, className, theme = 'dark' }: SpecListProps) {
  const dividerClass = theme === 'dark' ? 'divide-ash' : 'divide-hair'
  const labelClass = theme === 'dark' ? 'text-mute' : 'text-mid'
  const valueClass = theme === 'dark' ? 'text-white' : 'text-ink'

  return (
    <ul className={cx('space-y-0 divide-y', dividerClass, className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start justify-between gap-8 py-4">
          {item.label && (
            <span className={cx('type-label shrink-0', labelClass)}>{item.label}</span>
          )}
          <span className={cx('type-body text-right', valueClass)}>{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
