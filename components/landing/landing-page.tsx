"use client"

import { LandingHero } from "./landing-hero"
import { LandingVideo } from "./landing-video"
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
 * A/B variant of the landing page. Same structure and blocks as the main
 * homepage — only the hero (rotating 3-of-6 collage) and a dedicated video
 * block as block 2 differ. Header, footer, and the global quote flow are
 * inherited from the root layout.
 */
export function LandingPage({ data }: { data: LandingCity }) {
  const handleStartQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <div className="min-h-screen">
      <LandingHero data={data} />
      <LandingVideo />
      <TrustedBySection />
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
