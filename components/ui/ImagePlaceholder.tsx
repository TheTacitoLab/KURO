import { cx } from '@/lib/utils'

interface ImagePlaceholderProps {
  label?: string
  sublabel?: string
  aspectRatio?: string
  className?: string
}

export function ImagePlaceholder({
  label = 'JERSEY LAB IMAGE',
  sublabel = 'PLACEHOLDER / 01',
  aspectRatio = 'aspect-[4/5]',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cx(
        'relative border border-ash bg-steel flex items-end overflow-hidden',
        aspectRatio,
        className
      )}
      role="img"
      aria-label={label}
    >
      {/* Subtle scan-line grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '100% 6px',
        }}
        aria-hidden="true"
      />

      {/* Corner mark */}
      <div className="absolute top-4 left-4" aria-hidden="true">
        <div className="w-4 h-px bg-mute mb-px" />
        <div className="w-px h-4 bg-mute" />
      </div>
      <div className="absolute top-4 right-4" aria-hidden="true">
        <div className="w-4 h-px bg-mute mb-px ml-auto" />
        <div className="w-px h-4 bg-mute ml-auto" />
      </div>

      {/* Label */}
      <div className="relative p-5 border-t border-ash w-full">
        <span className="type-label text-mute block">{label}</span>
        <span className="type-label text-ash block mt-1">{sublabel}</span>
      </div>
    </div>
  )
}
