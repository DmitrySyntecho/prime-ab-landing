import { headers } from "next/headers"
import { resolveLocation } from "@/lib/geo"
import { CityProvider } from "@/lib/city-context"
import { HomeClient } from "./home-client"

function buildRequestUrl(proto: string, host: string, query: string) {
  const base = host ? `${proto}://${host}/` : ""
  const url = query ? `${base}?${query}` : base
  return url.replace(/^https?:\/\/localhost(:\d+)?/, "https://lp.primelineav.com")
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<Record<string, string>>
}) {
  const h = await headers()
  const proto = h.get("x-forwarded-proto") ?? "https"
  const host = h.get("x-forwarded-host") || h.get("host") || ""
  const params = await searchParams
  const query = new URLSearchParams(params).toString()
  const requestUrl = buildRequestUrl(proto, host, query)

  const detectedCity = await resolveLocation(requestUrl)
  const city = detectedCity || "Los Angeles"
  console.log("[geo] requestUrl:", requestUrl)
  console.log("[geo] detectedCity:", detectedCity)
  console.log("[geo] city:", city)

  return (
    <CityProvider city={city}>
      <HomeClient />
    </CityProvider>
  )
}
