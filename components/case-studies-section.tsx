"use client"

import { useState, useRef } from "react"
import { Play, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import Link from "next/link"

const caseStudies = [
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

export function CaseStudiesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const activeStudy = caseStudies[activeIndex]

  const handlePrev = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIsPlaying(false)
    setActiveIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play()
      setIsPlaying(true)
    }
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
              className="w-11 h-11 rounded-[12px] border border-white/[0.10] bg-white/[0.04] flex items-center justify-center text-white/65 hover:border-[#4ADE80]/30 hover:bg-[#4ADE80]/10 hover:text-white transition-all backdrop-blur-md"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-[12px] border border-white/[0.10] bg-white/[0.04] flex items-center justify-center text-white/65 hover:border-[#4ADE80]/30 hover:bg-[#4ADE80]/10 hover:text-white transition-all backdrop-blur-md"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Video Player */}
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-800">
            {activeStudy.youtubeId ? (
              // YouTube embed
              isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${activeStudy.youtubeId}?autoplay=1&rel=0`}
                  title={activeStudy.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src={activeStudy.thumbnail || "/placeholder.svg"}
                    alt={activeStudy.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white transition-colors shadow-xl group"
                    >
                      <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </>
              )
            ) : (
              // Local video
              <>
                <video
                  ref={videoRef}
                  src={activeStudy.videoUrl}
                  poster={activeStudy.thumbnail}
                  className="w-full h-full object-cover"
                  controls={isPlaying}
                  onEnded={() => setIsPlaying(false)}
                />
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlay}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-md flex items-center justify-center hover:bg-white transition-colors shadow-xl group"
                    >
                      <Play className="w-8 h-8 text-gray-900 fill-gray-900 ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{activeStudy.title}</h3>
              <p className="text-gray-400">{activeStudy.location}</p>
            </div>

            <p className="text-gray-300 leading-relaxed">{activeStudy.description}</p>

            <Link
              href={`/case-studies/${activeStudy.id}`}
              className="inline-flex items-center gap-2 text-emerald-400 font-medium hover:text-emerald-300 transition-colors"
            >
              View Full Case Study
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Thumbnails */}
            <div className="flex gap-3 pt-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => {
                    setActiveIndex(index)
                    setIsPlaying(false)
                  }}
                  className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${
                    index === activeIndex
                      ? "ring-2 ring-emerald-400 ring-offset-2 ring-offset-gray-900"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={study.thumbnail || "/placeholder.svg"}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
