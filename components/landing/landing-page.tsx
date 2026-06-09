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
      {/* First screen: hero fills the viewport, logo carousel pinned to the bottom */}
      <div className="flex flex-col min-h-[calc(100svh-92px)]">
        <div className="flex-1 flex flex-col justify-center">
          <LandingHero data={data} onQuote={handleStartQuote} />
        </div>
        {/* Company logos pinned to the bottom of the first screen (original carousel design) */}
        <TrustedBySection />
      </div>
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
