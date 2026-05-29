import { headers } from "next/headers"
import { CityProvider } from "@/lib/city-context"
import { HomeClient } from "./home-client"

export default async function Home() {
  const h = await headers()
  const city = h.get("x-detected-city") || "Los Angeles"

  return (
    <CityProvider city={city}>
      <HomeClient />
    </CityProvider>
  )
}
