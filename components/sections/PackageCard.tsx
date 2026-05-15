import { Button } from '@/components/ui/Button'
import { cx } from '@/lib/utils'

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
  className?: string
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
  className,
}: PackageCardProps) {
  return (
    <article
      className={cx(
        'bg-graphite border border-ash flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-mid',
        className
      )}
    >
      {/* Header */}
      <div className="border-b border-ash p-6 md:p-7">
        <div className="flex items-start justify-between mb-5">
          <span className="type-label text-ash">{number}</span>
          <span
            className={cx(
              'type-label',
              status === 'available' ? 'text-white' : 'text-mute'
            )}
          >
            {statusLabel}
          </span>
        </div>
        <h3 className="type-label text-white tracking-widest text-sm">{name}</h3>
      </div>

      {/* Body */}
      <div className="p-6 md:p-7 flex-1">
        <p className="type-lede text-white mb-3">{tagline}</p>
        <p className="type-body text-mute">{description}</p>
      </div>

      {/* Includes */}
      {includes && includes.length > 0 && (
        <div className="border-t border-ash p-6 md:p-7">
          <ul className="space-y-3">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3 type-body text-mute">
                <span
                  className="inline-block w-1.5 h-1.5 bg-mute mt-2 shrink-0"
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* CTA */}
      <div className="border-t border-ash p-6 md:p-7 mt-auto">
        <Button href={ctaHref} variant="secondary">
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
