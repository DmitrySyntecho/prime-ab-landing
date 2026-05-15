"use client"

import { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Phone } from "lucide-react"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { QuoteForm } from "@/components/quote-form"
import { StickyCTA } from "@/components/sticky-cta"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  SERVICES,
  INDUSTRIES,
  STATES,
  RESOURCES,
  COMPARISONS,
  PACKAGES,
  NAV_INDUSTRIES,
  NAV_LOCATIONS,
  NAV_RESOURCES,
  NAV_COMPARISONS,
  NAV_PACKAGES,
} from "@/lib/sitemap-data"

export default function ServicePage({ params }: { params: { slug: string } }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const service = SERVICES.find((s) => s.slug === params.slug)

  useEffect(() => {
    const container = document.getElementById("service-vidalytics-container")
    if (!container || container.hasChildNodes()) return
    const embedDiv = document.createElement("div")
    embedDiv.id = "vidalytics_embed_M1gJkHNjodX8sVP6_service"
    embedDiv.style.cssText = "width: 100%; position: relative; padding-top: 56.25%;"
    container.appendChild(embedDiv)
    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `(function (v, i, d, a, l, y, t, c, s) {y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';if (!vsl){vsl=function(u,cb){if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}else{s.onload=function(){vlf=1;cb();};}i.getElementsByTagName("head")[0].appendChild(s);};}vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});})(window, document, 'Vidalytics', 'vidalytics_embed_M1gJkHNjodX8sVP6_service', 'https://fast.vidalytics.com/embeds/o5ZPHiF7/M1gJkHNjodX8sVP6/');`
    container.appendChild(script)
  }, [])

  if (!service) notFound()

  const relatedServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#0B1217] text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/dji-0996.jpeg" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1217]/90 via-[#0B1217]/80 to-[#14532D]/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services/full-av-production" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.name}</span>
          </nav>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-md mb-6">
                <span className="w-2 h-2 bg-[#4ADE80] rounded-md" />
                {service.name}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] text-white">
                {service.headline}
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg">{service.subheadline}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowQuoteForm(true)}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4ADE80] text-[#0B1217] font-semibold rounded-md hover:bg-[#22c55e] transition-colors"
                >
                  Start Your Quote <ArrowRight className="w-5 h-5" />
                </button>
                <a
                  href="tel:7868839070"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-md hover:bg-white/10 transition-colors"
                >
                  <Phone className="w-5 h-5" /> (786) 883-9070
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black">
                <div id="service-vidalytics-container" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustedBySection />
      <TestimonialsCarousel />

      {/* About the Service - Two Column Layout */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Text Content - Left Side */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {service.name === "Stage Rental" && "Stages built for the show — not borrowed from a warehouse"}
                {service.name === "Sound System Rental" && "Premium sound, sized to your room."}
                {service.name === "Lighting Equipment Rental" && "Lighting designed for your show — not pulled off a shelf."}
                {service.name === "Full AV Production" && "A production partner, not a rental house."}
                {service.name === "TV Rental" && "TVs for every event — from a single confidence monitor to a multi-screen wall."}
                {service.name === "Projector & Screen Rental" && "Projection sized to your room — and your idea."}
                {service.name === "Pipe & Drape Rental" && "Pipe and drape, supplied and installed across LA."}
                {service.name === "LED Screen Rental" && "Indoor and outdoor LED walls for any event in Los Angeles"}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.intro}</p>
              
              {/* Bullets */}
              {service.bullets && service.bullets.length > 0 && (
                <ul className="space-y-3">
                  {service.bullets.map((bullet, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4ADE80] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            {/* Image - Right Side */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={
                  service.slug === "stage-rental" ? "/images/services/staging-rigging.webp" :
                  service.slug === "sound-system-rental" ? "/images/services/sound-audio.webp" :
                  service.slug === "lighting-equipment-rental" ? "/images/services/lighting.webp" :
                  service.slug === "full-av-production" ? "/images/services/event-production.webp" :
                  service.slug === "tv-rental" ? "/images/services/video-led.webp" :
                  service.slug === "projector-screen-rental" ? "/images/services/event-production.webp" :
                  service.slug === "pipe-and-drape-rental" ? "/images/services/permanent-av.webp" :
                  service.slug === "led-screen-rental" ? "/images/services/video-led.webp" :
                  "/images/services/event-production.webp"
                }
                alt={service.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Equipment</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Professional Equipment for {service.name}
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We use industry-leading equipment and brands to deliver superior results for every event.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/equipment/led-panels"
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Equipment</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                LED Panels & Displays
              </h3>
              <p className="text-sm text-gray-600 mb-3">Indoor & outdoor solutions from P2 to P10</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                View specs <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/equipment/speakers"
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Equipment</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                PA Systems & Speakers
              </h3>
              <p className="text-sm text-gray-600 mb-3">L-Acoustics, Meyer Sound, QSC, d&b audiotechnik</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                View specs <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/equipment/lighting"
              className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
            >
              <div className="h-40 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-gray-400">Equipment</span>
              </div>
              <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                Intelligent Lighting Rigs
              </h3>
              <p className="text-sm text-gray-600 mb-3">Moving heads, LED uplighting, and DMX systems</p>
              <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                View specs <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our {service.name} Workflow
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              From initial consultation to post-event breakdown, here's how we deliver flawless production.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "Initial Consultation",
                description: "We discuss your event goals, venue, budget, and technical requirements to understand your vision.",
              },
              {
                step: 2,
                title: "Site Assessment & Design",
                description: "Our team visits your venue (or conducts remote survey), assesses acoustics/lighting conditions, and creates a technical design plan.",
              },
              {
                step: 3,
                title: "3D Rendering & Proposal",
                description: "We deliver detailed 3D renderings, equipment specifications, timeline, and a comprehensive proposal.",
              },
              {
                step: 4,
                title: "Client Approval & Booking",
                description: "Upon approval, we book your date, secure equipment, and confirm all technical specifications.",
              },
              {
                step: 5,
                title: "Pre-Event Technical Meeting",
                description: "We conduct a final walkthrough with your team to confirm setup locations, power requirements, and contingency plans.",
              },
              {
                step: 6,
                title: "Setup & Technical Rehearsal",
                description: "Our team arrives early for complete setup, testing, calibration, and rehearsal with your speakers/talent.",
              },
              {
                step: 7,
                title: "Live Event Management",
                description: "Dedicated technicians manage all aspects of the AV during your event, monitoring equipment and responding to any needs.",
              },
              {
                step: 8,
                title: "Post-Event Breakdown",
                description: "Complete equipment breakdown, striking, and professional wrap-up of your event venue.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#4ADE80] text-[#0B1217] font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Common Questions About {service.name}
            </h2>
          </div>
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: `How much does ${service.name} cost?`,
                  answer: `Pricing for ${service.name} varies based on event size, duration, venue complexity, and technical requirements. We provide customized quotes after understanding your specific needs. Contact us for a detailed proposal.`,
                },
                {
                  question: `What's included in your ${service.name} service?`,
                  answer: `Our complete ${service.name} service includes equipment rental, delivery/setup, on-site technical management, operator support, and post-event breakdown. We can also customize packages based on your requirements.`,
                },
                {
                  question: `Can you service outdoor events with ${service.name}?`,
                  answer: `Yes! We have extensive experience with outdoor events. We provide weather-resistant equipment, backup power systems, and contingency planning for all outdoor productions.`,
                },
                {
                  question: `What happens if equipment fails during the event?`,
                  answer: `We carry backup equipment for all critical components. Our technicians perform thorough pre-event testing and carry spare cables, batteries, and hardware to address any issues immediately on-site.`,
                },
                {
                  question: `How far in advance should we book ${service.name}?`,
                  answer: `We recommend booking 4-6 weeks in advance for optimal availability and planning. For urgent requests, contact us immediately — we often accommodate rush bookings on a case-by-case basis.`,
                },
                {
                  question: `Do you provide technical support during the event?`,
                  answer: `Absolutely. We provide dedicated on-site technicians throughout your entire event to manage equipment, troubleshoot issues, and ensure flawless execution.`,
                },
                {
                  question: `Can we see references or past work?`,
                  answer: `Yes! We're happy to provide client references and video samples of past events using ${service.name}. Check our portfolio or contact us for specific examples relevant to your event type.`,
                },
                {
                  question: `Do you work with other vendors and event planners?`,
                  answer: `Absolutely. We coordinate seamlessly with other vendors, venues, catering companies, and event planners. Our team is trained to integrate into existing production workflows.`,
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="bg-white rounded-md border border-gray-200 px-4">
                  <AccordionTrigger className="text-left font-semibold text-gray-900 hover:no-underline text-sm md:text-base">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Industries</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.name} for Every Industry
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NAV_INDUSTRIES.map((ind) => (
              <Link
                key={ind.href}
                href={ind.href}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group text-center"
              >
                <span className="text-gray-800 font-medium group-hover:text-[#16A34A] transition-colors text-sm">
                  {ind.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Nationwide</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {service.name} Nationwide
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              We deploy to events across the country. Select your state to learn more about our coverage.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
            {NAV_LOCATIONS.map((loc) => (
              <Link
                key={loc.href}
                href={loc.href}
                className="bg-gray-50 p-3 rounded-md border border-gray-200 hover:border-[#16A34A] hover:bg-[#16A34A]/5 transition-all text-center"
              >
                <span className="text-gray-700 text-xs font-medium">{loc.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Learn More</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Planning Resources</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {NAV_RESOURCES.slice(0, 3).map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                  {res.label}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Compare</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Making the Right Decision</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {NAV_COMPARISONS.slice(0, 3).map((comp) => (
              <Link
                key={comp.href}
                href={comp.href}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                  {comp.label}
                </h3>
                <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                  Read comparison <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Packages</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready-to-Book Packages</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {NAV_PACKAGES.slice(0, 4).map((pkg) => (
              <Link
                key={pkg.href}
                href={pkg.href}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2 text-sm">
                  {pkg.label}
                </h3>
                <span className="inline-flex items-center gap-1 text-xs text-[#16A34A] font-medium">
                  View package <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="bg-gray-50 p-5 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors text-sm">
                  {svc.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0B1217]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Talk About {service.name}?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Share your event details and our team will follow up with a tailored proposal.
          </p>
          <button
            onClick={() => setShowQuoteForm(true)}
            className="inline-flex items-center gap-2 px-10 py-5 bg-[#4ADE80] text-[#0B1217] font-semibold text-lg rounded-md hover:bg-[#22c55e] transition-colors"
          >
            Start Your Quote <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <StickyCTA visible={true} onStartQuote={() => setShowQuoteForm(true)} />
      <QuoteForm isOpen={showQuoteForm} serviceName={service.name} onClose={() => setShowQuoteForm(false)} />
    </div>
  )
}
