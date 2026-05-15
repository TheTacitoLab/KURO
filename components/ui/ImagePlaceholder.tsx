import { cx } from '@/lib/utils'

interface ImagePlaceholderProps {
  label?: string
  aspectRatio?: string
  className?: string
}

export function ImagePlaceholder({
  label = 'JERSEY IMAGE / PLACEHOLDER',
  aspectRatio = 'aspect-[4/5]',
  className,
}: ImagePlaceholderProps) {
  return (
    <div
      className={cx(
        'relative border border-[#DDDDDD] bg-[#F4F4F4] flex items-center justify-center overflow-hidden',
        aspectRatio,
        className
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-end p-4">
        <span className="type-label text-[#777777]">{label}</span>
      </div>
      <div className="absolute top-4 right-4">
        <span className="type-label text-[#DDDDDD]">KURO</span>
      </div>
    </div>
  )
}
