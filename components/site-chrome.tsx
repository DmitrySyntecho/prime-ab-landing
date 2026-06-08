"use client"

import type React from "react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GlobalCTA } from "@/components/global-cta"
import { CTMScanner } from "@/components/ctm-scanner"
import { CallNowPopup } from "@/components/call-now-popup"

/**
 * Wraps the global site chrome and hides it on the standalone A/B landing
 * routes under /lp. Those pages ship their own focused top bar + sticky contact
 * so the conversion flow isn't competing with the full site navigation.
 * CTMScanner stays mounted everywhere so call-tracking still works.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const bare = pathname?.startsWith("/lp")

  if (bare) {
    return (
      <>
        <main>{children}</main>
        <CTMScanner />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <GlobalCTA />
      <CTMScanner />
      <CallNowPopup />
    </>
  )
}
