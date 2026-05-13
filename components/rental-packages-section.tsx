"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, Flame } from "lucide-react"

const categories = [
  { id: "corporate", label: "Corporate Events" },
  { id: "experiential", label: "Experiential Marketing" },
  { id: "conferences", label: "Conferences" },
  { id: "trade-shows", label: "Trade Shows" },
  { id: "weddings", label: "Weddings & Social" },
  { id: "fashion", label: "Fashion Shows" },
  { id: "product-launches", label: "Product Launches" },
  { id: "festivals", label: "Festivals" },
]

interface Package {
  title: string
  image: string
  features: string[]
  rentalPrice: number
  originalPrice?: number
  isPromo?: boolean
}

const packages: Record<string, Package[]> = {
  corporate: [
    {
      title: "Meeting Room AV Package",
      image: "/meeting-room-av-setup-projector-screen.jpg",
      features: ["Projector", "Screen", "Audio"],
      rentalPrice: 450,
      originalPrice: 600,
      isPromo: true,
    },
    {
      title: "Conference Audio Package",
      image: "/conference-room-speakers-microphones.jpg",
      features: ["Speakers", "Mics", "Mixer"],
      rentalPrice: 850,
    },
    {
      title: "Executive Presentation Package",
      image: "/executive-boardroom-presentation-display.jpg",
      features: ["4K Display", "Wireless", "Premium"],
      rentalPrice: 1200,
      originalPrice: 1500,
      isPromo: true,
    },
    {
      title: "Breakout Room AV Kit",
      image: "/small-meeting-room-av-equipment.jpg",
      features: ["Compact", "Portable", "Easy Setup"],
      rentalPrice: 295,
    },
    {
      title: "Town Hall AV Package",
      image: "/corporate-town-hall-event-stage.jpg",
      features: ["Large Scale", "Multi-Mic", "Staging"],
      rentalPrice: 2500,
      originalPrice: 3200,
      isPromo: true,
    },
    {
      title: "Hybrid Meeting Kit",
      image: "/hybrid-meeting-camera-streaming-setup.jpg",
      features: ["Streaming", "PTZ Camera", "Encoder"],
      rentalPrice: 1800,
    },
  ],
  experiential: [
    {
      title: "LED Wall Activation Package",
      image: "/led-video-wall-brand-activation.jpg",
      features: ["2.6mm", "Indoor", "COB"],
      rentalPrice: 8400,
      originalPrice: 10500,
      isPromo: true,
    },
    {
      title: "Mobile Content Playback Kit",
      image: "/mobile-av-playback-equipment.jpg",
      features: ["Portable", "SSD Player", "4K"],
      rentalPrice: 650,
    },
    {
      title: "Outdoor Sound & Lighting",
      image: "/outdoor-event-lighting-speakers.jpg",
      features: ["Outdoor", "Weatherproof", "High Power"],
      rentalPrice: 3200,
      originalPrice: 4000,
      isPromo: true,
    },
    {
      title: "Brand Activation Starter Kit",
      image: "/brand-activation-booth-display.jpg",
      features: ["Starter", "Display", "Audio"],
      rentalPrice: 1100,
    },
    {
      title: "Interactive Display Package",
      image: "/interactive-touch-screen-display.jpg",
      features: ["Touch", '55"', "Stand"],
      rentalPrice: 1450,
    },
    {
      title: "Pop-Up Event Kit",
      image: "/pop-up-event-av-equipment.jpg",
      features: ["Portable", "Quick Setup", "Complete"],
      rentalPrice: 750,
    },
  ],
  conferences: [
    {
      title: "Full Conference AV Package",
      image: "/conference-stage-av-setup.jpg",
      features: ["Complete", "Stage", "Screens"],
      rentalPrice: 5500,
      originalPrice: 7000,
      isPromo: true,
    },
    {
      title: "Panel Discussion AV Kit",
      image: "/panel-discussion-stage-microphones.jpg",
      features: ["6 Mics", "Monitors", "Mixer"],
      rentalPrice: 1800,
    },
    {
      title: "Multi-Room AV Package",
      image: "/multi-room-conference-av.jpg",
      features: ["3 Rooms", "Synced", "Control"],
      rentalPrice: 4200,
    },
    {
      title: "All-In-One Production Package",
      image: "/conference-production-setup.jpg",
      features: ["Premium", "Full Crew", "Streaming"],
      rentalPrice: 12000,
      originalPrice: 15000,
      isPromo: true,
    },
    {
      title: "Keynote Stage Package",
      image: "/keynote-stage-led-screen.jpg",
      features: ["Main Stage", "LED Wall", "Teleprompter"],
      rentalPrice: 8500,
    },
    {
      title: "Breakout Session Kit",
      image: "/breakout-session-room-av.jpg",
      features: ["Sessions", "Compact", "Wireless"],
      rentalPrice: 550,
    },
  ],
  "trade-shows": [
    {
      title: "Booth Display Package",
      image: "/trade-show-booth-display.jpg",
      features: ["Display", "Stand", "Media Player"],
      rentalPrice: 800,
      originalPrice: 1000,
      isPromo: true,
    },
    {
      title: "4K TV Display Package",
      image: "/4k-tv-trade-show.jpg",
      features: ["4K Video", '65"', "Mount"],
      rentalPrice: 650,
    },
    {
      title: "Trade Show Audio Kit",
      image: "/trade-show-audio-speakers.jpg",
      features: ["Audio", "Compact", "Clear"],
      rentalPrice: 450,
    },
    {
      title: "Small LED Wall Booth",
      image: "/small-led-wall-booth.jpg",
      features: ["LED", "6x4 ft", "Bright"],
      rentalPrice: 3500,
    },
    {
      title: "Demo Station Package",
      image: "/demo-station-trade-show.jpg",
      features: ["Demo", "Interactive", "Display"],
      rentalPrice: 950,
    },
    {
      title: "Expo Lighting Kit",
      image: "/expo-booth-lighting.jpg",
      features: ["Lighting", "Spotlights", "Ambient"],
      rentalPrice: 550,
    },
  ],
  weddings: [
    {
      title: "Wedding DJ Package",
      image: "/wedding-dj-booth-setup.jpg",
      features: ["Audio", "Subwoofer", "Lights"],
      rentalPrice: 1200,
      originalPrice: 1500,
      isPromo: true,
    },
    {
      title: "Ceremony Sound System",
      image: "/outdoor-wedding-ceremony-sound.jpg",
      features: ["Ceremony", "Wireless", "Elegant"],
      rentalPrice: 650,
    },
    {
      title: "Reception Lighting Package",
      image: "/wedding-reception-uplighting.jpg",
      features: ["Lighting", "Uplights", "Wireless"],
      rentalPrice: 800,
    },
    {
      title: "Photo Booth Setup",
      image: "/wedding-photo-booth.png",
      features: ["Photo", "Props", "Prints"],
      rentalPrice: 950,
    },
    {
      title: "Live Band PA System",
      image: "/live-band-pa-wedding.jpg",
      features: ["Live Music", "Monitors", "Mics"],
      rentalPrice: 1800,
    },
    {
      title: "Projector & Screen Package",
      image: "/wedding-projector-slideshow.jpg",
      features: ["Video", "Screen", "HDMI"],
      rentalPrice: 450,
    },
  ],
  fashion: [
    {
      title: "Runway Lighting Package",
      image: "/fashion-runway-lighting.jpg",
      features: ["Lighting", "Moving Heads", "DMX"],
      rentalPrice: 4500,
      originalPrice: 5500,
      isPromo: true,
    },
    {
      title: "Fashion Show Audio Kit",
      image: "/fashion-show-sound-system.jpg",
      features: ["Audio", "Line Array", "Sub"],
      rentalPrice: 2800,
    },
    {
      title: "Backstage Monitoring Package",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Monitors", "Live Feed", "Cues"],
      rentalPrice: 1200,
    },
    {
      title: "Projection Package",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Projection", "10K Lumen", "Wide"],
      rentalPrice: 2200,
    },
    {
      title: "Front Row Camera Kit",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Video", "4K", "Multi-Cam"],
      rentalPrice: 3500,
    },
    {
      title: "VIP Lounge AV",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Lounge", "Ambient", "Elegant"],
      rentalPrice: 950,
    },
  ],
  "product-launches": [
    {
      title: "Launch Stage Package",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Stage", "LED", "Dramatic"],
      rentalPrice: 8500,
      originalPrice: 10500,
      isPromo: true,
    },
    {
      title: "Demo Display Kit",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Demo", "Touch", "4K"],
      rentalPrice: 1800,
    },
    {
      title: "Press Conference AV",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Press", "Multi-Mic", "Recording"],
      rentalPrice: 2500,
    },
    {
      title: "Live Stream Package",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Streaming", "Multi-Cam", "Graphics"],
      rentalPrice: 4500,
    },
    {
      title: "Interactive Reveal Kit",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Interactive", "LED Curtain", "FX"],
      rentalPrice: 6500,
    },
    {
      title: "VIP Preview Setup",
      image: "/placeholder.svg?height=200&width=300",
      features: ["VIP", "Intimate", "Premium"],
      rentalPrice: 3200,
    },
  ],
  festivals: [
    {
      title: "Main Stage Sound System",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Main Stage", "Line Array", "Subs"],
      rentalPrice: 25000,
      originalPrice: 32000,
      isPromo: true,
    },
    {
      title: "Festival Lighting Rig",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Lighting", "Moving", "Truss"],
      rentalPrice: 18000,
    },
    {
      title: "Outdoor LED Wall",
      image: "/placeholder.svg?height=200&width=300",
      features: ["LED", "Outdoor", "Bright"],
      rentalPrice: 15000,
    },
    {
      title: "Secondary Stage Kit",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Stage 2", "Complete", "Mid-Size"],
      rentalPrice: 12000,
    },
    {
      title: "Silent Disco Package",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Silent", "500 Units", "3 Channel"],
      rentalPrice: 3500,
    },
    {
      title: "Generator & Power Kit",
      image: "/placeholder.svg?height=200&width=300",
      features: ["Power", "100kW", "Distro"],
      rentalPrice: 4500,
    },
  ],
}

export function RentalPackagesSection() {
  const [activeTab, setActiveTab] = useState("corporate")
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const activePackages = packages[activeTab] || packages.corporate

  const calculateSavings = (original: number, current: number) => {
    const savings = original - current
    const percent = Math.round((savings / original) * 100)
    return { savings, percent }
  }

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mb-8">
          <p className="text-[#FF2D6F] font-medium text-sm tracking-wide uppercase mb-3">Rental Packages</p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Full AV Production or Simple Equipment Rentals — We've Got You Covered
          </h2>
          <p className="text-gray-600">
            Whether you need complete AV production or just want to rent equipment, we offer ready-made packages for the
            most popular event types. Browse our top rental packages below or explore full production support.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max pb-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all whitespace-nowrap ${
                  activeTab === category.id
                    ? "bg-[#0c2234] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Slider */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-md shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-md shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors border border-gray-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {activePackages.map((pkg, index) => (
              <Link
                href={`/rentals/${activeTab}/${pkg.title.toLowerCase().replace(/\s+/g, "-")}`}
                key={`${activeTab}-${index}`}
                className="flex-shrink-0 w-[300px] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-200 hover:border-[#FF5E3A] group"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* SALE Badge */}
                  {pkg.isPromo && (
                    <div className="absolute bottom-3 left-3 bg-red-500 text-white px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1.5 shadow-md">
                      <Flame className="w-4 h-4" />
                      SALE
                    </div>
                  )}
                  {/* Brand Badge */}
                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-700">
                    PRIMELINEAV.COM
                  </div>
                </div>

                <div className="p-4">
                  {/* Title */}
                  <h3 className="font-bold text-gray-900 text-lg mb-3 line-clamp-2 leading-tight group-hover:text-[#FF5E3A] transition-colors">
                    {pkg.title}
                  </h3>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-[#FF2D6F]/10 text-[#FF5E3A] rounded-md border border-[#FF2D6F]/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Rental Price:</p>
                      <p className="text-2xl font-bold text-gray-900">
                        ${pkg.rentalPrice.toLocaleString()}
                        <span className="text-sm font-normal text-gray-500">.00</span>
                      </p>
                    </div>
                    {pkg.originalPrice && (
                      <div className="text-right">
                        <p className="text-sm text-gray-400 line-through">
                          Was ${pkg.originalPrice.toLocaleString()}.00
                        </p>
                        <p className="text-sm font-semibold text-green-600">
                          SAVE ${calculateSavings(pkg.originalPrice, pkg.rentalPrice).savings.toLocaleString()} (
                          {calculateSavings(pkg.originalPrice, pkg.rentalPrice).percent}%)
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* View More Link */}
        <div className="mt-8 flex justify-start">
          <Link
            href={`/rentals/${activeTab}`}
            className="inline-flex items-center gap-2 text-[#FF2D6F] font-medium hover:underline"
          >
            View All {categories.find((c) => c.id === activeTab)?.label} Packages
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
