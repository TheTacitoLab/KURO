import { Button } from '@/components/ui/Button'
import { StatusTag } from '@/components/ui/StatusTag'
import { Rule } from '@/components/ui/Rule'
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
        'border border-[#DDDDDD] p-8 flex flex-col gap-6',
        className
      )}
    >
      <div>
        <span className="type-label text-[#777777] block mb-4">{number}</span>
        <h3 className="type-label text-[#111111] text-base tracking-widest mb-2">{name}</h3>
        <StatusTag variant={status}>{statusLabel}</StatusTag>
      </div>

      <Rule weight="hair" />

      <div>
        <p className="type-lede text-[#111111] mb-3">{tagline}</p>
        <p className="type-body text-[#777777]">{description}</p>
      </div>

      {includes && includes.length > 0 && (
        <ul className="space-y-2">
          {includes.map((item, i) => (
            <li key={i} className="type-body text-[#4A4A4A] flex items-start gap-3">
              <span className="inline-block w-2 h-2 bg-[#111111] mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-4">
        <Button href={ctaHref} variant="primary">
          {ctaLabel}
        </Button>
      </div>
    </article>
  )
}
