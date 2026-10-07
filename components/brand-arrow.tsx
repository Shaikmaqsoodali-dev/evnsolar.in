'use client'

type Dir = 'right' | 'up-right' | 'up' | 'left'

/**
 * EVN brand arrow — clean professional geometry (24-grid, sharp chevron head).
 * Inherits color via currentColor. Rounded caps to match Poppins buttons.
 */
export function BrandArrow({
  direction = 'right',
  size = 15,
  className = '',
  strokeWidth = 2,
}: {
  direction?: Dir
  size?: number
  className?: string
  strokeWidth?: number
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className: `brand-arrow brand-arrow--${direction} ${className}`.trim(),
  }
  if (direction === 'up-right') {
    return (
      <svg {...common}>
        <path d="M7 17 17 7" />
        <path d="M8 7h9v9" />
      </svg>
    )
  }
  if (direction === 'up') {
    return (
      <svg {...common}>
        <path d="M12 19V5" />
        <path d="m5 12 7-7 7 7" />
      </svg>
    )
  }
  if (direction === 'left') {
    return (
      <svg {...common}>
        <path d="M19 12H5" />
        <path d="m12 19-7-7 7-7" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

/** Circular badge wrapper used on cards — navy/green hover handled by parent. */
export function BrandArrowBadge({
  direction = 'up-right',
  size = 16,
  className = '',
}: {
  direction?: Dir
  size?: number
  className?: string
}) {
  return (
    <span
      aria-hidden
      className={`grid size-10 shrink-0 place-items-center rounded-full bg-[#EDF3F7] text-[#062A44] transition-colors group-hover:bg-[#43A85C] group-hover:text-white ${className}`}
    >
      <BrandArrow direction={direction} size={size} />
    </span>
  )
}
