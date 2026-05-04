"use client"

import { useState, useRef } from "react"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const services = [
  {
    title: "Audio Systems",
    slug: "audio",
    description: "Crystal-clear sound for any venue size",
    image: "/professional-audio-mixing-console-concert-event-wi.jpg",
  },
  {
    title: "Video Production",
    slug: "video",
    description: "Live streaming & multi-camera capture",
    image: "/video-production-camera-equipment-broadcast-studio.jpg",
  },
  {
    title: "Lighting Design",
    slug: "lighting",
    description: "Atmospheric lighting that transforms spaces",
    image: "/concert-stage-lighting-design-colorful-laser-beams.jpg",
  },
  {
    title: "LED Walls",
    slug: "led-walls",
    description: "High-resolution displays for maximum impact",
    image: "/large-led-video-wall-display-corporate-event-speak.jpg",
  },
  {
    title: "Custom Staging",
    slug: "staging",
    description: "Stage builds & runway construction",
    image: "/custom-event-stage-construction-setup-conference.jpg",
  },
  {
    title: "Live Streaming",
    slug: "live-streaming",
    description: "Professional broadcast to any platform",
    image: "/live-streaming-setup-control-room-monitors.jpg",
  },
  {
    title: "Permanent AV Installation",
    slug: "permanent-av-installation",
    description:
      "Design and installation of LED walls, audio systems, lighting, and full AV infrastructure for your venue or facility.",
    image: "/led-video-wall-technician-installing-equipment.jpg",
  },
  {
    title: "AV Consulting & System Design",
    slug: "av-consulting",
    description:
      "Professional guidance for planning, improving, or optimizing AV systems, workflows, and in-house production operations.",
    image: "/corporate-event-av-setup-stage-lighting.jpg",
  },
]

export function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 350
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScrollButtons, 300)
    }
  }

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-start justify-between mb-10">
          <div>
            <p className="text-[#4ADE80] text-sm font-semibold tracking-widest uppercase mb-3">WHAT WE DO</p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1217]">Our Services</h2>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-md border border-gray-200 flex items-center justify-center transition-all ${
                canScrollLeft ? "hover:bg-gray-100 text-gray-700" : "text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-md border border-gray-200 flex items-center justify-center transition-all ${
                canScrollRight ? "hover:bg-gray-100 text-gray-700" : "text-gray-300 cursor-not-allowed"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          onScroll={checkScrollButtons}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group flex-shrink-0 w-[300px] md:w-[340px] snap-start"
            >
              {/* Card with image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl md:text-2xl mb-2">{service.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-[#4ADE80] text-sm font-medium group-hover:gap-3 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
