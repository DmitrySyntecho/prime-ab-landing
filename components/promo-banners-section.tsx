"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const openQuote = () => document.dispatchEvent(new CustomEvent("openQuoteForm"))

const promoBanners = [
  {
    id: 1,
    headline: "LED Wall Rental Specials",
    subheadline: "Exclusive monthly offers for indoor and outdoor LED wall rentals.",
    cta: "Book Now",
    ctaLink: "/rentals/led-walls",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 2,
    headline: "Permanent LED Wall Installation",
    subheadline: "Upgrade your venue with a high-performance LED wall designed and installed by our team.",
    cta: "Learn More",
    ctaLink: "/services/led-installation",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 3,
    headline: "Looking for an In-House AV Production Partner?",
    subheadline: "We operate AV for hotels, venues, churches, and entertainment spaces.",
    cta: "Talk to an Expert",
    ctaLink: "/services/in-house-av",
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 4,
    headline: "Need AV Consulting for Your Space?",
    subheadline: "We design permanent AV systems and help companies build reliable production workflows.",
    cta: "Get Consulting",
    ctaLink: "/services/av-consulting",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1800&q=80",
  },
  {
    id: 5,
    headline: "Permanent AV Installation for Your Facility",
    subheadline: "From conference rooms to large venues — we design and install complete AV systems.",
    cta: "Request a Quote",
    ctaLink: "/services/av-installation",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Permanent%20AV%20Installation%20for%20Your%20Facilit-ZibG9OyLaAwFSPKANf2yhyVIxeHZ2G.png",
  },
]

export function PromoBannersSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % promoBanners.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + promoBanners.length) % promoBanners.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Single Banner Carousel */}
        <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {/* Main Banner */}
          <div className="relative overflow-hidden rounded-[22px] border border-white/[0.08] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] aspect-[3/1] md:aspect-[4/1]">
            {promoBanners.map((banner, index) => (
              <div
                key={banner.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={banner.image || "/placeholder.svg"}
                  alt={banner.headline}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />

                <div className="absolute inset-0 bg-gradient-to-r from-[#03070a]/90 via-[#03070a]/55 to-[#03070a]/15" />

                <div className="absolute inset-0 flex items-center">
                  <div className="px-8 md:px-12 lg:px-16 max-w-2xl">
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-extrabold tracking-[-0.02em] mb-2 md:mb-3 leading-tight text-white">
                      {banner.headline}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg mb-5 md:mb-6 text-white/65">{banner.subheadline}</p>
                    <button
                      type="button"
                      onClick={openQuote}
                      className="inline-flex items-center gap-2 bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] text-white font-bold px-5 py-2.5 md:px-6 md:py-3 rounded-xl transition-all hover:-translate-y-0.5 text-sm md:text-base"
                      style={{
                        boxShadow:
                          "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                      }}
                    >
                      {banner.cta}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 bg-white/[0.05] hover:bg-[#FF2D6F]/15 hover:border-[#FF2D6F]/30 border border-white/[0.10] backdrop-blur-md text-white rounded-[12px] flex items-center justify-center transition-all"
            aria-label="Previous banner"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 bg-white/[0.05] hover:bg-[#FF2D6F]/15 hover:border-[#FF2D6F]/30 border border-white/[0.10] backdrop-blur-md text-white rounded-[12px] flex items-center justify-center transition-all"
            aria-label="Next banner"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {promoBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#FF2D6F] w-8" : "bg-white/40 hover:bg-white/60 w-2"
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
