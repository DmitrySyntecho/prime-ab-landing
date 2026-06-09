"use client"

import { LandingPage } from "@/components/landing/landing-page"
import { useCity } from "@/lib/city-context"
import { applyCity } from "@/lib/service-pages"
import type { ServicePage } from "@/lib/service-pages"

interface ServicePageClientProps {
  service: ServicePage
  slug: string
}

/**
 * Service pages use the exact same layout as the homepage / landing. The only
 * per-service differences are the hero collage (the photos that used to live in
 * the second block) and the H1 / eyebrow. The old ServiceHero +
 * ServiceDescriptionSection are replaced by the landing hero + video block.
 */
export function ServicePageClient({ service }: ServicePageClientProps) {
  const city = useCity()
  const h1 = city !== "Los Angeles" ? applyCity(service.h1, city) : service.h1

  return (
    <LandingPage
      hero={{
        title: h1,
        accentPhrase: service.eyebrow,
        // Generic category eyebrow so the pill doesn't repeat the H1 verbatim.
        pillLabel: `AV Production in ${city}`,
        collage: service.collage,
      }}
    />
  )
}
