"use client"

import { HeroSection } from "@/components/hero-section"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { AboutUsSection } from "@/components/about-us-section"
import { EventTypesSection } from "@/components/event-types-section"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { TikTokSummitShowcase } from "@/components/tiktok-summit-showcase"
import { CharitySection } from "@/components/charity-section"
import { RentalCategoriesSection } from "@/components/rental-categories-section"
import { PromoBannersSection } from "@/components/promo-banners-section"
import { ServicesGridSection } from "@/components/services-grid-section"
import { FAQSection } from "@/components/faq-section"
import { FIFAPromoBanner } from "@/components/fifa-promo-banner"
import { ContactSpecialistBanner } from "@/components/contact-specialist-banner"

export default function Home() {
  const handleStartQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <div className="min-h-screen">
      <HeroSection onStartQuote={handleStartQuote} />
      <TrustedBySection />
      <TestimonialsCarousel />
      <WhyChooseUsSection />
      <TikTokSummitShowcase />
      <ServicesGridSection />
      <RentalCategoriesSection />
      <FIFAPromoBanner />
      <AboutUsSection />
      <PromoBannersSection />
      <EventTypesSection />
      <CaseStudiesSection />
      <CharitySection />
      <FAQSection />
      <ContactSpecialistBanner onStartQuote={handleStartQuote} />
    </div>
  )
}
