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

export function SpecList({ items, className, theme = 'light' }: SpecListProps) {
  const dividerClass = theme === 'dark' ? 'divide-white/15' : 'divide-line'
  const labelClass = theme === 'dark' ? 'text-white/70' : 'text-ash'
  const valueClass = theme === 'dark' ? 'text-white' : 'text-white'

  return (
    <ul className={cx('space-y-0 divide-y', dividerClass, className)}>
      {items.map((item, i) => (
        <li
          key={i}
          className="flex items-baseline justify-between gap-8 py-5"
        >
          {item.label && (
            <span className={cx('type-label shrink-0', labelClass)}>
              {item.label}
            </span>
          )}
          {/* Technical value — monospace. */}
          <span className={cx('type-body font-mono text-right font-medium', valueClass)}>
            {item.value}
          </span>
        </li>
      ))}
    </ul>
  )
}
