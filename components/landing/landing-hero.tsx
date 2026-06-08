"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowRight, Play, Box, UserCheck, Clock, BadgeCheck, Sparkles } from "lucide-react"
import { LandingLogoStrip } from "./landing-logo-strip"
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

/* 3-photo collage moved over from the service pages' second block
   (ServiceDescriptionSection): About-Us-style layout, each slot cross-fades
   between set A and set B so 6 real production photos cycle through 3 frames. */
const collage = [
  "/images/services/av-01.webp",
  "/images/services/av-02.webp",
  "/images/services/av-03.webp",
  "/images/services/av-06.webp",
  "/images/services/av-05.webp",
  "/images/services/av-07.webp",
]

const slotLayout = [
  {
    className: "absolute top-0 left-[5%] w-[90%] h-[55%] rounded-2xl overflow-hidden border border-white/10 z-10",
    style: { boxShadow: "0 25px 50px -15px rgba(0,0,0,0.5), 0 10px 20px -10px rgba(0,0,0,0.3)" } as const,
  },
  {
    className: "absolute bottom-[5%] left-[-3%] w-[55%] h-[48%] rounded-2xl overflow-hidden border-2 border-white/15 z-20",
    style: { transform: "rotate(-3deg)", boxShadow: "0 30px 60px -15px rgba(0,0,0,0.6), 0 15px 30px -10px rgba(0,0,0,0.4)" } as const,
  },
  {
    className: "absolute bottom-[8%] right-[-5%] w-[52%] h-[45%] rounded-2xl overflow-hidden border-2 border-white/15 z-30",
    style: { transform: "rotate(2.5deg)", boxShadow: "0 35px 70px -20px rgba(0,0,0,0.65), 0 18px 36px -12px rgba(0,0,0,0.45)" } as const,
  },
]

function HeroCollage() {
  const setA = collage.slice(0, 3)
  const setB = collage.slice(3, 6)
  const [showingB, setShowingB] = useState([false, false, false])

  useEffect(() => {
    const STAGGER_MS = 1000
    const HOLD_MS = 5000
    const FADE_MS = 800
    const timeouts: ReturnType<typeof setTimeout>[] = []

    const cycle = (toB: boolean) => {
      for (let i = 0; i < 3; i++) {
        timeouts.push(
          setTimeout(() => {
            setShowingB((prev) => {
              const next = [...prev]
              next[i] = toB
              return next
            })
          }, i * STAGGER_MS),
        )
      }
      timeouts.push(setTimeout(() => cycle(!toB), HOLD_MS + 2 * STAGGER_MS + FADE_MS))
    }

    timeouts.push(setTimeout(() => cycle(true), HOLD_MS))
    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative h-[400px] md:h-[500px]">
      {slotLayout.map((slot, i) => (
        <div key={i} className={slot.className} style={slot.style}>
          {setA[i] && <Image src={setA[i]} alt="" fill sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover" priority={i === 0} />}
          {setB[i] && (
            <Image
              src={setB[i]}
              alt=""
              fill
              sizes="(max-width: 1024px) 90vw, 40vw"
              className="object-cover absolute inset-0 transition-opacity duration-[800ms]"
              style={{ opacity: showingB[i] ? 1 : 0 }}
            />
          )}
        </div>
      ))}

      {/* Floating stat cards */}
      <div
        className="hidden md:flex absolute top-4 right-[-10px] md:right-[-20px] z-40 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/25 backdrop-blur-2xl animate-float-y"
        style={{ background: "rgba(8,18,26,0.85)", boxShadow: "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        <div className="w-9 h-9 rounded-[10px] bg-[#FF2D6F]/16 grid place-items-center text-[#FF2D6F]">
          <Sparkles className="w-[18px] h-[18px]" />
        </div>
        <div>
          <b className="block text-[13px] font-bold text-white leading-tight">1,986+ Events</b>
          <span className="text-[11px] text-white/45">Delivered flawlessly</span>
        </div>
      </div>
      <div
        className="hidden md:flex absolute bottom-[14%] -left-6 z-40 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/20 backdrop-blur-2xl animate-float-y"
        style={{ animationDelay: "-2.5s", background: "rgba(8,18,26,0.7)", boxShadow: "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)" }}
      >
        <div className="w-9 h-9 rounded-[10px] bg-[#FF2D6F]/16 grid place-items-center text-[#FF2D6F]">
          <Clock className="w-[18px] h-[18px]" />
        </div>
        <div>
          <b className="block text-[13px] font-bold text-white leading-tight">2 Hours Early</b>
          <span className="text-[11px] text-white/45">Tested before doors</span>
        </div>
      </div>
    </div>
  )
}

export function LandingHero({ data, onQuote }: LandingHeroProps) {
  const scrollToVideo = () => {
    document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="top" className="relative pt-6 pb-12 md:pt-10 md:pb-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 lg:gap-14 items-center">
          {/* LEFT — compact text */}
          <div className="order-2 lg:order-1">
            <span className="ds-pill mb-4 md:mb-5 text-[10px] md:text-[12px]">
              <span className="dot" />
              AV Production in {data.city}
            </span>

            {/* H1 — sized to wrap to a maximum of 2 lines on desktop (mobile exempt) */}
            <h1 className="text-[30px] sm:text-[38px] lg:text-[42px] font-extrabold tracking-[-0.02em] leading-[1.08] text-white mb-4">
              {data.keyword} in <span className="ds-accent-text">{data.city}</span>
            </h1>

            <p className="text-white/65 text-[15px] md:text-[17px] leading-relaxed max-w-[520px] mb-5 md:mb-6">
              Your event runs flawlessly — or we make it right. One team, one contract, zero surprises.
            </p>

            <ul className="space-y-2.5 mb-6 max-w-[540px]">
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
                onClick={onQuote}
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

            <div className="inline-flex items-start gap-2 px-3 py-2 rounded-[10px] bg-[#FFD24A]/[0.08] border border-[#FFD24A]/25 max-w-[520px]">
              <span className="text-[#FFD24A] text-[12px] md:text-[13px] leading-snug font-semibold">
                Includes: Free 3D render + site survey + dedicated Technical Director
              </span>
            </div>
          </div>

          {/* RIGHT — animated 3-photo collage */}
          <div className="order-1 lg:order-2 relative">
            <HeroCollage />
          </div>
        </div>

        {/* Company logos — bottom of the first screen */}
        <LandingLogoStrip />
      </div>
    </section>
  )
}
