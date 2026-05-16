import { cx } from '@/lib/utils'

interface RuleProps {
  weight?: 'hair' | 'heavy'
  theme?: 'dark' | 'light'
  className?: string
}

export function Rule({ weight = 'hair', theme = 'light', className }: RuleProps) {
  return (
    <hr
      className={cx(
        'border-0',
        weight === 'hair'
          ? theme === 'dark'
            ? 'h-px bg-cream/25'
            : 'h-px bg-ink/15'
          : theme === 'dark'
          ? 'h-[3px] bg-cream'
          : 'h-[3px] bg-ink',
        className
      )}
    />
  )
}
