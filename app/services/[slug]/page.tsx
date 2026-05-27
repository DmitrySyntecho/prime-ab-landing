import { notFound } from "next/navigation"
import { getServicePage } from "@/lib/service-pages"
import { CityProvider } from "@/lib/city-context"
import { ServicePageClient } from "./service-page-client"

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServicePage(slug)
  if (!service) notFound()

  // For Miami / Orlando dedicated pages, override the layout-level geo city
  const cityOverride = slug.endsWith("-miami")
    ? "Miami"
    : slug.endsWith("-orlando")
      ? "Orlando"
      : null

  const content = <ServicePageClient service={service} slug={slug} />

  return cityOverride ? (
    <CityProvider city={cityOverride}>{content}</CityProvider>
  ) : (
    content
  )
}
