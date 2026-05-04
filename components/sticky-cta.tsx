"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowRight, Phone, Sparkles } from "lucide-react"
import { usePathname } from "next/navigation"

interface StickyCTAProps {
  visible?: boolean
  onStartQuote: () => void
}

export function StickyCTA({ onStartQuote }: StickyCTAProps) {
  const [show, setShow] = useState(false)
  const lastScrollY = useRef(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")

  useEffect(() => {
    let raf = 0
    let pending = false

    const handle = () => {
      pending = false
      const y = window.scrollY
      const delta = y - lastScrollY.current

      // only react past hero
      if (y < 400) {
        setShow(false)
      } else if (delta < -3) {
        // Scrolling UP — show
        setShow(true)
      } else if (delta > 3) {
        // Scrolling DOWN — hide
        setShow(false)
      }

      // Reset idle timer on every scroll move
      if (idleTimer.current) clearTimeout(idleTimer.current)
      idleTimer.current = setTimeout(() => {
        // Idle for 1.2s → hide
        setShow(false)
      }, 1200)

      lastScrollY.current = y
    }

    const onScroll = () => {
      if (!pending) {
        pending = true
        raf = requestAnimationFrame(handle)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  const accent = isFifa ? "#FF2D6F" : "#4ADE80"
  const accentDeep = isFifa ? "#FF5E3A" : "#16A34A"
  const ctaTextColor = isFifa ? "#fff" : "#03070a"
  const ctaShadow = isFifa
    ? "0 16px 40px -8px rgba(255,45,111,0.6), inset 0 1px 0 rgba(255,255,255,0.30)"
    : "0 16px 40px -8px rgba(74,222,128,0.55), inset 0 1px 0 rgba(255,255,255,0.30)"

  return (
    <div
      className={`fixed bottom-4 left-0 right-0 z-50 px-4 pointer-events-none transition-all duration-500 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      aria-hidden={!show}
    >
      <div
        className="max-w-[640px] mx-auto pointer-events-auto rounded-[16px] border border-white/10 backdrop-blur-2xl backdrop-saturate-150 flex items-stretch gap-2 p-1.5"
        style={{
          background: "rgba(6, 16, 24, 0.85)",
          boxShadow:
            "0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        <a
          href="tel:7869338488"
          className="hidden sm:flex items-center justify-center gap-2 px-4 rounded-[12px] bg-white/[0.05] border border-white/[0.10] text-white/85 font-bold text-[13px] hover:bg-white/[0.10] hover:text-white transition-all"
          aria-label="Call us"
        >
          <Phone className="w-4 h-4" />
          <span className="hidden md:inline">(786) 933-8488</span>
        </a>

        <button
          onClick={onStartQuote}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-[12px] font-extrabold text-[14px] tracking-[0.02em] transition-all hover:scale-[1.02]"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
            color: ctaTextColor,
            boxShadow: ctaShadow,
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span className="whitespace-nowrap">Request a Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
