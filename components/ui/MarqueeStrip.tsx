import { cx } from '@/lib/utils'

interface MarqueeStripProps {
  items: string[]
  className?: string
  tone?: 'ink' | 'sun' | 'coral' | 'cream' | 'sea' | 'olive'
  separator?: string
  size?: 'sm' | 'md' | 'lg'
}

// Tone keys kept stable for call sites; values remapped to the OBRA palette.
const toneMap = {
  ink: 'bg-obsidian text-white',
  sun: 'bg-flare text-void',
  coral: 'bg-coral text-white',
  cream: 'bg-void text-white border-y border-line',
  sea: 'bg-electric text-white',
  olive: 'bg-violet text-white',
}

const sizeMap = {
  sm: 'py-3 text-sm',
  md: 'py-5 text-xl',
  lg: 'py-7 text-3xl md:text-5xl',
}

export function MarqueeStrip({
  items,
  className,
  tone = 'ink',
  separator = '✶',
  size = 'md',
}: MarqueeStripProps) {
  const loop = [...items, ...items, ...items, ...items]
  return (
    <div
      className={cx(
        'relative overflow-hidden',
        toneMap[tone],
        sizeMap[size],
        className
      )}
      aria-hidden="true"
    >
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-extrabold uppercase tracking-tight px-6">
              {item}
            </span>
            <span className="opacity-70 px-2">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
