import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { getServicePage } from "@/lib/service-pages"
import { resolveLocation } from "@/lib/geo"
import { CityProvider } from "@/lib/city-context"
import { ServicePageClient } from "./service-page-client"

function buildRequestUrl(proto: string, host: string, slug: string, query: string) {
  const base = host ? `${proto}://${host}/services/${slug}` : ""
  const url = query ? `${base}?${query}` : base
  return url.replace(/^https?:\/\/localhost(:\d+)?/, "https://lp.primelineav.com")
}

export default async function ServicePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: Promise<Record<string, string>>
}) {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) notFound()

  let city: string
  if (slug.endsWith("-miami")) {
    city = "Miami"
  } else if (slug.endsWith("-orlando")) {
    city = "Orlando"
  } else {
    const h = await headers()
    const proto = h.get("x-forwarded-proto") ?? "https"
    const host = h.get("x-forwarded-host") || h.get("host") || ""
    const p = await searchParams
    const query = new URLSearchParams(p).toString()
    const requestUrl = buildRequestUrl(proto, host, slug, query)
    const detected = await resolveLocation(requestUrl)
    city = detected || "Los Angeles"
  }

  return (
    <CityProvider city={city}>
      <ServicePageClient service={service} slug={slug} />
    </CityProvider>
  )
}
