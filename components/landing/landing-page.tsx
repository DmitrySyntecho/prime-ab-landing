"use client"

import { TrustedBySection } from "@/components/trusted-by-section"
import { LandingTopBar } from "./landing-topbar"
import { LandingHero } from "./landing-hero"
import { LandingWhyUs } from "./landing-why-us"
import { LandingRecentWork } from "./landing-recent-work"
import { LandingQuoteForm } from "./landing-quote-form"
import { LandingStickyContact } from "./landing-sticky-contact"
import { LandingFooter } from "./landing-footer"
import type { LandingCity } from "@/lib/landing-cities"

export function LandingPage({ data }: { data: LandingCity }) {
  const scrollToQuote = () => {
    document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="min-h-screen">
      <LandingTopBar />
      <LandingHero data={data} onQuote={scrollToQuote} />
      <TrustedBySection />
      <LandingWhyUs />
      <LandingRecentWork />
      <LandingQuoteForm data={data} />
      <LandingFooter />
      <LandingStickyContact />
    </div>
  )
}
