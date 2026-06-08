"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Sparkles, MessageCircle } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import { LANDING_PHONE_DISPLAY, LANDING_PHONE_TEL, whatsappLink, WHATSAPP_DEFAULT_MESSAGE } from "./contact"

function scrollToQuote() {
  document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function LandingStickyContact() {
  const [open, setOpen] = useState(false)
  const [showMobile, setShowMobile] = useState(false)
  const fabRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    let pending = false
    const handle = () => {
      pending = false
      setShowMobile(window.scrollY > 520)
    }
    const onScroll = () => {
      if (!pending) {
        pending = true
        raf = requestAnimationFrame(handle)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    handle()
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => {
      if (!fabRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [open])

  const waHref = whatsappLink(WHATSAPP_DEFAULT_MESSAGE)

  const actions = [
    {
      key: "quote",
      label: "Request a Quote",
      icon: <Sparkles className="w-4 h-4" />,
      onClick: () => {
        setOpen(false)
        scrollToQuote()
      },
      style: { background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)", color: "#fff", boxShadow: "0 8px 24px -6px rgba(255,45,111,0.55)" },
    },
    {
      key: "whatsapp",
      label: "WhatsApp",
      icon: <WhatsAppIcon className="w-4 h-4" />,
      href: waHref,
      style: { background: "rgba(37,211,102,0.12)", color: "#25D366", border: "1px solid rgba(37,211,102,0.25)" },
    },
    {
      key: "call",
      label: LANDING_PHONE_DISPLAY,
      icon: <Phone className="w-4 h-4" />,
      href: `tel:${LANDING_PHONE_TEL}`,
      style: { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.9)", border: "1px solid rgba(255,255,255,0.12)" },
    },
  ]

  return (
    <>
      {/* Desktop widget */}
      <div ref={fabRef} className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end gap-3">
        <div className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`}>
          {actions.map((a) => {
            const inner = (
              <span className="flex items-center gap-2.5 px-5 py-3 rounded-full text-[13px] font-bold whitespace-nowrap backdrop-blur-xl transition-all duration-200 hover:scale-105 active:scale-95" style={{ ...a.style, width: "210px" }}>
                {a.icon}
                {a.label}
              </span>
            )
            return (
              <div key={a.key}>
                {a.href ? (
                  <a href={a.href} target={a.key === "whatsapp" ? "_blank" : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <button type="button" onClick={a.onClick}>
                    {inner}
                  </button>
                )}
              </div>
            )
          })}
        </div>

        <div className="relative">
          {!open && (
            <>
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(255,45,111,0.35)", animationDuration: "1.8s" }} />
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(255,45,111,0.2)", animationDuration: "1.8s", animationDelay: "0.6s" }} />
            </>
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close contact menu" : "Talk to an AV specialist"}
            className="relative flex items-center gap-2.5 h-14 pl-4 pr-5 rounded-full text-white font-bold text-[14px] transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
              boxShadow: open ? "0 8px 32px -6px rgba(255,45,111,0.7), 0 0 0 4px rgba(255,45,111,0.15)" : "0 8px 32px -6px rgba(255,45,111,0.55)",
            }}
          >
            <MessageCircle className="w-5 h-5" />
            <span className="whitespace-nowrap">{open ? "Close" : "Talk to an AV specialist"}</span>
          </button>
        </div>
      </div>

      {/* Mobile bottom bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-50 px-3 pt-2 transition-transform duration-300 ${showMobile ? "translate-y-0" : "translate-y-[140%]"}`}
        style={{ paddingBottom: "calc(0.55rem + env(safe-area-inset-bottom))" }}
      >
        <div className="flex items-stretch gap-2 p-2 rounded-2xl border border-white/10 backdrop-blur-2xl" style={{ background: "rgba(8,10,18,0.9)", boxShadow: "0 -8px 32px -12px rgba(0,0,0,0.8)" }}>
          <button
            onClick={scrollToQuote}
            className="flex-1 inline-flex items-center justify-center gap-1.5 h-[48px] rounded-xl text-white font-extrabold text-[14px]"
            style={{ background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)", boxShadow: "0 12px 28px -8px rgba(255,45,111,0.6)" }}
          >
            <Sparkles className="w-4 h-4" />
            Quote
          </button>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 h-[48px] px-4 rounded-xl font-bold text-[14px]"
            style={{ background: "rgba(37,211,102,0.14)", color: "#25D366", border: "1px solid rgba(37,211,102,0.28)" }}
            aria-label="WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            WhatsApp
          </a>
          <a
            href={`tel:${LANDING_PHONE_TEL}`}
            className="inline-flex items-center justify-center gap-1.5 h-[48px] px-4 rounded-xl font-bold text-[14px] text-white"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
            aria-label="Call"
          >
            <Phone className="w-4 h-4" />
            Call
          </a>
        </div>
      </div>
    </>
  )
}
