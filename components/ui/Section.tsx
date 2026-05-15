import { cx } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  as?: React.ElementType
}

export function Section({ children, className, id, as: Tag = 'section' }: SectionProps) {
  return (
    <Tag id={id} className={cx('py-20 md:py-28', className)}>
      {children}
    </Tag>
  )
}
