"use client"

import Image from "next/image"
import { ArrowRight, Phone } from "lucide-react"

interface ServiceHeroProps {
  eyebrow: string
  h1: string
  subheadline: string
  image: string
  onStartQuote: () => void
}

const PHONE = "(786) 933-8488"

export function ServiceHero({ eyebrow, h1, subheadline, image, onStartQuote }: ServiceHeroProps) {
  return (
    <section className="relative isolate overflow-hidden min-h-[640px] md:min-h-[720px] lg:min-h-[760px] flex items-center">
      {/* Full-bleed background image */}
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover -z-10"
        aria-hidden
      />

      {/* Darken left side where the text sits, fade out to the right */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,7,10,0.92) 0%, rgba(3,7,10,0.85) 35%, rgba(3,7,10,0.55) 60%, rgba(3,7,10,0.25) 80%, rgba(3,7,10,0.10) 100%)",
        }}
        aria-hidden
      />

      {/* Bottom vignette so the next section blends cleanly */}
      <div
        className="absolute inset-x-0 bottom-0 h-40 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,7,10,0) 0%, rgba(3,7,10,0.85) 70%, #03070a 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28 lg:py-32 w-full">
        <div className="max-w-[640px]">
          <span className="ds-pill mb-5 md:mb-7 text-[10px] md:text-[12px]">
            <span className="dot" />
            {eyebrow}
          </span>

          <h1 className="text-[36px] sm:text-[52px] lg:text-[72px] font-extrabold tracking-[-0.03em] leading-[1.02] text-white mb-5 md:mb-7">
            {h1}
          </h1>

          <p className="text-white/70 text-[15px] md:text-[18px] leading-relaxed max-w-[520px] mb-7 md:mb-10">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={onStartQuote}
              className="group inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-[#03070a] font-extrabold text-[14px] md:text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
              style={{
                boxShadow:
                  "0 12px 36px -8px rgba(255, 45, 111,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              Start Your Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 rounded-xl border border-white/15 bg-white/[0.04] backdrop-blur-md text-white font-bold text-[14px] md:text-[15px] hover:bg-white/[0.08] transition-all"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
