"use client"

import { ArrowRight, CheckCircle2 } from "lucide-react"

interface ServiceDescriptionSectionProps {
  heading: string
  description: string
  highlights: string[]
  ctaLabel: string
  onStartQuote: () => void
}

export function ServiceDescriptionSection({
  heading,
  description,
  highlights,
  ctaLabel,
  onStartQuote,
}: ServiceDescriptionSectionProps) {
  return (
    <section className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
          {/* LEFT — heading + body */}
          <div>
            <span className="ds-pill mb-5">
              <span className="dot" />
              Service Overview
            </span>

            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.08] text-white mb-6">
              {heading}
            </h2>

            <p className="text-white/65 text-[16px] md:text-[17px] leading-relaxed">
              {description}
            </p>
          </div>

          {/* RIGHT — highlights + CTA */}
          <div
            className="relative p-7 md:p-9 rounded-[22px] border border-[#FF2D6F]/20 overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 45, 111,0.08) 0%, rgba(255, 94, 58,0.04) 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 36px -12px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 80% 70% at 50% 0%, rgba(255, 45, 111,0.12) 0%, transparent 70%)",
              }}
              aria-hidden
            />

            <div className="relative z-10">
              <h3 className="text-[18px] md:text-[20px] font-bold text-white tracking-[-0.01em] mb-5">
                What's included
              </h3>

              <ul className="space-y-3.5 mb-7">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-[#FF2D6F]/22 border border-[#FF2D6F]/35 flex items-center justify-center text-[#FF2D6F]">
                      <CheckCircle2 className="w-3.5 h-3.5" strokeWidth={2} />
                    </span>
                    <span className="text-white/75 text-[14px] md:text-[15px] leading-[1.55]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onStartQuote}
                className="group inline-flex items-center justify-center gap-2.5 w-full px-6 py-3.5 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-[#03070a] font-extrabold text-[14px] md:text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
                style={{
                  boxShadow:
                    "0 12px 36px -8px rgba(255, 45, 111,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
