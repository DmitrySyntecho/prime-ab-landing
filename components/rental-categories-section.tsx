"use client"

import { ArrowRight } from "lucide-react"
import { useCity } from "@/lib/city-context"
import {
  Monitor,
  Volume2,
  Lightbulb,
  Mic,
  Projector,
  Tv,
  Video,
  LayoutGrid,
  Box,
  Columns,
  Package,
  Radio,
  Palette,
  Music,
} from "lucide-react"

const categories = [
  { name: "LED Screen & Video Wall Rentals", icon: Monitor, slug: "led-walls" },
  { name: "Audio System Rental", icon: Volume2, slug: "audio-systems" },
  { name: "Event Lighting Rental", icon: Lightbulb, slug: "lighting" },
  { name: "Microphones & Audio Accessories", icon: Mic, slug: "microphones" },
  { name: "Projectors & Screens", icon: Projector, slug: "projectors" },
  { name: "TV & Monitor Rentals", icon: Tv, slug: "tv-monitors" },
  { name: "Video Production & Switching Gear", icon: Video, slug: "video-production" },
  { name: "Stage & Platform Rentals", icon: LayoutGrid, slug: "staging" },
  { name: "Truss & Rigging Rentals", icon: Box, slug: "truss-rigging" },
  { name: "Pipe & Drape Rentals", icon: Columns, slug: "pipe-drape" },
  { name: "Full AV Production Packages", icon: Package, slug: "full-production" },
  { name: "Live Streaming & Hybrid Packages", icon: Radio, slug: "live-streaming" },
  { name: "Event Design & 3D Rendering Services", icon: Palette, slug: "event-design" },
  { name: "DJ Equipment Rentals", icon: Music, slug: "dj-equipment" },
]

export function RentalCategoriesSection() {
  const city = useCity()
  const openQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <section id="rentals" className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="ds-pill mb-5">
            <span className="dot" />
            Equipment Rentals
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.18] text-white mb-4">
            AV Equipment <span className="ds-accent-text">Rental Categories</span> in {city}
          </h2>
          <p className="text-white/55 text-[15px] md:text-[17px]">
            Find the right AV equipment fast — LED walls, staging, audio systems, lighting, pipe &amp; drape, and full
            AV production available across {city}.
          </p>
        </div>

        {/* Flex-wrap with center justify so the last (partial) row is also centered */}
        <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
          {categories.map((category) => {
            const IconComponent = category.icon
            return (
              <button
                key={category.slug}
                type="button"
                onClick={openQuote}
                className="group relative flex items-center justify-between gap-3 p-5 rounded-[14px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:border-[#FF2D6F]/30 hover:bg-[#FF2D6F]/[0.04] transition-all duration-300 cursor-pointer overflow-hidden text-left w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.667rem)] xl:w-[calc(25%-0.75rem)]"
              >
                <div className="relative flex items-center gap-3.5 min-w-0">
                  <div className="flex-shrink-0 w-11 h-11 rounded-[12px] bg-[#FF2D6F]/12 border border-[#FF2D6F]/20 flex items-center justify-center group-hover:bg-[#FF2D6F] transition-all duration-300">
                    <IconComponent className="w-5 h-5 text-[#FF2D6F] group-hover:text-[#03070a] transition-colors duration-300" />
                  </div>
                  <span className="text-[13px] font-semibold text-white/85 group-hover:text-white transition-colors leading-tight">
                    {category.name}
                  </span>
                </div>

                <div className="relative flex-shrink-0 w-8 h-8 rounded-[10px] bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:bg-[#FF2D6F]/15 group-hover:border-[#FF2D6F]/30 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#FF2D6F] group-hover:translate-x-0.5 transition-all duration-300" />
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
