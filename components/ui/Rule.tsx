import { cx } from '@/lib/utils'

interface RuleProps {
  weight?: 'hair' | 'heavy'
  theme?: 'dark' | 'light'
  className?: string
}

export function Rule({ weight = 'hair', theme = 'dark', className }: RuleProps) {
  return (
    <hr
      className={cx(
        'border-0',
        weight === 'hair'
          ? theme === 'dark'
            ? 'h-px bg-ash'
            : 'h-px bg-hair'
          : theme === 'dark'
          ? 'h-[3px] bg-white'
          : 'h-[3px] bg-ink',
        className
      )}
    />
  )
}
