import { headers } from "next/headers"
import { notFound } from "next/navigation"
import { getServicePage } from "@/lib/service-pages"
import { CityProvider } from "@/lib/city-context"
import { ServicePageClient } from "./service-page-client"

export default async function ServicePage({
  params,
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
    city = h.get("x-detected-city") || "Los Angeles"
  }

  return (
    <CityProvider city={city}>
      <ServicePageClient service={service} slug={slug} />
    </CityProvider>
  )
}
