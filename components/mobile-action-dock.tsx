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
 * Always-visible full-width bottom dock (phone only, <md).
 * Row order: [Services] then [Get a Quote] (the bigger, primary button).
 * The Services button opens a popover of service links above the dock.
 */
export function MobileActionDock({ onStartQuote }: MobileActionDockProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const [servicesOpen, setServicesOpen] = useState(false)
  const dockRef = useRef<HTMLDivElement>(null)

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"

  // Dismiss on tap outside (use click so the opening tap never self-closes)
  useEffect(() => {
    if (!servicesOpen) return
    const onClick = (e: MouseEvent) => {
      if (!dockRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [servicesOpen])

  useEffect(() => {
    setServicesOpen(false)
  }, [pathname])

  return (
    <div
      ref={dockRef}
      className="md:hidden fixed inset-x-0 bottom-0 z-50 px-3 pt-2"
      style={{ paddingBottom: "calc(0.55rem + env(safe-area-inset-bottom))" }}
    >
      <div className="flex flex-col gap-2.5">
        {/* Services popover — opens above the dock, anchored left over the Services button */}
        <div
          className={`w-[230px] overflow-hidden rounded-2xl border backdrop-blur-2xl transition-all duration-200 origin-bottom-left ${
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

        {/* Full-width button row: [Services] [Get a Quote] */}
        <div className="flex items-stretch gap-2.5">
          <button
            onClick={() => setServicesOpen((v) => !v)}
            className="shrink-0 inline-flex items-center gap-2 px-4 h-[52px] rounded-2xl text-white font-bold text-[14px] transition-transform active:scale-95"
            style={{
              background: "rgba(10,8,24,0.92)",
              border: `1px solid ${servicesOpen ? accent : "rgba(255,255,255,0.12)"}`,
              boxShadow: "0 14px 32px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
            aria-label="Services"
            aria-expanded={servicesOpen}
          >
            <Layers className="w-5 h-5" strokeWidth={2.2} style={{ color: servicesOpen ? accent : undefined }} />
            Services
          </button>

          <button
            onClick={onStartQuote}
            className="flex-1 inline-flex items-center justify-center gap-2 h-[52px] rounded-2xl text-white font-extrabold text-[16px] tracking-[0.01em] transition-transform active:scale-[0.98]"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
              boxShadow: `0 16px 36px -8px ${accent}aa, inset 0 1px 0 rgba(255,255,255,0.30)`,
            }}
            aria-label="Get a Quote"
          >
            <Sparkles className="w-[18px] h-[18px]" strokeWidth={2.2} />
            Get a Quote
            <ArrowRight className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  )
}
