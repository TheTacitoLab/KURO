import { cx } from '@/lib/utils'

interface TextureLayerProps {
  className?: string
  variant?: 'grain' | 'halftone' | 'paper'
  opacity?: number
}

export function TextureLayer({
  className,
  variant = 'grain',
  opacity = 0.35,
}: TextureLayerProps) {
  if (variant === 'halftone') {
    return (
      <div
        aria-hidden="true"
        className={cx('pointer-events-none absolute inset-0', className)}
        style={{
          opacity,
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 1.5px)',
          backgroundSize: '7px 7px',
        }}
      />
    )
  }

  if (variant === 'paper') {
    return (
      <div
        aria-hidden="true"
        className={cx(
          'pointer-events-none absolute inset-0 tex-paper',
          className
        )}
        style={{ opacity }}
      />
    )
  }

  return (
    <div
      aria-hidden="true"
      className={cx('pointer-events-none absolute inset-0 tex-grain', className)}
      style={{ opacity }}
    />
  )
}
