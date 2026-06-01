"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Sparkles, Layers, ArrowRight } from "lucide-react"
import { NAV_SERVICES } from "@/lib/sitemap-data"

interface MobileActionDockProps {
  onStartQuote: () => void
}

/**
 * Always-visible bottom-right action dock (phone only, <md).
 * Replaces the old centered bottom nav with two compact, always-open buttons:
 * a "Get a Quote" pill and a square that opens a services popover.
 */
export function MobileActionDock({ onStartQuote }: MobileActionDockProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const [servicesOpen, setServicesOpen] = useState(false)
  const dockRef = useRef<HTMLDivElement>(null)

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"

  // Close the services popover on tap outside or on route change
  useEffect(() => {
    if (!servicesOpen) return
    const onPointer = (e: PointerEvent) => {
      if (!dockRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener("pointerdown", onPointer)
    return () => document.removeEventListener("pointerdown", onPointer)
  }, [servicesOpen])

  useEffect(() => {
    setServicesOpen(false)
  }, [pathname])

  return (
    <div
      ref={dockRef}
      className="md:hidden fixed right-3 z-50 flex flex-col items-end gap-2.5"
      style={{ bottom: "calc(0.85rem + env(safe-area-inset-bottom))" }}
    >
      {/* Services popover — opens above the buttons */}
      <div
        className={`w-[208px] overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-200 origin-bottom-right ${
          servicesOpen
            ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
            : "opacity-0 translate-y-3 scale-95 pointer-events-none"
        }`}
        style={{
          background: "rgba(6, 16, 24, 0.94)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow: "0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
        aria-hidden={!servicesOpen}
      >
        <div className="px-4 pt-3 pb-2 text-[10px] font-extrabold tracking-[0.16em] uppercase text-white/40">
          Services
        </div>
        <div className="flex flex-col pb-1.5">
          {NAV_SERVICES.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setServicesOpen(false)}
              className="px-4 py-2.5 text-[13px] font-semibold text-white/75 hover:text-white hover:bg-white/[0.05] active:bg-white/[0.08] transition-colors"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Buttons row: [Get a Quote] [Services square] */}
      <div className="flex items-center gap-2">
        <button
          onClick={onStartQuote}
          className="inline-flex items-center gap-1.5 pl-3.5 pr-4 h-11 rounded-full text-white font-extrabold text-[13px] tracking-[0.01em] transition-transform active:scale-95"
          style={{
            background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
            boxShadow: `0 12px 30px -8px ${accent}99, inset 0 1px 0 rgba(255,255,255,0.30)`,
          }}
          aria-label="Get a Quote"
        >
          <Sparkles className="w-4 h-4" strokeWidth={2.2} />
          Get a Quote
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          onClick={() => setServicesOpen((v) => !v)}
          className="relative w-11 h-11 rounded-full flex items-center justify-center text-white transition-transform active:scale-95"
          style={{
            background: "rgba(10,8,24,0.92)",
            border: `1px solid ${servicesOpen ? accent : "rgba(255,255,255,0.12)"}`,
            boxShadow: "0 12px 30px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          aria-label="Services"
          aria-expanded={servicesOpen}
        >
          <Layers className="w-[19px] h-[19px]" strokeWidth={2.2} style={{ color: servicesOpen ? accent : undefined }} />
        </button>
      </div>
    </div>
  )
}
