import { Metadata } from "next"
import Link from "next/link"
import { MapPin, ChevronRight } from "lucide-react"
import { STATES } from "@/lib/sitemap-data"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "AV Production Locations | Nationwide Event AV Services | Prime Line AV",
  description:
    "Prime Line AV provides professional AV production services across the United States. Find AV rental and production services in your city.",
}

export default function LocationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#0B1217]">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#4ADE80]/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#4ADE80] text-sm font-medium mb-4">
                <MapPin className="w-4 h-4" />
                <span>NATIONWIDE COVERAGE</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                AV Production Services{" "}
                <span className="text-[#4ADE80]">Nationwide</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Professional AV production, LED wall rental, sound systems, and event lighting 
                available in major markets across the United States. Local expertise, national reach.
              </p>
            </div>
          </div>
        </section>

        {/* States Grid */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
              Select Your State
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {STATES.map((state) => (
                <Link
                  key={state.slug}
                  href={`/locations/${state.slug.replace("-av-production", "")}`}
                  className="group bg-[#111a22] border border-gray-800 rounded-lg p-5 hover:border-[#4ADE80]/50 hover:bg-[#0f1a22] transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-white font-semibold group-hover:text-[#4ADE80] transition-colors">
                        {state.state}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {state.cities?.length || 0} cities
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#4ADE80] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Services Available */}
        <section className="py-16 md:py-24 bg-[#0a1015]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Services Available in Every Market
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "AV Production", href: "/services/av-production", desc: "Full-service event production" },
                { name: "LED Wall Rental", href: "/services/led-wall-rental", desc: "Indoor & outdoor LED screens" },
                { name: "Sound System Rental", href: "/services/sound-system-rental", desc: "Professional event audio" },
                { name: "Event Lighting", href: "/services/event-lighting", desc: "Lighting design & programming" },
                { name: "Staging & Truss", href: "/services/staging-and-truss", desc: "Custom stages & rigging" },
                { name: "Pipe & Drape", href: "/services/pipe-and-drape-rental", desc: "Backdrops & room dividers" },
                { name: "Live Streaming", href: "/services/live-streaming", desc: "Hybrid event production" },
                { name: "Video Production", href: "/services/video-production", desc: "Event video & content" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-[#111a22] border border-gray-800 rounded-lg p-5 hover:border-[#4ADE80]/50 transition-all"
                >
                  <h3 className="text-white font-semibold group-hover:text-[#4ADE80] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {"Don't See Your City?"}
            </h2>
            <p className="text-gray-400 mb-8">
              We provide AV production services nationwide. Contact us for a custom quote 
              for your event location.
            </p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-[#4ADE80] text-[#0B1217] font-semibold px-8 py-4 rounded-md hover:bg-[#22c55e] transition-colors"
            >
              Get a Quote
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
