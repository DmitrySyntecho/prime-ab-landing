import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LANDING_CITIES, getLandingCity } from "@/lib/landing-cities"
import { LandingPage, AV_PRODUCTION_COLLAGE } from "@/components/landing/landing-page"

export const dynamicParams = false

export function generateStaticParams() {
  return Object.keys(LANDING_CITIES).map((city) => ({ city }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params
  const data = getLandingCity(city)
  if (!data) return {}

  const title = `${data.keyword} in ${data.city} | Prime Line AV`
  const description =
    "Your event runs flawlessly — or we make it right. One team, one contract, zero surprises. Free 3D render + site survey + dedicated Technical Director."

  return {
    title,
    description,
    alternates: { canonical: `/lp/${data.slug}` },
    robots: { index: false, follow: false }, // A/B landing — keep out of the index
    openGraph: { title, description, images: ["/og-image.webp"] },
  }
}

export default async function Page({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params
  const data = getLandingCity(city)
  if (!data) notFound()

  return (
    <LandingPage
      hero={{
        title: `${data.keyword} in ${data.city}`,
        accentPhrase: data.accentPhrase,
        pillLabel: `AV Production in ${data.city}`,
        collage: AV_PRODUCTION_COLLAGE,
      }}
    />
  )
}
