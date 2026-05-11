"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight, ArrowRight, X } from "lucide-react"

const MUX_TIKTOK_ID = "KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU"
const MUX_MIAMI_ID = "a1VM513vYaAw3u8rBfLB8bG4MMma2FbIFN2YGepuxiA"

const caseStudies = [
  {
    id: "tiktok-shop-summit-2026",
    title: "TikTok Shop Summit 2026",
    location: "Los Angeles Convention Center",
    description:
      "Full-scale AV production for TikTok's flagship creator summit — main stage, exhibition floor, LED walls, lighting design, and live streaming for 5,000+ attendees.",
    muxId: MUX_TIKTOK_ID,
    thumbnail: `https://image.mux.com/${MUX_TIKTOK_ID}/thumbnail.jpg?time=30&width=800`,
    gallery: [
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
    ],
  },
  {
    id: "miami-hotel-corporate-summit",
    title: "IDB Group Corporate Summit",
    location: "Intercontinental Miami",
    description:
      "Full AV production for an international corporate summit featuring LED video walls, professional staging with truss rigging, dynamic blue and magenta lighting design, and complete audio-visual support for executive panel discussions.",
    muxId: MUX_MIAMI_ID,
    thumbnail: `https://image.mux.com/${MUX_MIAMI_ID}/thumbnail.jpg?time=5&width=800`,
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230051-DD4GSbBdZaP6BDRrqau5XGpy0NeD9f.png",
        alt: "IDB Group main stage with LED wall",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230058-q7VLRq8JfhjHGhFboOLl0h3eVjX8HY.png",
        alt: "Conference session with blue lighting",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230113-wWo9Ytb62pUwFztNC66uqUHJhSdkQK.png",
        alt: "Panel discussion on stage",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230029-XDiglrRKuyghMgAVAJrYtVZGcKDDIL.png",
        alt: "LED wall testing with crew",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230035-em7XF6vy2QIgYdTIhqUDPJxzNWo1Jz.png",
        alt: "Truss rigging and lighting setup",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-11%20230009-wh5PZFGYur7OJIaQvQN8A7RGRh4rDp.png",
        alt: "Moving head lights preparation",
      },
    ],
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const activeStudy = caseStudies[activeIndex]

  const galleryPhotos = activeStudy.gallery || []

  const closeLightbox = useCallback(() => setLightboxIndex(null), [])
  const prevPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length)), [galleryPhotos.length])
  const nextPhoto = useCallback(() =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % galleryPhotos.length)), [galleryPhotos.length])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox()
      if (e.key === "ArrowLeft") prevPhoto()
      if (e.key === "ArrowRight") nextPhoto()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightboxIndex, closeLightbox, prevPhoto, nextPhoto])

  const handlePrev = () => {
    setIsPlaying(false)
    setLightboxIndex(null)
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsPlaying(false)
    setLightboxIndex(null)
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
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/[0.07] group cursor-zoom-in"
                style={{ boxShadow: "0 8px 24px -6px rgba(0,0,0,0.4)" }}
                aria-label={`View photo: ${photo.alt}`}
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
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.92)" }}
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Counter */}
          <span className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 text-sm tabular-nums">
            {lightboxIndex + 1} / {galleryPhotos.length}
          </span>

          {/* Prev arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto() }}
            className="absolute left-3 md:left-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-5xl mx-12 md:mx-24"
            style={{ aspectRatio: "16/9" }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryPhotos[lightboxIndex].src}
              alt={galleryPhotos[lightboxIndex].alt}
              fill
              className="object-contain rounded-xl"
              sizes="100vw"
              quality={90}
              priority
            />
          </div>

          {/* Next arrow */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto() }}
            className="absolute right-3 md:right-6 z-10 w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </section>
  )
}
