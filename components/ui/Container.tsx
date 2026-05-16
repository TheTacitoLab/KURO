import { cx } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  size?: 'default' | 'wide'
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  size = 'default',
}: ContainerProps) {
  return (
    <Tag
      className={cx(
        'mx-auto w-full px-6 md:px-10 lg:px-16',
        size === 'wide' ? 'max-w-[1600px]' : 'max-w-[1440px]',
        className
      )}
    >
      {children}
    </Tag>
  )
}
