import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const eventTypes = [
  {
    title: "Corporate Event",
    tag: "Corporate",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=900&q=80",
    href: "/events/corporate-events",
  },
  {
    title: "Experiential Marketing",
    tag: "Experiential",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    href: "/events/experiential-marketing",
  },
  {
    title: "Brand Activation",
    tag: "Activation",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    href: "/events/activations",
  },
  {
    title: "Fashion Show",
    tag: "Fashion",
    image:
      "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=900&q=80",
    href: "/events/fashion-shows",
  },
  {
    title: "Trade Show / Expo",
    tag: "Trade Show",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    href: "/events/trade-shows",
  },
  {
    title: "Conference",
    tag: "Conference",
    image:
      "https://images.unsplash.com/photo-1559223607-a43c990c692c?auto=format&fit=crop&w=900&q=80",
    href: "/events/conferences",
  },
  {
    title: "Festival",
    tag: "Festival",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=900&q=80",
    href: "/events/festivals",
  },
  {
    title: "Private / Social Event",
    tag: "Private",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=80",
    href: "/events/weddings",
  },
  {
    title: "Product Launch",
    tag: "Launch",
    image:
      "https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=900&q=80",
    href: "/events/activations",
  },
  {
    title: "Sports Event",
    tag: "Sports",
    image:
      "https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?auto=format&fit=crop&w=900&q=80",
    href: "/events/festivals",
  },
  {
    title: "Studio / Film Production",
    tag: "Production",
    image:
      "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=900&q=80",
    href: "/events/film-production",
  },
  {
    title: "Award Show / Gala",
    tag: "Gala",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
    href: "/events/galas",
  },
]

export function EventTypesSection() {
  return (
    <section id="events" className="py-24 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="ds-pill mb-5">
            <span className="dot" />
            Event Types
          </span>
          <h2 className="text-[32px] md:text-[44px] lg:text-[50px] font-extrabold tracking-[-0.025em] leading-[1.05] text-white mb-4">
            Every Format. <span className="ds-accent-text">Every Industry.</span>
          </h2>
          <p className="text-white/55 text-[16px] md:text-[17px]">
            We partner with event producers, planners, and marketing agencies to deliver AV support across every event
            format and industry.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {eventTypes.map((event) => (
            <Link
              key={event.title}
              href={event.href}
              className="group relative aspect-[4/5] rounded-[18px] overflow-hidden border border-white/[0.08] cursor-pointer transition-all duration-500 hover:-translate-y-1 hover:border-[#4ADE80]/30"
            >
              <img
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03070a]/95 via-[#03070a]/55 to-[#03070a]/15 transition-all duration-500 group-hover:from-[#14532D]/92 group-hover:via-[#03070a]/55" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="inline-block px-2.5 py-1 rounded-md bg-[#4ADE80] text-[#03070a] text-[10px] font-extrabold tracking-[0.08em] uppercase mb-2.5">
                  {event.tag}
                </span>
                <h3 className="text-white text-[15px] md:text-[16px] font-bold leading-tight">{event.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-1.5 text-white hover:text-[#4ADE80] transition-colors font-semibold text-sm"
          >
            View All Event Types
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
