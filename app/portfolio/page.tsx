"use client"

import { useState } from "react"
import { StickyCTA } from "@/components/sticky-cta"
import { QuoteForm } from "@/components/quote-form"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    title: "USA Teqball Tour",
    category: "Sports Event",
    location: "Long Beach Arena & Anaheim",
    image: "/teqball-sports-event-arena.jpg",
  },
  {
    title: "Family Style Food Festival",
    category: "Festival",
    location: "CBS Television City, LA",
    image: "/food-festival-outdoor-event.jpg",
  },
  {
    title: "Netflix Brand Activation",
    category: "Brand Activation",
    location: "Los Angeles",
    image: "/netflix-brand-activation-event.jpg",
  },
  {
    title: "TikTok Creator Summit",
    category: "Corporate Event",
    location: "Miami Beach",
    image: "/tiktok-corporate-summit.jpg",
  },
  {
    title: "Marriott Annual Conference",
    category: "Conference",
    location: "Fort Lauderdale",
    image: "/marriott-hotel-conference.jpg",
  },
  {
    title: "ESPN Live Broadcast",
    category: "Live Production",
    location: "Multiple Locations",
    image: "/espn-live-sports-broadcast.jpg",
  },
]

export default function PortfolioPage() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(true)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0B1217] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our work with Fortune 500 companies, global brands, and world-class events.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[#4ADE80] text-sm font-medium mb-2">{project.category}</p>
                  <h3 className="text-white text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-md bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0B1217]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Create Something Amazing?</h2>
          <p className="text-gray-400 mb-8">Let's discuss your next event and make it unforgettable.</p>
          <button 
            onClick={() => setQuoteFormOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16A34A] to-[#4ADE80] text-white font-bold px-8 py-4 rounded-lg hover:opacity-90 transition-opacity"
          >
            Start Your Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <StickyCTA visible={showStickyCTA} onStartQuote={() => setQuoteFormOpen(true)} />
      <QuoteForm isOpen={quoteFormOpen} onClose={() => setQuoteFormOpen(false)} />
    </div>
  )
}
