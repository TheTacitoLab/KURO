import { cx } from '@/lib/utils'

interface RuleProps {
  weight?: 'hair' | 'heavy'
  className?: string
}

export function Rule({ weight = 'hair', className }: RuleProps) {
  return (
    <hr
      className={cx(
        'border-0',
        weight === 'hair' ? 'h-px bg-[#DDDDDD]' : 'h-[3px] bg-[#111111]',
        className
      )}
    />
  )
}
