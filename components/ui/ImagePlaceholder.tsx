import { cx } from '@/lib/utils'

type Tone = 'coral' | 'sun' | 'sea' | 'mint' | 'olive' | 'lilac' | 'sand' | 'terracotta'

interface ImagePlaceholderProps {
  label?: string
  sublabel?: string
  aspectRatio?: string
  className?: string
  tone?: Tone
  number?: string
  tilt?: 'left' | 'right' | 'none'
}

// Tone keys kept stable for call sites; values remapped to the OBRA palette.
const toneMap: Record<Tone, { bg: string; ink: string; accent: string }> = {
  coral: { bg: 'bg-coral', ink: 'text-white', accent: 'bg-flare' },
  sun: { bg: 'bg-flare', ink: 'text-void', accent: 'bg-coral' },
  sea: { bg: 'bg-electric', ink: 'text-white', accent: 'bg-ash' },
  mint: { bg: 'bg-electric', ink: 'text-white', accent: 'bg-violet' },
  olive: { bg: 'bg-violet', ink: 'text-white', accent: 'bg-flare' },
  lilac: { bg: 'bg-violet', ink: 'text-white', accent: 'bg-coral' },
  sand: { bg: 'bg-ash', ink: 'text-void', accent: 'bg-coral' },
  terracotta: { bg: 'bg-coral', ink: 'text-white', accent: 'bg-ash' },
}

export function ImagePlaceholder({
  label = 'KURO JERSEY',
  sublabel = 'EDITION / 001',
  aspectRatio = 'aspect-[4/5]',
  className,
  tone = 'coral',
  number,
  tilt = 'none',
}: ImagePlaceholderProps) {
  const t = toneMap[tone]

  return (
    <div
      className={cx(
        'relative overflow-hidden tex-grain',
        t.bg,
        t.ink,
        aspectRatio,
        tilt === 'left' && 'rotate-tilt',
        tilt === 'right' && 'rotate-tilt-r',
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* Pitch line pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, currentColor 0, currentColor 1px, transparent 1px, transparent 56px), repeating-linear-gradient(90deg, currentColor 0, currentColor 1px, transparent 1px, transparent 56px)',
        }}
        aria-hidden="true"
      />

      {/* Big numeral */}
      {number && (
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span
            className="font-extrabold leading-none opacity-90"
            style={{
              fontSize: 'clamp(7rem, 28vw, 22rem)',
              letterSpacing: '-0.05em',
            }}
          >
            {number}
          </span>
        </div>
      )}

      {/* Corner sticker */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2" aria-hidden="true">
        <span className={cx('w-2 h-2 rounded-full', t.accent)} />
        <span className="type-tag">KURO · LTD</span>
      </div>

      {/* Edition mark */}
      <div className="absolute top-4 right-4 z-10" aria-hidden="true">
        <span className="type-tag">{sublabel}</span>
      </div>

      {/* Bottom label bar */}
      <div className="absolute left-0 right-0 bottom-0 z-10 p-4 md:p-5 border-t border-current/20 backdrop-blur-[1px]">
        <span className="type-label block">{label}</span>
      </div>
    </div>
  )
}
