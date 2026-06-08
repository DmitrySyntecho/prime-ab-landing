"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Play, Box, UserCheck, Clock, BadgeCheck } from "lucide-react"
import type { LandingCity } from "@/lib/landing-cities"

interface LandingHeroProps {
  data: LandingCity
}

const openQuote = () => document.dispatchEvent(new CustomEvent("openQuoteForm"))

const bullets = [
  { icon: Box, text: "Free 3D render — see your event before you commit" },
  { icon: UserCheck, text: "One dedicated Technical Director from planning to strike" },
  { icon: Clock, text: "Production complete and tested 2 hours before doors open" },
  { icon: BadgeCheck, text: "Trusted by Apple, Nike, TikTok and 500+ brands" },
]

/* 3-slot collage — each slot cross-fades through its own pair, so 6 real LA
   production photos cycle through the three frames (like the charity block). */
const slots: { images: { src: string; alt: string }[]; raised?: boolean }[] = [
  {
    images: [
      { src: "/images/case-studies/tiktok-2.webp", alt: "Main stage with LED walls and lighting" },
      { src: "/images/case-studies/miami-1.webp", alt: "Corporate summit main stage with LED wall" },
    ],
  },
  {
    raised: true,
    images: [
      { src: "/images/case-studies/amagi-5.webp", alt: "Massive LED video wall with gradient branding" },
      { src: "/images/case-studies/ramp-1.webp", alt: "Brand activation production setup" },
    ],
  },
  {
    images: [
      { src: "/images/case-studies/lca-1.webp", alt: "Gala stage with full lighting design" },
      { src: "/images/case-studies/tiktok-5.webp", alt: "L-Acoustics line array and lighting rig" },
    ],
  },
]

function RotatingFrame({
  images,
  raised,
  delay,
  priority,
}: {
  images: { src: string; alt: string }[]
  raised?: boolean
  delay: number
  priority?: boolean
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % images.length), 4200)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <div
      className="relative aspect-[3/4] rounded-[14px] overflow-hidden border border-white/[0.10]"
      style={{
        boxShadow: "0 18px 40px -16px rgba(0,0,0,0.6)",
        transform: raised ? "translateY(-16px)" : "translateY(0)",
        animationDelay: `${delay}ms`,
      }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="(max-width: 1024px) 30vw, 220px"
          priority={priority && i === 0}
          className="object-cover transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === active ? 1 : 0 }}
        />
      ))}
      <div
        className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(255,45,111,0), rgba(255,45,111,0.45))" }}
      />
    </div>
  )
}

export function LandingHero({ data }: LandingHeroProps) {
  const scrollToVideo = () => {
    document.getElementById("lp-video")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="top" className="relative pt-6 pb-12 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Scarcity banner */}
        <div
          className="mb-6 md:mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "linear-gradient(90deg, rgba(255,45,111,0.16), rgba(255,94,58,0.16))",
            border: "1px solid rgba(255,45,111,0.30)",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-[#FF2D6F] animate-ping opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D6F]" />
          </span>
          <span className="text-[12px] md:text-[13px] font-bold text-white">
            <span className="text-[#FF8FAA] uppercase tracking-[0.06em] mr-1">World Cup 2026:</span>
            June–July dates filling fast. Book your crew now.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 md:gap-10 lg:gap-14 items-center">
          {/* LEFT — compact text */}
          <div className="order-2 lg:order-1">
            <span className="ds-pill mb-3 md:mb-6 text-[10px] md:text-[12px]">
              <span className="dot" />
              AV Production in {data.city}
            </span>

            <h1 className="text-[32px] sm:text-[46px] lg:text-[64px] font-extrabold tracking-[-0.03em] leading-[1.04] text-white mt-3 mb-4 md:mb-5">
              {data.keyword} in <span className="ds-accent-text">{data.city}</span>
            </h1>

            <p className="text-white/65 text-[15px] md:text-[18px] leading-relaxed max-w-[540px] mb-5 md:mb-7">
              Your event runs flawlessly — or we make it right. One team, one contract, zero surprises.
            </p>

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

            <div className="flex flex-col sm:flex-row gap-3 mb-3">
              <button
                onClick={openQuote}
                className="group inline-flex items-center justify-center gap-2.5 px-6 md:px-7 py-3.5 md:py-4 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-white font-extrabold text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
                style={{ boxShadow: "0 12px 36px -8px rgba(255, 45, 111,0.55), inset 0 1px 0 rgba(255,255,255,0.3)" }}
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

            <p className="text-white/55 text-[13px] mb-2.5">Delivered in under 4 hours — not days.</p>

            <div className="inline-flex items-start gap-2 px-3 py-2 rounded-[10px] bg-[#FFD24A]/[0.08] border border-[#FFD24A]/25 max-w-[540px]">
              <span className="text-[#FFD24A] text-[12px] md:text-[13px] leading-snug font-semibold">
                Includes: Free 3D render + site survey + dedicated Technical Director
              </span>
            </div>
          </div>

          {/* RIGHT — rotating 3-of-6 collage */}
          <div className="order-1 lg:order-2 relative pt-4 pb-6">
            <div className="grid grid-cols-3 gap-2.5 md:gap-3">
              {slots.map((slot, i) => (
                <RotatingFrame
                  key={i}
                  images={slot.images}
                  raised={slot.raised}
                  delay={i * 700}
                  priority={i < 2}
                />
              ))}
            </div>

            {/* Floating trust card */}
            <div
              className="hidden md:flex absolute -bottom-3 -left-4 z-20 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/20 backdrop-blur-2xl animate-float-y"
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
