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
/* Spot — spotlight wrapper: sets --mx/--my so .spot::after follows   */
/* the cursor. Visual only, no layout shift. Fine pointers only.       */
/* ------------------------------------------------------------------ */
export function Spot({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <div ref={ref} onMouseMove={onMove} className={cn('spot', className)}>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Magnetic — subtle pull toward cursor for CTAs. Fine pointers only.  */
/* strength: px of max offset (6–12 recommended).                       */
/* ------------------------------------------------------------------ */
export function Magnetic({
  children,
  className,
  strength = 8,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translate3d(${(px * strength).toFixed(1)}px, ${(py * strength).toFixed(1)}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn('inline-block transition-transform duration-300 ease-out will-change-transform', className)}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AnimatedBar — fills to `value%` when scrolled into view.            */
/* ------------------------------------------------------------------ */
export function AnimatedBar({
  value,
  className,
}: {
  value: number;
  className?: string;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref} className={cn('h-2 overflow-hidden rounded-full bg-white/15', className)}>
      <div
        className="bar-fill h-full rounded-full"
        style={{
          width: seen ? `${value}%` : '0%',
          background: 'linear-gradient(90deg,#33A94F,#62D984)',
          boxShadow: seen ? '0 0 16px rgb(98 217 132 / 0.6)' : undefined,
        }}
      />
    </div>
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
/* ------------------------------------------------------------------ */
/* Headline — premium kinetic headline motion UX.                      */
/* Word-mask rise + blur + slight rotate, expo-eased stagger.          */
/* Accent words get gradient shine sweep. Underline draws on reveal.   */
/* Accepts string `text` with *accent* syntax OR rich React children   */
/* with <em> for accent (PageIntro / SectionHeading titles).           */
/* ------------------------------------------------------------------ */
type HeadlineWord = { w: string; accent: boolean; accentClass?: string };

function wordsFromText(text: string): HeadlineWord[] {
  const words: HeadlineWord[] = [];
  const parts = text.split(/(\*[^*]+\*)/g);
  for (const part of parts) {
    if (!part) continue;
    const accent = part.startsWith('*') && part.endsWith('*');
    const clean = accent ? part.slice(1, -1) : part;
    for (const w of clean.split(/\s+/)) {
      if (w) words.push({ w, accent });
    }
  }
  return words;
}

function wordsFromNodes(nodes: ReactNode): HeadlineWord[] {
  const words: HeadlineWord[] = [];
  const walk = (node: ReactNode, accent: boolean, accentClass?: string) => {
    Children.forEach(node, (child) => {
      if (child == null || typeof child === 'boolean') return;
      if (typeof child === 'string' || typeof child === 'number') {
        for (const w of String(child).split(/\s+/)) {
          if (w) words.push({ w, accent, accentClass });
        }
        return;
      }
      if (isValidElement(child)) {
        const type = typeof child.type === 'string' ? child.type : '';
        const props = child.props as { className?: unknown; children?: ReactNode };
        const cls = typeof props.className === 'string' ? props.className : '';
        const isAccent =
          type === 'em' ||
          type === 'i' ||
          cls.includes('editorial-accent') ||
          cls.includes('serif-accent') ||
          cls.includes('hl-accent');
        const nextClass = isAccent ? cls || accentClass : accentClass;
        walk(props.children, accent || isAccent, nextClass);
        return;
      }
    });
  };
  walk(nodes, false, undefined);
  return words;
}

export function Headline({
  text,
  children,
  className,
  as: Tag = 'h2',
  stagger = 65,
  base = 0,
  shine = true,
  underline = false,
}: {
  text?: string;
  children?: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div';
  stagger?: number;
  base?: number;
  shine?: boolean;
  underline?: boolean;
}) {
  const { ref, seen } = useInView<HTMLDivElement>(0.25);
  const words = text != null ? wordsFromText(text) : wordsFromNodes(children);
  const plain = words.map((x) => x.w).join(' ');
  const cap = 900;

  return (
    <Tag
      ref={ref as never}
      className={cn('hl', seen && 'is-in', shine && 'hl-shine', underline && 'hl-underline', className)}
      aria-label={plain}
    >
      {words.map(({ w, accent, accentClass }, i) => {
        const customColor =
          accentClass != null &&
          (accentClass.includes('text-[') ||
            accentClass.includes('text-#') ||
            accentClass.includes('text-white') ||
            accentClass.includes('editorial-accent'));
        return (
          <span key={i} className="hl-mask" aria-hidden>
            <span
              className={cn('hl-word', accent && 'hl-accent', customColor && 'hl-plain')}
              style={{ transitionDelay: seen ? `${base + Math.min(i * stagger, cap)}ms` : '0ms' }}
            >
              {accent ? <em className={customColor ? accentClass : undefined}>{w}</em> : w}
            </span>
            {i < words.length - 1 ? ' ' : ''}
          </span>
        );
      })}
      {underline ? <span aria-hidden className={cn('hl-rule', seen && 'is-in')} /> : null}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollWords — now powered by Headline motion (backward compatible). */
/* ------------------------------------------------------------------ */
export function ScrollWords({
  text,
  className,
  as: Tag = 'h2',
  stagger = 70,
}: {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'p';
  stagger?: number;
}) {
  return <Headline text={text} as={Tag} stagger={stagger} className={className} />;
}

/* ------------------------------------------------------------------ */
/* ScrollFade — content gently drifts up + fades as you scroll past.   */
/* Use on hero blocks so scrolling down feels cinematic.               */
/* distance: px of rise across one viewport of travel. fade: how much  */
/* opacity is lost by the time the block leaves the viewport.          */
/* ------------------------------------------------------------------ */
export function ScrollFade({
  children,
  className,
  distance = 90,
  fade = 0.55,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  fade?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let raf = 0;
    let ticking = false;

    const update = () => {
      ticking = false;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when block centre is at viewport centre; grows as you scroll down.
      const progress = Math.max(0, (vh / 2 - (r.top + r.height / 2)) / vh + 0.5);
      const p = Math.min(1, Math.max(0, progress - 0.5));
      const y = -(p * distance);
      const o = 1 - p * fade;
      el.style.transform = `translate3d(0, ${y.toFixed(1)}px, 0)`;
      el.style.opacity = o.toFixed(3);
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
  }, [distance, fade]);

  return (
    <div ref={ref} className={cn('scroll-fade', className)}>
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
          <span className="whitespace-nowrap px-7 text-[12px] font-medium uppercase not-italic tracking-[0.16em]" style={{ fontFamily: 'var(--font-body)' }}>
            {item}
          </span>
          <span
            className="inline-block size-1.5 shrink-0 rounded-full bg-[#62D984]"
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
