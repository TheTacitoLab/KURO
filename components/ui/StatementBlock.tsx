import { cx } from '@/lib/utils'

interface StatementBlockProps {
  children: React.ReactNode
  className?: string
  tone?: 'ink' | 'cream' | 'coral' | 'sun' | 'sea' | 'olive' | 'terracotta' | 'lilac'
  size?: 'md' | 'lg'
}

// Tone keys kept stable for call sites; values remapped to the OBRA palette.
const toneMap = {
  ink: 'bg-obsidian text-white',
  cream: 'bg-void text-white',
  coral: 'bg-coral text-white',
  sun: 'bg-flare text-void',
  sea: 'bg-electric text-white',
  olive: 'bg-violet text-white',
  terracotta: 'bg-coral text-white',
  lilac: 'bg-violet text-white',
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
