import { cx } from '@/lib/utils'

interface MetadataLineProps {
  items: string[]
  className?: string
}

export function MetadataLine({ items, className }: MetadataLineProps) {
  return (
    <div className={cx('type-label text-[#777777] flex flex-wrap gap-x-3 gap-y-1', className)}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-3">
          {i > 0 && <span aria-hidden="true">/</span>}
          {item}
        </span>
      ))}
    </div>
  )
}
