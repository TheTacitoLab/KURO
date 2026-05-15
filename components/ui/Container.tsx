import { cx } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Tag = 'div' }: ContainerProps) {
  return (
    <Tag
      className={cx(
        'mx-auto w-full max-w-[1440px] px-8 md:px-[80px]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
