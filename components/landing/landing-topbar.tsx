"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { LANDING_PHONE_DISPLAY, LANDING_PHONE_TEL } from "./contact"

/**
 * Block 1 — top scarcity banner + a minimal brand bar (logo + Call).
 * Intentionally nav-free so the focus stays on the quote conversion.
 */
export function LandingTopBar() {
  return (
    <div className="relative z-40">
      {/* Scarcity banner */}
      <div
        className="w-full text-center px-4 py-2.5"
        style={{
          background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
          boxShadow: "0 8px 24px -12px rgba(255,45,111,0.7)",
        }}
      >
        <p className="text-[12px] md:text-[13px] font-bold tracking-[0.01em] text-white">
          <span className="font-extrabold uppercase tracking-[0.08em] mr-1.5">World Cup 2026:</span>
          June–July dates filling fast. Book your crew now.
        </p>
      </div>

      {/* Brand bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center shrink-0" aria-label="Prime Line AV">
          <Image
            src="/images/prime-line-av-logo-dark-bg.svg"
            alt="Prime Line AV"
            width={200}
            height={36}
            className="h-8 md:h-9 w-auto"
            priority
          />
        </a>

        <a
          href={`tel:${LANDING_PHONE_TEL}`}
          className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-[10px] bg-white/[0.04] border border-white/[0.10] text-white/90 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.20] transition-all text-[13px] font-semibold"
        >
          <Phone className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">{LANDING_PHONE_DISPLAY}</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </div>
  )
}
