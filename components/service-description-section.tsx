"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { ArrowRight, CheckCircle2, Sparkles, Clock } from "lucide-react"

interface ServiceDescriptionSectionProps {
  heading: string
  description: string
  highlights: string[]
  ctaLabel: string
  collage: string[]
  collageStats: { value: string; label: string }[]
  onStartQuote: () => void
}

export function ServiceDescriptionSection({
  heading,
  description,
  highlights,
  ctaLabel,
  collage,
  collageStats,
  onStartQuote,
}: ServiceDescriptionSectionProps) {
  const photos = collage.slice(0, 6).filter(Boolean)
  const stat0 = collageStats[0]
  const stat1 = collageStats[1]

  const [activeIdx, setActiveIdx] = useState(0)
  const [prevIdx, setPrevIdx] = useState<number | null>(null)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (photos.length <= 1) return
    const interval = setInterval(() => {
      setPrevIdx(activeIdx)
      setFading(true)
      setTimeout(() => {
        setActiveIdx((i) => (i + 1) % photos.length)
        setFading(false)
        setPrevIdx(null)
      }, 700)
    }, 3500)
    return () => clearInterval(interval)
  }, [activeIdx, photos.length])

  return (
    <section className="py-20 md:py-24 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* LEFT — heading, body, highlights, CTA */}
          <div className="order-2 lg:order-1">
            <span className="ds-pill mb-5">
              <span className="dot" />
              Service Overview
            </span>

            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.08] text-white mb-6">
              {heading}
            </h2>

            <div className="text-white/65 text-[16px] md:text-[17px] leading-relaxed mb-7 space-y-4">
              {description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <ul className="space-y-3 mb-9">
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
              className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-white font-extrabold text-[14px] md:text-[15px] tracking-[0.01em] transition-all hover:-translate-y-0.5"
              style={{
                boxShadow:
                  "0 12px 36px -8px rgba(255, 45, 111,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* RIGHT — glass-frame auto-playing slideshow */}
          <div className="order-1 lg:order-2 relative">
            <div
              className="relative rounded-[24px] overflow-hidden border border-white/10 backdrop-blur-2xl"
              style={{
                background: "linear-gradient(135deg, rgba(255, 45, 111,0.10), rgba(255, 210, 74,0.05))",
                boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)",
              }}
            >
              <div className="m-3 md:m-5 rounded-[14px] md:rounded-[18px] overflow-hidden bg-black border border-white/[0.08]">
                {/* Slideshow container — fixed aspect ratio, images fade over each other */}
                <div className="relative aspect-[4/3] w-full">
                  {photos.map((src, idx) => (
                    <div
                      key={src}
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{
                        opacity: idx === activeIdx ? 1 : 0,
                        zIndex: idx === activeIdx ? 2 : prevIdx === idx ? 1 : 0,
                      }}
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                        priority={idx === 0}
                      />
                      {/* Subtle bottom gradient */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "linear-gradient(180deg, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)",
                        }}
                        aria-hidden
                      />
                    </div>
                  ))}

                  {/* Dot indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex gap-1.5">
                    {photos.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setPrevIdx(activeIdx)
                          setActiveIdx(idx)
                        }}
                        aria-label={`Show image ${idx + 1}`}
                        className="h-1.5 rounded-full transition-all duration-300"
                        style={{
                          width: idx === activeIdx ? "20px" : "6px",
                          background: idx === activeIdx ? "#FF2D6F" : "rgba(255,255,255,0.35)",
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Live tag */}
              <div className="absolute left-6 top-6 md:left-9 md:top-9 z-10 inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-[10px] bg-black/55 backdrop-blur-md border border-white/[0.12] text-[9px] md:text-[10px] font-bold tracking-[0.14em] uppercase text-white">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 rounded-full bg-[#FF2D6F] animate-ping opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FF2D6F]" />
                </span>
                Production · Live
              </div>
            </div>

            {/* Floating stat card — top-left */}
            {stat0 && (
              <div
                className="hidden md:flex absolute top-[12%] -left-6 z-20 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/20 backdrop-blur-2xl animate-float-y"
                style={{
                  background: "rgba(8,18,26,0.7)",
                  boxShadow:
                    "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-9 h-9 rounded-[10px] bg-[#FF2D6F]/16 grid place-items-center text-[#FF2D6F]">
                  <Sparkles className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <b className="block text-[13px] font-bold text-white leading-tight">{stat0.value}</b>
                  <span className="text-[11px] text-white/45">{stat0.label}</span>
                </div>
              </div>
            )}

            {/* Floating stat card — bottom-right */}
            {stat1 && (
              <div
                className="hidden md:flex absolute bottom-[14%] -right-6 z-20 items-center gap-3 px-4 py-3.5 rounded-[14px] border border-[#FF2D6F]/20 backdrop-blur-2xl animate-float-y"
                style={{
                  animationDelay: "-2.5s",
                  background: "rgba(8,18,26,0.7)",
                  boxShadow:
                    "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                <div className="w-9 h-9 rounded-[10px] bg-[#FF2D6F]/16 grid place-items-center text-[#FF2D6F]">
                  <Clock className="w-[18px] h-[18px]" />
                </div>
                <div>
                  <b className="block text-[13px] font-bold text-white leading-tight">{stat1.value}</b>
                  <span className="text-[11px] text-white/45">{stat1.label}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
