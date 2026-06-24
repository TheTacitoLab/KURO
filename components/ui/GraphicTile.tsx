import { cx } from '@/lib/utils'

type Tone = 'sun' | 'coral' | 'sea' | 'mint' | 'olive' | 'lilac' | 'sand' | 'terracotta' | 'ink' | 'cream'

interface GraphicTileProps {
  number?: string
  label?: string
  title: string
  description?: string
  tone?: Tone
  pattern?: 'stripes' | 'dots' | 'pitch' | 'none'
  className?: string
  children?: React.ReactNode
}

// Tone keys kept stable for call sites; values remapped to the OBRA palette.
// Light accents (flare, ash) take dark text; dark accents take white text.
const toneMap: Record<Tone, { bg: string; text: string; sub: string }> = {
  sun: { bg: 'bg-flare', text: 'text-void', sub: 'text-void/70' },
  coral: { bg: 'bg-coral', text: 'text-white', sub: 'text-white/80' },
  sea: { bg: 'bg-electric', text: 'text-white', sub: 'text-white/80' },
  mint: { bg: 'bg-electric', text: 'text-white', sub: 'text-white/80' },
  olive: { bg: 'bg-violet', text: 'text-white', sub: 'text-white/80' },
  lilac: { bg: 'bg-violet', text: 'text-white', sub: 'text-white/80' },
  sand: { bg: 'bg-ash', text: 'text-void', sub: 'text-void/70' },
  terracotta: { bg: 'bg-coral', text: 'text-white', sub: 'text-white/80' },
  ink: { bg: 'bg-obsidian', text: 'text-white', sub: 'text-white/70' },
  cream: { bg: 'bg-void border border-line', text: 'text-white', sub: 'text-ash' },
}

export function GraphicTile({
  number,
  label,
  title,
  description,
  tone = 'sun',
  pattern = 'none',
  className,
  children,
}: GraphicTileProps) {
  const t = toneMap[tone]
  return (
    <div
      className={cx(
        'relative overflow-hidden rounded-2xl p-6 md:p-7 flex flex-col gap-4 min-h-[220px]',
        t.bg,
        t.text,
        className
      )}
    >
      {pattern === 'stripes' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(135deg, currentColor 0, currentColor 2px, transparent 2px, transparent 12px)',
          }}
        />
      )}
      {pattern === 'dots' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1.5px 1.5px, currentColor 1.5px, transparent 1.5px)',
            backgroundSize: '12px 12px',
          }}
        />
      )}
      {pattern === 'pitch' && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, currentColor 0, currentColor 1px, transparent 1px, transparent 44px)',
          }}
        />
      )}

      <div className="relative z-10 flex items-start justify-between gap-4">
        {number && (
          <span className="type-tag opacity-80">{number}</span>
        )}
        {label && (
          <span className="type-tag opacity-80 ml-auto">{label}</span>
        )}
      </div>

      <div className="relative z-10 mt-auto">
        <h3 className="type-headline mb-2">{title}</h3>
        {description && (
          <p className={cx('type-body', t.sub)}>{description}</p>
        )}
        {children}
      </div>
    </div>
  )
}
