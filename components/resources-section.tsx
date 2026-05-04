import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const resources = [
  {
    title: "How to Choose the Right LED Wall for Your Event",
    description: "A complete guide to pixel pitch, brightness, and sizing for indoor and outdoor events.",
    image: "/led-video-wall-event-setup.jpg",
    slug: "choose-right-led-wall",
  },
  {
    title: "AV Checklist for Corporate Events",
    description: "Essential audio, video, and lighting items every corporate event planner needs.",
    image: "/corporate-event-av-setup-checklist.jpg",
    slug: "av-checklist-corporate-events",
  },
  {
    title: "Lighting Basics Every Event Producer Should Know",
    description: "From uplighting to intelligent fixtures—master the fundamentals of event lighting.",
    image: "/event-lighting-design-stage.jpg",
    slug: "lighting-basics-event-producers",
  },
  {
    title: "How to Budget for AV in Los Angeles",
    description: "Tips for allocating your AV budget wisely in the competitive LA event market.",
    image: "/event-budget-planning-calculator.jpg",
    slug: "budget-av-los-angeles",
  },
  {
    title: "What Event Planners Should Know About Staging",
    description: "Stage types, weight limits, and design considerations for safe and stunning setups.",
    image: "/event-stage-construction-setup.jpg",
    slug: "staging-guide-event-planners",
  },
  {
    title: "Experiential Marketing AV: What Makes It Successful",
    description: "How immersive AV technology drives engagement at brand activations.",
    image: "/experiential-marketing-brand-activation.jpg",
    slug: "experiential-marketing-av",
  },
]

export function ResourcesSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#4ADE80] font-semibold text-sm uppercase tracking-wider mb-3">Resources</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Event Production Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and educational guides for event planners, producers, and marketing teams.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              href={`/resources/${resource.slug}`}
              className="group bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#4ADE80] hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={resource.image || "/placeholder.svg"}
                  alt={resource.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-[#16A34A] transition-colors line-clamp-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{resource.description}</p>
                <span className="inline-flex items-center text-[#16A34A] text-sm font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3B82F6] to-[#2563EB] text-white px-6 py-3 rounded-md font-semibold hover:from-[#2563EB] hover:to-[#1D4ED8] transition-all shadow-lg"
          >
            Explore All Resources
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
