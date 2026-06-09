"use client"

import { useEffect } from "react"
import { LandingPage, AV_PRODUCTION_COLLAGE } from "@/components/landing/landing-page"
import { useCity } from "@/lib/city-context"

export function HomeClient() {
  const city = useCity()

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    const tryScroll = () => {
      const el = document.getElementById(hash)
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
    tryScroll()
    const t = setTimeout(tryScroll, 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <LandingPage
      hero={{
        title: `Full-Service AV Production in ${city}`,
        accentPhrase: "AV Production",
        pillLabel: `AV Production in ${city}`,
        collage: AV_PRODUCTION_COLLAGE,
      }}
    />
  )
}
