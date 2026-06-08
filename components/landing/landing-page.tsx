"use client"

import { LandingHero } from "./landing-hero"
import { LandingWhyUs } from "./landing-why-us"
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
import type { LandingCity } from "@/lib/landing-cities"

/**
 * A/B variant landing. Same global chrome (Header/Footer/GlobalCTA) and the same
 * full set of homepage blocks — nothing removed. The only A/B changes are:
 *   1) Hero replaced with the animated 3-photo collage hero + A/B copy.
 *   2) A video + "Why Us" block (the first-prompt Block 2) as the second block.
 *   3) The 3-step quote form added after the Recent Work block.
 * The logo carousel (TrustedBySection) and Recent Work (CaseStudiesSection) keep
 * their original site designs.
 */
export function LandingPage({ data }: { data: LandingCity }) {
  const handleStartQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <div className="min-h-screen">
      <LandingHero data={data} onQuote={handleStartQuote} />
      {/* Company logos at the bottom of the first block (original carousel design) */}
      <TrustedBySection />
      <LandingWhyUs />
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
