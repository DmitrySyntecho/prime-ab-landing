"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Layers,
  Sparkles,
  Box,
  Volume2,
  Lightbulb,
  Monitor,
  Tv,
  Projector,
  Columns,
  X,
} from "lucide-react"

const SERVICES = [
  { label: "Stage Rental", href: "/services/stage-rental", icon: Box },
  { label: "Sound System Rental", href: "/services/sound-system-rental", icon: Volume2 },
  { label: "Lighting Equipment Rental", href: "/services/lighting-rental", icon: Lightbulb },
  { label: "Full AV Production", href: "/services/full-av-production", icon: Layers },
  { label: "TV Rental", href: "/services/tv-rental", icon: Tv },
  { label: "Projector & Screen Rental", href: "/services/projector-screen-rental", icon: Projector },
  { label: "Pipe & Drape Rental", href: "/services/pipe-drape-rental", icon: Columns },
  { label: "LED Screen Rental", href: "/services/led-screen-rental", icon: Monitor },
]

interface MobileBottomNavProps {
  onStartQuote: () => void
}

export function MobileBottomNav({ onStartQuote }: MobileBottomNavProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const [servicesOpen, setServicesOpen] = useState(false)

  // Close services panel when navigating
  useEffect(() => {
    setServicesOpen(false)
  }, [pathname])

  // Escape key closes the services panel
  useEffect(() => {
    if (!servicesOpen) return
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setServicesOpen(false) }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [servicesOpen])

  // Close services panel on outside tap
  const wrapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!servicesOpen) return
    const handler = (e: TouchEvent | MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [servicesOpen])

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"
  const railBg = isFifa ? "rgba(10,15,31,0.94)" : "rgba(10,8,24,0.94)"
  const quoteShadow = isFifa
    ? "0 12px 30px -8px rgba(230,29,37,0.6), inset 0 1px 0 rgba(255,255,255,0.28)"
    : "0 12px 30px -8px rgba(255,45,111,0.6), inset 0 1px 0 rgba(255,255,255,0.30)"

  const isServicesActive = pathname?.startsWith("/services/") || servicesOpen

  return (
    <div
      ref={wrapRef}
      className="md:hidden fixed left-3 right-3 z-50"
      style={{ bottom: "max(env(safe-area-inset-bottom), 12px)" }}
    >
      <div className="relative flex items-stretch gap-2.5">
        {/* Services panel — full width, floats above the buttons */}
        <div
          className={`absolute bottom-full left-0 right-0 mb-2.5 origin-bottom transition-all duration-300 ease-out ${
            servicesOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden"
            style={{ background: railBg, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between px-4 pt-3.5 pb-2">
              <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase" style={{ color: accent }}>Services</span>
              <button onClick={() => setServicesOpen(false)} className="text-white/40 hover:text-white/80 transition-colors p-1" aria-label="Close services">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="px-2 pb-3 flex flex-col gap-0.5">
              {SERVICES.map(({ label, href, icon: Icon }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
                    style={{ background: active ? `${accent}18` : "transparent", color: active ? accent : "rgba(255,255,255,0.75)" }}
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0" style={{ background: active ? `${accent}22` : "rgba(255,255,255,0.05)" }}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-semibold leading-tight">{label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Services — square (left) */}
        <button
          onClick={() => setServicesOpen((v) => !v)}
          className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl border backdrop-blur-2xl transition-transform active:scale-95"
          style={{
            background: railBg,
            borderColor: isServicesActive ? `${accent}66` : "rgba(255,255,255,0.12)",
            color: isServicesActive ? accent : "rgba(255,255,255,0.8)",
            boxShadow: "0 12px 30px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          aria-label="Services menu"
          aria-expanded={servicesOpen}
        >
          {servicesOpen ? <X className="w-6 h-6" strokeWidth={2.2} /> : <Layers className="w-6 h-6" strokeWidth={2.2} />}
        </button>

        {/* Get a Quote — fills the rest of the width (right) */}
        <button
          onClick={onStartQuote}
          className="flex-1 inline-flex items-center justify-center gap-2.5 h-14 rounded-full text-white font-extrabold text-[16px] tracking-[0.02em] transition-transform active:scale-[0.98]"
          style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`, boxShadow: quoteShadow }}
          aria-label="Get a Quote"
        >
          <Sparkles className="w-5 h-5" strokeWidth={2.2} />
          Get a Quote
        </button>
      </div>
    </div>
  )
}
