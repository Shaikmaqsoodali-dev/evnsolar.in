'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowUp, ChevronRight, Phone } from 'lucide-react'

export function Breadcrumbs({ trail }: { trail: [string, string][] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-1.5 text-[13px]">
      <Link href="/" className="font-medium text-[#5B6D77] hover:text-[#008ED6]">
        Home
      </Link>
      {trail.map(([label, href], i) => {
        const last = i === trail.length - 1
        return (
          <span key={label} className="flex items-center gap-1.5">
            <ChevronRight size={13} className="text-[#9AA9B2]" />
            {last ? (
              <span aria-current="page" className="font-semibold text-[#071D26]">
                {label}
              </span>
            ) : (
              <Link href={href} className="font-medium text-[#5B6D77] hover:text-[#008ED6]">
                {label}
              </Link>
            )}
          </span>
        )
      })}
    </nav>
  )
}

export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className="fixed bottom-20 right-5 z-50 grid size-11 place-items-center bg-[#071D26] text-white shadow-lg transition-colors hover:bg-[#008ED6] sm:bottom-6"
      style={{ borderRadius: 8 }}
    >
      <ArrowUp size={19} />
    </button>
  )
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-[#E2E8EC] bg-white/95 backdrop-blur sm:hidden">
      <a
        href="tel:+917040506295"
        className="font-display flex items-center justify-center gap-2 py-3.5 text-[13px] font-semibold tracking-[-0.01em] text-[#071D26]"
      >
        <Phone size={16} className="text-[#008ED6]" /> Call now
      </a>
      <Link
        href="/contact"
        className="font-display flex items-center justify-center bg-[#008ED6] py-3.5 text-[13px] font-semibold tracking-[-0.01em] text-white"
      >
        Get free quote
      </Link>
    </div>
  )
}

export function Faq({ items }: { items: [string, string][] }) {
  return (
    <div className="divide-y divide-[#E2E8EC] border-y border-[#E2E8EC]">
      {items.map(([q, a]) => (
        <details key={q} className="group py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-semibold text-[#071D26] [&::-webkit-details-marker]:hidden">
            {q}
            <span className="grid size-7 shrink-0 place-items-center border border-[#CBD6DD] text-[18px] font-normal leading-none text-[#008ED6] transition-colors group-open:border-[#008ED6] group-open:bg-[#008ED6] group-open:text-white" style={{ borderRadius: 6 }}>
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-[#5B6D77]">{a}</p>
        </details>
      ))}
    </div>
  )
}
