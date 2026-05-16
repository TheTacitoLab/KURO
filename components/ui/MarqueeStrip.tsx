import { cx } from '@/lib/utils'

interface MarqueeStripProps {
  items: string[]
  className?: string
  tone?: 'ink' | 'sun' | 'coral' | 'cream' | 'sea' | 'olive'
  separator?: string
  size?: 'sm' | 'md' | 'lg'
}

const toneMap = {
  ink: 'bg-ink text-cream',
  sun: 'bg-sun text-ink',
  coral: 'bg-coral text-cream',
  cream: 'bg-cream text-ink border-y border-ink/10',
  sea: 'bg-sea text-cream',
  olive: 'bg-olive text-cream',
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
