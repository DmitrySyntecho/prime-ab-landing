"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowRight, Phone, Scale } from "lucide-react"
import { QuoteForm } from "@/components/quote-form"
import { StickyCTA } from "@/components/sticky-cta"
import { TrustedBySection } from "@/components/trusted-by-section"
import { COMPARISONS, NAV_SERVICES, NAV_RESOURCES } from "@/lib/sitemap-data"
import { PHONE_TEL } from "@/lib/contact"

export default function ComparisonPage({ params }: { params: { slug: string } }) {
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const comparison = COMPARISONS.find((c) => c.slug === params.slug)

  if (!comparison) notFound()

  const relatedComparisons = COMPARISONS.filter((c) => c.slug !== comparison.slug)

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#0B1217] text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Comparisons</span>
            <span>/</span>
            <span className="text-white">{comparison.name}</span>
          </nav>
          <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-300 bg-white/10 px-4 py-2 rounded-md mb-6">
            <Scale className="w-4 h-4 text-[#4ADE80]" />
            Comparison Guide
          </span>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-[1.1] text-white">
            {comparison.headline}
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            An objective breakdown from the Prime Line AV team to help you make the right decision for your event.
          </p>
        </div>
      </section>

      <TrustedBySection />

      {/* Content */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Key Differences</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            Understanding the tradeoffs between these options will help you make the right call for your specific event goals, budget, and venue. This guide breaks down the most important factors our clients consider when choosing between these approaches.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Is Right for Your Event?</h2>
          <p className="text-gray-600 leading-relaxed mb-8">
            The right choice depends on your event type, audience size, venue, and production goals. Our team has helped hundreds of clients navigate this exact decision and can give you a recommendation based on your specific situation.
          </p>

          <div className="mt-10 p-6 bg-[#F0FDF4] rounded-xl border border-[#16A34A]/20">
            <p className="text-gray-900 font-semibold mb-3">Not sure which option is right for you?</p>
            <p className="text-gray-600 text-sm mb-4">
              Talk to our team — we&apos;ll give you an honest recommendation based on your event requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setShowQuoteForm(true)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#16A34A] text-white font-semibold rounded-md hover:bg-[#14532D] transition-colors"
              >
                Start Your Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#16A34A] text-[#16A34A] font-semibold rounded-md hover:bg-[#16A34A]/10 transition-colors"
              >
                <Phone className="w-4 h-4" /> (786) 883-9070
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Services</p>
            <h2 className="text-3xl font-bold text-gray-900">Explore Our Services</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {NAV_SERVICES.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="bg-white p-5 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group text-center"
              >
                <span className="text-gray-800 font-medium group-hover:text-[#16A34A] transition-colors text-sm">
                  {svc.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <p className="text-[#4ADE80] font-semibold uppercase tracking-wider text-sm mb-3">Resources</p>
            <h2 className="text-3xl font-bold text-gray-900">Related Planning Guides</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {NAV_RESOURCES.slice(0, 3).map((res) => (
              <Link
                key={res.href}
                href={res.href}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
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

      {/* Other Comparisons */}
      {relatedComparisons.length > 0 && (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">More Comparisons</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {relatedComparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/comparisons/${comp.slug}`}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-[#16A34A] hover:shadow-md transition-all group"
                >
                  <h3 className="font-semibold text-gray-900 group-hover:text-[#16A34A] transition-colors mb-2">
                    {comp.name}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-[#16A34A] font-medium">
                    Read comparison <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 md:py-28 bg-[#0B1217]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Move Forward?</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Our team can help you make the right decision and put together a production plan tailored to your event.
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
      <QuoteForm isOpen={showQuoteForm} serviceName={comparison.name} onClose={() => setShowQuoteForm(false)} />
    </div>
  )
}
