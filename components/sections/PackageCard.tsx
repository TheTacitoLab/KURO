import { Button } from '@/components/ui/Button'
import { StatusTag } from '@/components/ui/StatusTag'
import { cx } from '@/lib/utils'

type Tone = 'coral' | 'sea' | 'olive' | 'lilac' | 'sun' | 'terracotta'

interface PackageCardProps {
  number: string
  name: string
  tagline: string
  description: string
  status: 'available' | 'soon'
  statusLabel: string
  includes?: string[]
  ctaLabel: string
  ctaHref: string
  tone?: Tone
  className?: string
}

const toneMap: Record<Tone, { header: string; ink: string; sub: string; chip: string }> = {
  coral: { header: 'bg-coral text-cream', ink: 'text-cream', sub: 'text-cream/80', chip: 'bg-cream/20 text-cream' },
  sea: { header: 'bg-sea text-cream', ink: 'text-cream', sub: 'text-cream/80', chip: 'bg-cream/20 text-cream' },
  olive: { header: 'bg-olive text-cream', ink: 'text-cream', sub: 'text-cream/80', chip: 'bg-cream/20 text-cream' },
  lilac: { header: 'bg-lilac text-ink', ink: 'text-ink', sub: 'text-ink/70', chip: 'bg-ink/10 text-ink' },
  sun: { header: 'bg-sun text-ink', ink: 'text-ink', sub: 'text-ink/70', chip: 'bg-ink/10 text-ink' },
  terracotta: { header: 'bg-terracotta text-cream', ink: 'text-cream', sub: 'text-cream/80', chip: 'bg-cream/20 text-cream' },
}

export function PackageCard({
  number,
  name,
  tagline,
  description,
  status,
  statusLabel,
  includes,
  ctaLabel,
  ctaHref,
  tone = 'coral',
  className,
}: PackageCardProps) {
  const t = toneMap[tone]

  return (
    <article
      className={cx(
        'relative bg-bone border border-ink/10 rounded-3xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.18)]',
        className
      )}
    >
      {/* Color header */}
      <div className={cx('relative px-6 md:px-8 pt-7 pb-8 tex-grain', t.header)}>
        <div className="flex items-start justify-between mb-6">
          <span className={cx('type-tag px-2.5 py-1 rounded-full', t.chip)}>
            {number}
          </span>
          <StatusTag variant={status}>{statusLabel}</StatusTag>
        </div>
        <h3 className="type-headline font-extrabold tracking-tight">{name}</h3>
        <p className={cx('type-body mt-2', t.sub)}>{tagline}</p>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <p className="type-body text-smoke">{description}</p>

        {includes && includes.length > 0 && (
          <ul className="mt-7 space-y-3 pt-7 border-t border-ink/10">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 type-body text-ink/80">
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-ember mt-[10px] shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-8 pt-6">
          <Button href={ctaHref} variant="primary">
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </Button>
        </div>
      </div>
    </article>
  )
}
