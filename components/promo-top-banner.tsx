"use client"

import { useState, useEffect } from "react"
import { X, ArrowRight, Trophy } from "lucide-react"
import Link from "next/link"

const FIFA_2026_CITIES = [
  "LOS ANGELES",
  "NEW YORK",
  "MIAMI",
  "HOUSTON",
  "DALLAS",
  "SEATTLE",
  "SAN FRANCISCO",
  "ATLANTA",
  "BOSTON",
  "PHILADELPHIA",
  "KANSAS CITY",
  "MEXICO CITY",
  "GUADALAJARA",
  "MONTERREY",
  "TORONTO",
  "VANCOUVER",
]

export function PromoTopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  const [cityIndex, setCityIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCityIndex((prev) => (prev + 1) % FIFA_2026_CITIES.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#03070a] via-[#061018] to-[#03070a]" aria-hidden />
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 100% at 50% 50%, rgba(74,222,128,0.18) 0%, transparent 70%), radial-gradient(ellipse 30% 100% at 100% 50%, rgba(45,212,191,0.14) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-x-0 bottom-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(74,222,128,0.45), transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-1.5 sm:py-2">
        <div className="flex items-center justify-center gap-2 sm:gap-3 text-sm flex-nowrap pr-7">
          {/* FIFA 2026 pill — always visible, compact on mobile */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-full bg-[#4ADE80]/10 border border-[#4ADE80]/25 text-[#4ADE80] text-[9px] sm:text-[10px] font-bold tracking-[0.12em] sm:tracking-[0.16em] whitespace-nowrap">
            <Trophy className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            FIFA 2026
          </span>

          {/* Host city pill — compact on mobile */}
          <span className="inline-flex items-center gap-1 px-2 py-0.5 sm:py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/85 text-[10px] sm:text-[11px] font-semibold tracking-[0.06em] sm:tracking-[0.12em] min-w-[90px] sm:min-w-[120px] justify-center backdrop-blur-md whitespace-nowrap">
            <span className="text-white/50 text-[8px] sm:text-[9px]">HOST</span>
            <span className="transition-all duration-300 truncate">{FIFA_2026_CITIES[cityIndex]}</span>
          </span>

          {/* Tagline — desktop only */}
          <span className="hidden md:inline-flex items-center gap-2 text-white/85 text-[13px] font-medium">
            <span className="w-px h-4 bg-white/10" aria-hidden />
            World Cup AV Rental Packages — <span className="text-white/55">Big Screens, Sound &amp; More</span>
          </span>

          {/* CTA — compact on mobile */}
          <Link
            href="/fifa-2026-packages"
            className="group inline-flex items-center gap-1 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-md bg-gradient-to-r from-[#4ADE80] to-[#16A34A] text-[#03070a] font-bold text-[10px] sm:text-[11px] tracking-[0.04em] uppercase whitespace-nowrap transition-all hover:shadow-[0_8px_22px_-6px_rgba(74,222,128,0.55)] hover:-translate-y-px"
          >
            <span className="hidden sm:inline">View Packages</span>
            <span className="sm:hidden">View</span>
            <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
          aria-label="Close banner"
        >
          <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  )
}
