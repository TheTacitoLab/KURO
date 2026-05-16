import { cx } from '@/lib/utils'

interface StatementBlockProps {
  children: React.ReactNode
  className?: string
  tone?: 'ink' | 'cream' | 'coral' | 'sun' | 'sea' | 'olive' | 'terracotta' | 'lilac'
  size?: 'md' | 'lg'
}

const toneMap = {
  ink: 'bg-ink text-cream',
  cream: 'bg-cream text-ink',
  coral: 'bg-coral text-cream',
  sun: 'bg-sun text-ink',
  sea: 'bg-sea text-cream',
  olive: 'bg-olive text-cream',
  terracotta: 'bg-terracotta text-cream',
  lilac: 'bg-lilac text-ink',
}

export function StatementBlock({
  children,
  className,
  tone = 'ink',
  size = 'md',
}: StatementBlockProps) {
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-3xl',
        toneMap[tone],
        size === 'lg' ? 'p-10 md:p-16' : 'p-8 md:p-12',
        className
      )}
    >
      <div className="relative z-10">{children}</div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30 tex-grain"
      />
    </div>
  )
}
