"use client"

import Image from "next/image"
import { Play, Sparkles } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000137-oGibzHwtWkf6CLMeeWszssTOlWjkYo.png",
    alt: "TikTok Shop Summit main stage presentation",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000304-zVHYI5hdU5q1T4kg9ZZv3EHDhihlcA.png",
    alt: "Summit stage setup with disco ball and lighting",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-07%20235523.png-tyMpiIJhCpfgFVGlaMwFegZT7MJEOg.jpeg",
    alt: "TikTok Shop Summit exhibition floor",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000316-YGlJ1GaRhOEySjxu5xVqv8CEip6bc5.png",
    alt: "Speaker presenting TikTok Shop ecosystem milestones",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000215-3olUV1CLz6o4o885yq3nTPneeOvCCX.png",
    alt: "L-Acoustics speaker array setup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000243-fzo4HgYcDqbH1M89hPoMvVMP37QaUn.png",
    alt: "LED wall installation with crew",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000231-ubLtmx4KjStNvWRYhyBW4CIxid6IfD.png",
    alt: "Lighting console operator at work",
  },
]

export function TikTokSummitShowcase() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(255,45,111,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(255,94,58,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF2D6F]/25 bg-[#FF2D6F]/08 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2D6F]" />
            <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#FF2D6F]">
              Case Study
            </span>
          </div>
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-black tracking-[-0.025em] leading-[1.1] text-white mb-4">
            TikTok Shop{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Summit 2026
            </span>
          </h2>
          <p className="text-white/50 text-[15px] md:text-[16px] max-w-2xl mx-auto leading-relaxed">
            Full-scale AV production for TikTok&apos;s flagship creator summit — main stage, exhibition floor, 
            LED walls, lighting design, and live streaming for 5,000+ attendees.
          </p>
        </div>

        {/* Video Player */}
        <div className="mb-10">
          <div
            className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08]"
            style={{
              boxShadow:
                "0 40px 80px -20px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), inset 0 1px 0 rgba(255,255,255,0.06)",
            }}
          >
            {/* Video container with gradient overlay at edges */}
            <div className="relative aspect-video bg-black/40">
              <iframe
                src="https://player.mux.com/KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU?metadata-video-title=1+TikTok+BTS&video-title=1+TikTok+BTS"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
            {/* Subtle glow around video */}
            <div
              className="absolute -inset-px rounded-2xl md:rounded-3xl pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,45,111,0.15) 0%, transparent 30%, transparent 70%, rgba(255,94,58,0.10) 100%)",
                opacity: 0.5,
              }}
              aria-hidden
            />
          </div>
          {/* Video caption */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <Play className="w-3.5 h-3.5 text-[#FF2D6F]" />
            <span className="text-white/40 text-[12px] tracking-[0.04em] uppercase font-medium">
              Behind the Scenes — TikTok Shop Summit Production
            </span>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.06] group cursor-pointer transition-all duration-300 hover:border-[#FF2D6F]/30 hover:scale-[1.02] ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              style={{
                boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4)",
              }}
            >
              <div className={`relative ${index === 0 ? "aspect-[4/3]" : "aspect-[16/10]"}`}>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                />
                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "5,000+", label: "Attendees" },
            { value: "3", label: "Days of Production" },
            { value: "200+", label: "LED Panels" },
            { value: "48", label: "Crew Members" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center py-5 px-4 rounded-xl border border-white/[0.06] bg-white/[0.02]"
            >
              <div
                className="text-[28px] md:text-[36px] font-black tracking-[-0.02em]"
                style={{
                  background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-white/40 text-[12px] tracking-[0.06em] uppercase font-medium mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
