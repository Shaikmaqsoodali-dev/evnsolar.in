'use client';

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';

export type RevealVariant = 'up' | 'fade' | 'scale' | 'left' | 'right' | 'blur';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function useInView<T extends HTMLElement>(threshold = 0.12) {
  const ref = useRef<T>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, seen };
}

/* ------------------------------------------------------------------ */
/* Reveal — signature expo-eased entrance.                             */
/* Variants: up (default) · fade · scale · left · right · blur.        */
/* ------------------------------------------------------------------ */
export function Reveal({
  children,
  className,
  variant = 'up',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
}) {
  const { ref, seen } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={cn('mv', seen && 'is-in', className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Stagger — orchestrates children with a cascading delay.             */
/* Each child is wrapped in a Reveal; pass itemClassName="h-full"      */
/* for equal-height card grids.                                        */
/* ------------------------------------------------------------------ */
export function Stagger({
  children,
  className,
  itemClassName,
  variant = 'up',
  step = 90,
  base = 0,
}: {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
  variant?: RevealVariant;
  step?: number;
  base?: number;
}) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, i) => {
        const key = isValidElement(child) && child.key != null ? child.key : i;
        return (
          <Reveal
            key={key}
            variant={variant}
            delay={base + i * step}
            className={itemClassName}
          >
            {child}
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Parallax — scroll-linked drift for imagery. Subtle by design.       */
/* speed: fraction of viewport travel applied (0.06–0.16 recommended). */
/* ------------------------------------------------------------------ */
export function Parallax({
  children,
  className,
  speed = 0.1,
  scale = 1.14,
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
  scale?: number;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const o = outer.current;
    const el = inner.current;
    if (!o || !el || prefersReducedMotion()) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const r = o.getBoundingClientRect();
      const vh = window.innerHeight;
      // Only work while the frame is on screen.
      if (r.bottom < -vh * 0.1 || r.top > vh * 1.1) return;
      const progress = (r.top + r.height / 2 - vh / 2) / vh; // -0.5 … 0.5
      const y = progress * speed * vh;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0) scale(${scale})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [speed, scale]);

  return (
    <div ref={outer} className={cn('overflow-hidden', className)}>
      <div ref={inner} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — eased number tween that starts when scrolled into view.   */
/* ------------------------------------------------------------------ */
export function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 1600,
  className,
}: {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLSpanElement>(0.4);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!seen) return;
    if (prefersReducedMotion()) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // easeOutExpo
      setValue(to * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to, duration]);

  const formatted = value.toLocaleString('en-IN', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgress — thin brand-gradient bar tracking page scroll.      */
/* ------------------------------------------------------------------ */
export function ScrollProgress({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, doc.scrollTop / max)) : 0;
      el.style.transform = `scaleX(${p.toFixed(4)})`;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn(
        'bg-brand-grad fixed inset-x-0 top-0 z-[60] h-[3px] origin-left scale-x-0',
        className,
      )}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Tilt — pointer-driven 3D card tilt. Fine pointers only, subtle.     */
/* ------------------------------------------------------------------ */
export function Tilt({
  children,
  className,
  max = 6,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div ref={ref} onMouseMove={onMove} onMouseLeave={reset} className={cn('tilt', className)}>
      {children}
    </div>
  );
}
export function Marquee({
  items,
  className,
  duration = 32,
}: {
  items: string[];
  className?: string;
  duration?: number;
}) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <span key={`${hidden ? 'b' : 'a'}-${item}`} className="flex items-center">
          <span className="font-display whitespace-nowrap px-7 text-[12px] font-semibold uppercase tracking-[0.18em]">
            {item}
          </span>
          <span
            className="inline-block size-1.5 shrink-0 rounded-full bg-[#3BB54A]"
            aria-hidden
          />
        </span>
      ))}
    </div>
  );

  return (
    <div className={cn('marquee overflow-hidden', className)}>
      <div
        className="marquee-track flex w-max"
        style={{ '--marquee-t': `${duration}s` } as CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
