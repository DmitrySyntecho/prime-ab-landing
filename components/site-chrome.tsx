"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlobalCTA } from "@/components/global-cta"

/**
 * Wraps the global site chrome (Header / Footer / GlobalCTA) and hides it on the
 * standalone A/B landing routes under /lp. Those pages ship their own focused
 * header + sticky contact so the conversion flow isn't competing with the full
 * site navigation.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname?.startsWith("/lp")

  if (bare) {
    return <main>{children}</main>
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <GlobalCTA />
    </>
  )
}
