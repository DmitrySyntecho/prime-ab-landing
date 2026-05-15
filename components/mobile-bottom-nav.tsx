"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Layers,
  Trophy,
  Sparkles,
  PartyPopper,
  Box,
  Volume2,
  Lightbulb,
  Monitor,
  Tv,
  Projector,
  Columns,
  ChevronUp,
  X,
} from "lucide-react"
import type React from "react"

interface MobileBottomNavProps {
  onStartQuote: () => void
}

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

export function MobileBottomNav({ onStartQuote }: MobileBottomNavProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const [servicesOpen, setServicesOpen] = useState(false)

  // Close the services panel when navigating
  useEffect(() => {
    setServicesOpen(false)
  }, [pathname])

  // Close on outside tap
  const panelRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!servicesOpen) return
    const handler = (e: TouchEvent | MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
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
  const accentSoft = isFifa ? "#FF6B71" : "#FFD24A"
  const ringShadow = isFifa
    ? "0 14px 36px -8px rgba(230,29,37,0.65), 0 0 0 4px rgba(10,15,31,0.95), inset 0 1px 0 rgba(255,255,255,0.30)"
    : "0 14px 36px -8px rgba(255,45,111,0.65), 0 0 0 4px rgba(10,8,24,0.95), inset 0 1px 0 rgba(255,255,255,0.30)"
  const railBg = isFifa ? "rgba(10,15,31,0.92)" : "rgba(10,8,24,0.92)"

  const isServicesActive =
    pathname?.startsWith("/services/") || servicesOpen

  const leftItems = [
    { href: "/", icon: Home, label: "Home", match: pathname === "/" },
  ]
  const rightItems = [
    { href: "/#events", icon: PartyPopper, label: "Events", match: false },
    {
      href: "/fifa-2026-packages",
      icon: Trophy,
      label: "FIFA",
      match: isFifa,
    },
  ]

  return (
    <>
      {/* Services panel — slides up from above the nav bar */}
      <div
        ref={panelRef}
        className={`md:hidden fixed bottom-[72px] left-3 right-3 z-50 transition-all duration-300 ease-out ${
          servicesOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div
          className="max-w-md mx-auto rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden"
          style={{
            background: railBg,
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Panel header */}
          <div className="flex items-center justify-between px-4 pt-3.5 pb-2">
            <span
              className="text-[10px] font-extrabold tracking-[0.16em] uppercase"
              style={{ color: accent }}
            >
              Services
            </span>
            <button
              onClick={() => setServicesOpen(false)}
              className="text-white/40 hover:text-white/80 transition-colors p-1"
              aria-label="Close services"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service list */}
          <div className="px-2 pb-3 flex flex-col gap-0.5">
            {SERVICES.map(({ label, href, icon: Icon }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
                  style={{
                    background: active ? `${accent}18` : "transparent",
                    color: active ? accent : "rgba(255,255,255,0.75)",
                  }}
                >
                  <span
                    className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0"
                    style={{ background: active ? `${accent}22` : "rgba(255,255,255,0.05)" }}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[13px] font-semibold leading-tight">{label}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom nav bar — always sticky */}
      <nav
        className="md:hidden fixed bottom-3 left-3 right-3 z-50"
        aria-label="Mobile navigation"
      >
        <div className="relative max-w-md mx-auto">
          <div
            className="relative grid grid-cols-5 items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-2xl backdrop-saturate-150"
            style={{
              background: railBg,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {leftItems.map((it) => (
              <NavItem key={it.label} {...it} accent={accent} />
            ))}

            {/* Services button */}
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="group flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-full transition-colors"
              style={{ color: isServicesActive ? accent : "rgba(255,255,255,0.55)" }}
              aria-label="Services"
            >
              {servicesOpen ? (
                <ChevronUp className="w-[18px] h-[18px]" strokeWidth={2.2} />
              ) : (
                <Layers className="w-[18px] h-[18px]" strokeWidth={2.2} />
              )}
              <span className="text-[9px] font-bold tracking-[0.06em] uppercase">Services</span>
            </button>

            {/* Centered raised quote button */}
            <div className="flex justify-center">
              <button
                onClick={onStartQuote}
                className="relative -translate-y-4 w-[58px] h-[58px] rounded-full flex flex-col items-center justify-center text-white transition-transform active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                  boxShadow: ringShadow,
                }}
                aria-label="Request a Quote"
              >
                <Sparkles className="w-[22px] h-[22px]" strokeWidth={2.2} />
                <span
                  className="absolute -bottom-5 text-[9px] font-extrabold tracking-[0.14em] uppercase whitespace-nowrap"
                  style={{ color: accentSoft }}
                >
                  Quote
                </span>
              </button>
            </div>

            {rightItems.map((it) => (
              <NavItem key={it.label} {...it} accent={accent} />
            ))}
          </div>
        </div>
      </nav>
    </>
  )
}

function NavItem({
  href,
  icon: Icon,
  label,
  match,
  accent,
}: {
  href: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  match: boolean
  accent: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-full transition-colors"
      style={{ color: match ? accent : "rgba(255,255,255,0.55)" }}
    >
      <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
      <span className="text-[9px] font-bold tracking-[0.06em] uppercase">{label}</span>
    </Link>
  )
}
