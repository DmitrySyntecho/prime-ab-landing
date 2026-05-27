"use client"

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
import type { ServicePage } from "@/lib/service-pages"

interface ServicePageClientProps {
  service: ServicePage
  slug: string
}

export function ServicePageClient({ service, slug }: ServicePageClientProps) {
  const handleStartQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm", { detail: { serviceSlug: slug } }))
  }

  return (
    <div className="min-h-screen">
      <ServiceHero
        eyebrow={service.eyebrow}
        h1={service.h1}
        subheadline={service.subheadline}
        heroCta={service.heroCta}
        image={service.image}
        onStartQuote={handleStartQuote}
      />

      <TrustedBySection />

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
