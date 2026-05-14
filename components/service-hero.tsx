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
  // The hero spans the full viewport height. We pull it up with a negative top
  // margin so the background image extends behind the sticky header (which is
  // semi-transparent + blurred, so the photo shows through). Extra height is
  // added back via min-h so the bottom edge still lines up with the viewport.
  return (
    <section
      className="relative isolate overflow-hidden flex items-center
                 -mt-[100px] md:-mt-[120px] lg:-mt-[140px]
                 min-h-[calc(100svh+100px)] md:min-h-[calc(100vh+120px)] lg:min-h-[calc(100vh+140px)]"
    >
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

      {/* Darken left side (text area), fade out toward the right */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(90deg, rgba(3,7,10,0.92) 0%, rgba(3,7,10,0.85) 30%, rgba(3,7,10,0.55) 55%, rgba(3,7,10,0.25) 78%, rgba(3,7,10,0.05) 100%)",
        }}
        aria-hidden
      />

      {/* Subtle top fade so the header sits over a slightly darker area */}
      <div
        className="absolute inset-x-0 top-0 h-40 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,7,10,0.55) 0%, rgba(3,7,10,0.25) 60%, rgba(3,7,10,0) 100%)",
        }}
        aria-hidden
      />

      {/* Smooth bottom fade into the page background */}
      <div
        className="absolute inset-x-0 bottom-0 h-[45%] -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,7,10,0) 0%, rgba(3,7,10,0.55) 45%, rgba(3,7,10,0.9) 80%, #03070a 100%)",
        }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 w-full pt-[100px] md:pt-[120px] lg:pt-[140px]">
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
              className="group inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-white font-extrabold text-[14px] md:text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
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
