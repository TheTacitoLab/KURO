import { cx } from '@/lib/utils'

interface SpecItem {
  label?: string
  value: string
}

interface SpecListProps {
  items: SpecItem[]
  className?: string
}

export function SpecList({ items, className }: SpecListProps) {
  return (
    <ul className={cx('space-y-0 divide-y divide-[#DDDDDD]', className)}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start justify-between gap-8 py-3">
          {item.label && (
            <span className="type-label text-[#777777] shrink-0">{item.label}</span>
          )}
          <span className="type-body text-[#111111] text-right">{item.value}</span>
        </li>
      ))}
    </ul>
  )
}
