"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

const MUX_TIKTOK_ID = "KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU"

const caseStudies = [
  {
    id: "tiktok-shop-summit-2026",
    title: "TikTok Shop Summit 2026",
    location: "Los Angeles Convention Center",
    description:
      "Full-scale AV production for TikTok's flagship creator summit — main stage, exhibition floor, LED walls, lighting design, and live streaming for 5,000+ attendees.",
    muxId: MUX_TIKTOK_ID,
    thumbnail: `https://image.mux.com/${MUX_TIKTOK_ID}/thumbnail.jpg?time=30&width=800`,
  },
  {
    id: "cardone-ventures-conference",
    title: "Cardone Ventures Conference",
    location: "Las Vegas Convention Center",
    description:
      "Full AV production for Cardone Ventures featuring massive LED video walls, professional stage design, dynamic lighting, and complete audio-visual support for their high-energy business conference.",
    youtubeId: "Mx3ONczWWHM",
    thumbnail: "https://img.youtube.com/vi/Mx3ONczWWHM/maxresdefault.jpg",
  },
  {
    id: "miami-intercontinental-corporate",
    title: "International Corporate Summit",
    location: "Intercontinental Miami",
    description:
      "Full AV production for an international company from Spain featuring 3 breakout rooms, live translation services, professional staging, and complete audio-visual support across multiple conference spaces.",
    youtubeId: "sn4o09JgfLE",
    thumbnail: "https://img.youtube.com/vi/sn4o09JgfLE/maxresdefault.jpg",
  },
  {
    id: "wwd-style-awards",
    title: "WWD Style Awards",
    location: "Four Seasons Hotel, Los Angeles",
    description:
      "Full AV production for the prestigious WWD Style Awards featuring 4 LED video walls, premium sound system, and sophisticated lighting design. A high-end event with an elite crowd where flawless execution was essential.",
    youtubeId: "TC_aLg8XNuE",
    thumbnail: "https://img.youtube.com/vi/TC_aLg8XNuE/maxresdefault.jpg",
  },
  {
    id: "saudi-us-water-summit",
    title: "Saudi-US Water Summit 2025",
    location: "Conference Center",
    description:
      "Full AV production for the Saudi-US Water Summit 2025, an international diplomatic and industry event bringing together leaders from both nations to discuss water sustainability and technology partnerships.",
    youtubeId: "97O2dOi2ek0",
    thumbnail: "https://img.youtube.com/vi/97O2dOi2ek0/maxresdefault.jpg",
  },
]

const galleryPhotos = [
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
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000231-ubLtmx4KjStNvWRYhyBW4CIxid6IfD.png",
    alt: "Lighting console operator at work",
  },
]

function PlayButton({ size = "lg" }: { size?: "lg" | "md" }) {
  const dim = size === "lg" ? "w-20 h-20" : "w-14 h-14"
  const icon = size === "lg" ? "w-8 h-8" : "w-6 h-6"
  return (
    <div
      className={`relative flex items-center justify-center ${dim} rounded-full transition-all duration-300 group-hover:scale-110`}
      style={{
        background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
        boxShadow: "0 16px 48px -8px rgba(255,45,111,0.6)",
      }}
    >
      <span
        className="absolute inset-0 rounded-full animate-ping"
        style={{ background: "rgba(255,45,111,0.25)" }}
      />
      <Play className={`${icon} fill-white text-white ml-0.5`} />
    </div>
  )
}

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeStudy = caseStudies[activeIndex]

  const handlePrev = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div className="max-w-3xl">
            <span className="ds-pill mb-5">
              <span className="dot" />
              See Us At Work
            </span>
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.05] text-white mb-3">
              Our Recent <span className="ds-accent-text">Work</span>
            </h2>
            <p className="text-white/55 text-[16px] md:text-[17px]">
              Behind-the-scenes videos showing how our team sets up, builds, and produces events.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-[12px] border border-white/[0.10] bg-white/[0.04] flex items-center justify-center text-white/65 hover:border-[#FF2D6F]/30 hover:bg-[#FF2D6F]/10 hover:text-white transition-all backdrop-blur-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-[12px] border border-white/[0.10] bg-white/[0.04] flex items-center justify-center text-white/65 hover:border-[#FF2D6F]/30 hover:bg-[#FF2D6F]/10 hover:text-white transition-all backdrop-blur-md"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Video Player */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-black">
            {isPlaying ? (
              activeStudy.muxId ? (
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src={`https://stream.mux.com/${activeStudy.muxId}.m3u8`}
                  autoPlay
                  controls
                  playsInline
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${activeStudy.youtubeId}?autoplay=1&rel=0`}
                  title={activeStudy.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )
            ) : (
              <>
                <img
                  src={activeStudy.thumbnail}
                  alt={activeStudy.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)",
                  }}
                />
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                  aria-label="Play video"
                >
                  <PlayButton size="lg" />
                </button>
              </>
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeStudy.title}</h3>
              <p className="text-white/45">{activeStudy.location}</p>
            </div>

            <p className="text-white/65 leading-relaxed">{activeStudy.description}</p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                onClick={() => document.dispatchEvent(new CustomEvent("openQuoteForm"))}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-extrabold text-[13px] tracking-[0.02em] transition-all hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                  boxShadow: "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                }}
              >
                Get a Similar Quote
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:7869338488"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white font-semibold text-[13px] backdrop-blur-md hover:bg-white/[0.10] transition-all"
              >
                Talk to an Expert
              </a>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 pt-4 flex-wrap">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPlaying(false)
                  }}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
                    index === activeIndex
                      ? "ring-2 ring-[#FF2D6F] ring-offset-2 ring-offset-[#0a0a12]"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-8 md:mt-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-3">
            {galleryPhotos.map((photo, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.07] group"
                style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.4)" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  quality={70}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)" }}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
