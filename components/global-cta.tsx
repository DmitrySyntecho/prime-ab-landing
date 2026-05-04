"use client"

import { useEffect, useState } from "react"
import { QuoteForm } from "./quote-form"
import { StickyCTA } from "./sticky-cta"

export function GlobalCTA() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setOpen(true)
    document.addEventListener("openQuoteForm", handler)
    return () => document.removeEventListener("openQuoteForm", handler)
  }, [])

  return (
    <>
      <StickyCTA onStartQuote={() => setOpen(true)} />
      <QuoteForm isOpen={open} onClose={() => setOpen(false)} />
    </>
  )
}
