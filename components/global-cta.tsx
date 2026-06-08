"use client"

import { useEffect, useState } from "react"
import { LandingQuoteForm } from "./landing/landing-quote-form"
import { StickyCTA } from "./sticky-cta"
import { MobileBottomNav } from "./mobile-bottom-nav"

export function GlobalCTA() {
  const [open, setOpen] = useState(false)
  const [serviceSlug, setServiceSlug] = useState<string | undefined>()
  const [eventTypeId, setEventTypeId] = useState<string | undefined>()

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail
      setServiceSlug(detail?.serviceSlug || undefined)
      setEventTypeId(detail?.eventTypeId || undefined)
      setOpen(true)
    }
    document.addEventListener("openQuoteForm", handler)
    return () => document.removeEventListener("openQuoteForm", handler)
  }, [])

  const openClean = () => {
    setServiceSlug(undefined)
    setEventTypeId(undefined)
    setOpen(true)
  }

  return (
    <>
      {/* Desktop+tablet sticky CTA bar (≥md) */}
      <div className="hidden md:block">
        <StickyCTA onStartQuote={openClean} />
      </div>
      {/* Mobile bottom navigation (<md) */}
      <MobileBottomNav onStartQuote={openClean} />
      <LandingQuoteForm
        isOpen={open}
        onClose={() => {
          setOpen(false)
          document.dispatchEvent(new CustomEvent("quoteFormClosed"))
        }}
      />
    </>
  )
}
