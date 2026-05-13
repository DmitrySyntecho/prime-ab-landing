"use client"

import { useEffect, useState } from "react"
import { QuoteForm } from "./quote-form"
import { StickyCTA } from "./sticky-cta"
import { MobileBottomNav } from "./mobile-bottom-nav"

export function GlobalCTA() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    document.addEventListener("openQuoteForm", handler)
    return () => document.removeEventListener("openQuoteForm", handler)
  }, [])

  return (
    <>
      {/* Desktop+tablet sticky CTA bar (≥md) */}
      <div className="hidden md:block">
        <StickyCTA onStartQuote={() => setOpen(true)} />
      </div>
      {/* Mobile bottom navigation (<md) */}
      <MobileBottomNav onStartQuote={() => setOpen(true)} />
      <QuoteForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
