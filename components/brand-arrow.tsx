'use client'

type Dir = 'right' | 'up-right' | 'up' | 'left'

/**
 * EVN brand arrow — own SVG, not lucide.
 * Signature: solar dot at tail + forward-leaning head.
 * Deep navy / leaf-green via currentColor. Rounded caps to match Rajdhani buttons.
 */
export function BrandArrow({
  direction = 'right',
  size = 15,
  className = '',
  strokeWidth = 2.2,
}: {
  direction?: Dir
  size?: number
  className?: string
  strokeWidth?: number
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 20 20',
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
        <circle cx="4" cy="16" r="1.7" fill="currentColor" stroke="none" />
        <path d="M6.6 13.4 15 5" />
        <path d="M8.4 5H15v6.6" />
      </svg>
    )
  }
  if (direction === 'up') {
    return (
      <svg {...common}>
        <circle cx="10" cy="16.8" r="1.7" fill="currentColor" stroke="none" />
        <path d="M10 13.5V4" />
        <path d="M6.2 7.8 10 4l3.8 3.8" />
      </svg>
    )
  }
  if (direction === 'left') {
    return (
      <svg {...common}>
        <circle cx="16.8" cy="10" r="1.7" fill="currentColor" stroke="none" />
        <path d="M13.2 10H4" />
        <path d="M7.8 6.2 4 10l3.8 3.8" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="3.2" cy="10" r="1.7" fill="currentColor" stroke="none" />
      <path d="M6.8 10H16" />
      <path d="M12.2 6.2 16 10l-3.8 3.8" />
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
      className={`grid size-10 shrink-0 place-items-center rounded-full bg-[#EDF3F7] text-[#072A45] transition-colors group-hover:bg-[#62D984] ${className}`}
    >
      <BrandArrow direction={direction} size={size} />
    </span>
  )
}
