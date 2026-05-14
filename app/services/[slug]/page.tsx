"use client"

import { notFound } from "next/navigation"
import { useParams } from "next/navigation"
import { getServicePage } from "@/lib/service-pages"
import { ServiceHero } from "@/components/service-hero"
import { ServiceDescriptionSection } from "@/components/service-description-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AboutUsSection } from "@/components/about-us-section"
import { EventTypesSection } from "@/components/event-types-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { CharitySection } from "@/components/charity-section"
import { RentalCategoriesSection } from "@/components/rental-categories-section"
import { PromoBannersSection } from "@/components/promo-banners-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { FAQSection } from "@/components/faq-section"
import { FIFAPromoBanner } from "@/components/fifa-promo-banner"
import { ContactSpecialistBanner } from "@/components/contact-specialist-banner"

export default function ServicePage() {
  const params = useParams<{ slug: string }>()
  const service = getServicePage(params.slug)
  if (!service) notFound()

  const handleStartQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <div className="min-h-screen">
      <ServiceHero
        eyebrow={service.eyebrow}
        h1={service.h1}
        subheadline={service.subheadline}
        image={service.image}
        onStartQuote={handleStartQuote}
      />

      {/* Pull logos up into the transparent tail of the hero image */}
      <div className="relative z-10 -mt-[180px] md:-mt-[240px] lg:-mt-[280px]">
        <TrustedBySection />
      </div>

      <ServiceDescriptionSection
        heading={service.descriptionHeading}
        description={service.description}
        highlights={service.highlights}
        ctaLabel={service.ctaLabel}
        collage={service.collage}
        collageStats={service.collageStats}
        onStartQuote={handleStartQuote}
      />

      <TestimonialsCarousel />
      <WhyChooseUsSection />
      <CaseStudiesSection />
      <ServicesGridSection />
      <RentalCategoriesSection />
      <FIFAPromoBanner />
      <AboutUsSection />
      <PromoBannersSection />
      <EventTypesSection />
      <CharitySection />
      <FAQSection />
      <ContactSpecialistBanner onStartQuote={handleStartQuote} />
    </div>
  )
}
