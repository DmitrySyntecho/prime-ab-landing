"use client"

import { useState } from "react"
import { StickyCTA } from "@/components/sticky-cta"
import { QuoteForm } from "@/components/quote-form"
import { ArrowRight, Users, Award, MapPin, Clock } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, value: "500+", label: "Events Produced" },
  { icon: Award, value: "50+", label: "Brand Partners" },
  { icon: MapPin, value: "2", label: "Office Locations" },
  { icon: Clock, value: "24/7", label: "Support Available" },
]

const team = [
  {
    name: "Production Team",
    role: "Technical Directors, Audio Engineers, Lighting Designers",
    image: "/professional-production-team.jpg",
  },
  {
    name: "Creative Team",
    role: "Event Designers, 3D Artists, Content Creators",
    image: "/creative-design-team.jpg",
  },
  {
    name: "Operations Team",
    role: "Project Managers, Logistics Coordinators",
    image: "/operations-logistics-team.jpg",
  },
]

export default function AboutPage() {
  const [quoteFormOpen, setQuoteFormOpen] = useState(false)
  const [showStickyCTA, setShowStickyCTA] = useState(true)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-[#0B1217] py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                The AV Partner Brands <span className="text-[#4ADE80]">Trust</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Full AV production for corporate events, brand activations, experiential marketing, and studio work.
                Based in Los Angeles and Fort Lauderdale, serving clients nationwide.
              </p>
              <button 
                onClick={() => setQuoteFormOpen(true)}
                className="inline-flex items-center gap-2 bg-[#4ADE80] text-[#0B1217] font-bold px-8 py-4 rounded-lg hover:bg-[#4ADE80]/90 transition-colors"
              >
                Work With Us <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image src="/av-production-team-working-on-event.jpg" alt="Prime Line AV Team" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-[#16A34A] mx-auto mb-4" />
                <p className="text-4xl font-bold text-[#0B1217] mb-2">{stat.value}</p>
                <p className="text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1217] mb-8 text-center">Our Story</h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Prime Line AV was founded with a simple mission: to provide world-class audiovisual production services
              that help brands create unforgettable experiences. What started as a small rental company has grown into a
              full-service production house trusted by Fortune 500 companies and global brands.
            </p>
            <p>
              Our team brings together decades of experience in live events, broadcast production, and experiential
              marketing. We understand that every event is unique, which is why we take a consultative approach to every
              project—listening to your goals, understanding your audience, and designing solutions that deliver
              results.
            </p>
            <p>
              From intimate corporate meetings to large-scale festivals, we bring the same level of professionalism,
              creativity, and technical excellence to every event we produce. Our commitment to quality has earned us
              long-term partnerships with some of the world's most recognized brands.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0B1217] mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative w-48 h-48 mx-auto rounded-md overflow-hidden mb-6">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#0B1217] mb-2">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-[#0B1217]">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">Our Locations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Los Angeles</h3>
              <p className="text-gray-400 mb-4">West Coast Headquarters</p>
              <p className="text-gray-300">Serving California, Nevada, Arizona, and the Western United States</p>
            </div>
            <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-2">Fort Lauderdale</h3>
              <p className="text-gray-400 mb-4">5553 Anglers Ave #101, FL 33312</p>
              <p className="text-gray-300">Serving Florida, the Southeast, and nationwide events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#16A34A] to-[#4ADE80]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-white/80 mb-8">Let's create something amazing for your next event.</p>
          <button 
            onClick={() => setQuoteFormOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-[#0B1217] font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
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
