import { cx } from '@/lib/utils'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  number?: string
}

export function SectionLabel({ children, className, number }: SectionLabelProps) {
  return (
    <div className={cx('flex items-center gap-4 mb-8 md:mb-12', className)}>
      {number && (
        <span className="type-label text-[#777777]">{number}</span>
      )}
      <span className="type-label text-[#777777]">{children}</span>
    </div>
  )
}
