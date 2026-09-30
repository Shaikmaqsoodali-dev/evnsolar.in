'use client';

import React, { type CSSProperties } from 'react';
import { cn } from '@/lib/utils';

export type MotionGridProps = {
  children?: React.ReactNode;
  className?: string;
  /** Duration of one pan loop, e.g. '3s', '8s'. */
  speed?: string;
  /** Opacity of the grid lines layer (0-1). */
  opacity?: number;
  /** Show a soft radial glow tinted with lineColor. */
  enableGlow?: boolean;
  /** Grid line color as "r, g, b", e.g. '20, 184, 166'. */
  lineColor?: string;
  /** Grid cell size in px. */
  cellSize?: number;
  /** Line thickness in px. */
  lineWidth?: number;
  /** Fade edges with a mask. */
  fadeEdges?: boolean;
};

export function MotionGrid({
  children,
  className,
  speed = '8s',
  opacity = 0.5,
  enableGlow = false,
  lineColor = '20, 184, 166',
  cellSize = 48,
  lineWidth = 1,
  fadeEdges = true,
}: MotionGridProps) {
  const glowColor = `rgba(${lineColor}, 0.28)`;
  const line = `rgba(${lineColor}, 1)`;

  const gridStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${line} 0 ${lineWidth}px, transparent ${lineWidth}px), linear-gradient(to bottom, ${line} 0 ${lineWidth}px, transparent ${lineWidth}px)`,
    backgroundSize: `${cellSize}px ${cellSize}px, ${cellSize}px ${cellSize}px`,
    opacity,
    animationDuration: speed,
    left: -cellSize,
    right: -cellSize,
  };

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      style={{ '--mg-cell': `${cellSize}px` } as CSSProperties}
    >
      {/* Animated grid layer — glides right */}
      <div
        aria-hidden
        className={cn(
          'motion-grid-pan pointer-events-none absolute inset-y-0',
          fadeEdges &&
            '[mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,black_35%,transparent_100%)]',
        )}
        style={gridStyle}
      />

      {/* Soft glow */}
      {enableGlow ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 55% 45% at 50% 55%, ${glowColor}, transparent 70%)`,
          }}
        />
      ) : null}

      {/* Subtle edge fade for blending into page */}
      {fadeEdges ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-linear-to-b from-white via-transparent to-white opacity-60 dark:from-black dark:via-transparent dark:to-black"
        />
      ) : null}

      {children ? <div className="relative z-10 h-full w-full">{children}</div> : null}

      <style>{`
        @keyframes motion-grid-pan {
          from { background-position: 0 0, 0 0; }
          to { background-position: var(--mg-cell, 48px) 0, var(--mg-cell, 48px) 0; }
        }
        .motion-grid-pan {
          animation-name: motion-grid-pan;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          will-change: background-position;
        }
        @media (prefers-reduced-motion: reduce) {
          .motion-grid-pan { animation: none; }
        }
      `}</style>
    </div>
  );
}

export default MotionGrid;
