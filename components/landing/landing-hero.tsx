"use client"

import Image from "next/image"
import { ArrowRight, Play, Box, UserCheck, Clock, BadgeCheck } from "lucide-react"
import type { LandingCity } from "@/lib/landing-cities"

interface LandingHeroProps {
  data: LandingCity
  onQuote: () => void
}

const bullets = [
  { icon: Box, text: "Free 3D render — see your event before you commit" },
  { icon: UserCheck, text: "One dedicated Technical Director from planning to strike" },
  { icon: Clock, text: "Production complete and tested 2 hours before doors open" },
  { icon: BadgeCheck, text: "Trusted by Apple, Nike, TikTok and 500+ brands" },
]

/* APS-style 4-photo collage. Real production photography from past LA events. */
const collage = [
  { src: "/images/case-studies/tiktok-2.webp", alt: "Main stage with LED walls and lighting design" },
  { src: "/images/case-studies/amagi-5.webp", alt: "Massive LED video wall with gradient branding" },
  { src: "/images/case-studies/lca-1.webp", alt: "Gala stage with full lighting design" },
  { src: "/images/case-studies/miami-1.webp", alt: "Corporate summit main stage with LED wall" },
]

export function LandingHero({ data, onQuote }: LandingHeroProps) {
  const scrollToVideo = () => {
    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="top" className="relative pt-6 pb-12 md:pt-10 md:pb-20 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.02fr_0.98fr] gap-7 md:gap-10 lg:gap-14 items-center">
          {/* LEFT — compact text */}
          <div className="order-2 lg:order-1">
            <span className="ds-pill mb-4 md:mb-5 text-[10px] md:text-[12px]">
              <span className="dot" />
              AV Production in {data.city}
            </span>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[58px] font-extrabold tracking-[-0.03em] leading-[1.04] text-white mb-3 md:mb-4">
              {data.keyword} in <span className="ds-accent-text">{data.city}</span>
            </h1>

            <p className="text-white/65 text-[15px] md:text-[18px] leading-relaxed max-w-[540px] mb-5 md:mb-7">
              Your event runs flawlessly — or we make it right. One team, one contract, zero surprises.
            </p>

            {/* Bullets */}
            <ul className="space-y-2.5 mb-6 md:mb-8 max-w-[560px]">
              {bullets.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-[8px] bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 grid place-items-center text-[#FF2D6F] flex-shrink-0">
                    <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                  </span>
                  <span className="text-[14px] md:text-[15px] text-white/80 leading-snug">{text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <button
                onClick={onQuote}
                className="group inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-white font-extrabold text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
                style={{
                  boxShadow: "0 12px 36px -8px rgba(255, 45, 111,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
              >
                Get Your Custom Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={scrollToVideo}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 md:py-4 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white font-bold text-[14px] backdrop-blur-md hover:bg-white/[0.10] hover:border-white/[0.22] transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Watch How We Work
              </button>
            </div>

            <p className="text-white/55 text-[13px] mb-2.5">
              Delivered in under 4 hours — not days.
            </p>

            <div className="inline-flex items-start gap-2 px-3 py-2 rounded-[10px] bg-[#FFD24A]/[0.08] border border-[#FFD24A]/25 max-w-[540px]">
              <span className="text-[#FFD24A] text-[12px] md:text-[13px] leading-snug font-semibold">
                Includes: Free 3D render + site survey + dedicated Technical Director
              </span>
            </div>
          </div>

          {/* RIGHT — 4-photo collage in a glass frame */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="relative rounded-[24px] overflow-hidden border border-white/10 backdrop-blur-2xl p-3 md:p-4"
              style={{
                background: "linear-gradient(135deg, rgba(255, 45, 111,0.10), rgba(255, 210, 74,0.05))",
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)",
              }}
            >
              <div className="grid grid-cols-2 gap-2.5 md:gap-3">
                {collage.map((img, i) => (
                  <div
                    key={img.src}
                    className={`relative overflow-hidden rounded-[14px] border border-white/[0.08] bg-black ${
                      i === 0 ? "aspect-[4/5]" : i === 1 ? "aspect-square" : i === 2 ? "aspect-square" : "aspect-[4/5]"
                    } ${i === 1 ? "mt-0 md:mt-6" : ""} ${i === 2 ? "-mt-0 md:-mt-6" : ""}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 45vw, 24vw"
                      priority={i < 2}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Floating trust card */}
            <div
              className="hidden md:flex absolute -bottom-5 -left-5 z-20 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/20 backdrop-blur-2xl animate-float-y"
              style={{
                background: "rgba(8,18,26,0.78)",
                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="w-9 h-9 rounded-[10px] bg-[#FF2D6F]/16 grid place-items-center text-[#FF2D6F]">
                <BadgeCheck className="w-[18px] h-[18px]" />
              </div>
              <div>
                <b className="block text-[13px] font-bold text-white leading-tight">1,986+ Events</b>
                <span className="text-[11px] text-white/50">Delivered flawlessly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
