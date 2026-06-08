/**
 * Config for the A/B landing pages under /lp/[city].
 *
 * Start with Los Angeles. To replicate for another city after approval, add a
 * new entry — the landing, form, and thank-you screen are all data-driven off
 * this object.
 */
export interface LandingCity {
  slug: string
  /** Display city name, e.g. "Los Angeles" */
  city: string
  /** SEO/H1 keyword, e.g. "Full-Service AV Production" */
  keyword: string
}

export const LANDING_CITIES: Record<string, LandingCity> = {
  "los-angeles": {
    slug: "los-angeles",
    city: "Los Angeles",
    keyword: "Full-Service AV Production",
  },
}

export function getLandingCity(slug: string): LandingCity | null {
  return LANDING_CITIES[slug] ?? null
}
