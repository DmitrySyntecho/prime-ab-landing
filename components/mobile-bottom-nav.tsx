"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Layers,
  Sparkles,
  Phone,
  Box,
  Volume2,
  Lightbulb,
  Monitor,
  Tv,
  Projector,
  Columns,
  X,
  ArrowRight,
} from "lucide-react"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_HREF } from "@/lib/contact"

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const SERVICES = [
  { label: "Stage Rental", href: "/services/stage-rental", icon: Box },
  { label: "Sound System Rental", href: "/services/sound-system-rental", icon: Volume2 },
  { label: "Lighting Equipment Rental", href: "/services/lighting-rental", icon: Lightbulb },
  { label: "Full AV Production", href: "/services/full-av-production", icon: Layers },
  { label: "TV Rental", href: "/services/tv-rental", icon: Tv },
  { label: "Projector & Screen Rental", href: "/services/projector-screen-rental", icon: Projector },
  { label: "Pipe & Drape Rental", href: "/services/pipe-drape-rental", icon: Columns },
  { label: "LED Screen Rental", href: "/services/led-screen-rental", icon: Monitor },
]

interface MobileBottomNavProps {
  onStartQuote: () => void
}

export function MobileBottomNav({ onStartQuote }: MobileBottomNavProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const [servicesOpen, setServicesOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [pastHero, setPastHero] = useState(false)

  // Show nav only after scrolling past hero section
  useEffect(() => {
    const check = () => setPastHero(window.scrollY > window.innerHeight * 0.75)
    check()
    window.addEventListener("scroll", check, { passive: true })
    return () => window.removeEventListener("scroll", check)
  }, [])

  // Close both panels when navigating
  useEffect(() => {
    setServicesOpen(false)
    setContactOpen(false)
  }, [pathname])

  // Escape key closes whichever panel is open
  useEffect(() => {
    if (!servicesOpen && !contactOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setServicesOpen(false); setContactOpen(false) }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [servicesOpen, contactOpen])

  // Close panels on outside tap
  const wrapRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!servicesOpen && !contactOpen) return
    const handler = (e: TouchEvent | MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
        setContactOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    document.addEventListener("touchstart", handler)
    return () => {
      document.removeEventListener("mousedown", handler)
      document.removeEventListener("touchstart", handler)
    }
  }, [servicesOpen, contactOpen])

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"
  const railBg = isFifa ? "rgba(10,15,31,0.94)" : "rgba(10,8,24,0.94)"
  const quoteShadow = isFifa
    ? "0 12px 30px -8px rgba(230,29,37,0.6), inset 0 1px 0 rgba(255,255,255,0.28)"
    : "0 12px 30px -8px rgba(255,45,111,0.6), inset 0 1px 0 rgba(255,255,255,0.30)"

  const isServicesActive = pathname?.startsWith("/services/") || servicesOpen

  return (
    <div
      ref={wrapRef}
      className="md:hidden fixed left-3 right-3 z-50 transition-all duration-300 ease-out"
      style={{
        bottom: "max(env(safe-area-inset-bottom), 12px)",
        opacity: pastHero ? 1 : 0,
        transform: pastHero ? "translateY(0)" : "translateY(16px)",
        pointerEvents: pastHero ? "auto" : "none",
      }}
    >
      <div className="relative flex items-stretch gap-2.5">
        {/* Contact panel — floats above the buttons, aligned to the right */}
        <div
          className={`absolute bottom-full right-0 mb-2.5 w-[calc(100%-4.5rem)] origin-bottom transition-all duration-300 ease-out ${
            contactOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="rounded-2xl border border-white/10 backdrop-blur-2xl p-3"
            style={{ background: railBg, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="flex flex-col gap-2">
              {/* Request a Quote */}
              <button
                onClick={() => { setContactOpen(false); onStartQuote() }}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left text-white font-bold transition-transform active:scale-[0.99]"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                  boxShadow: quoteShadow,
                }}
              >
                <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.18)" }}>
                  <Sparkles className="w-5 h-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] leading-tight">Request a Quote</span>
                  <span className="text-[12px] font-medium text-white/80">Get a tailored proposal</span>
                </span>
              </button>

              {/* WhatsApp */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setContactOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-transform active:scale-[0.99]"
                style={{ background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.30)", color: "#25D366" }}
              >
                <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(37,211,102,0.18)" }}>
                  <WhatsAppGlyph className="w-5 h-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] leading-tight font-bold">WhatsApp</span>
                  <span className="text-[12px] font-medium text-[#25D366]/80">Chat with us anytime</span>
                </span>
              </a>

              {/* Call */}
              <a
                href={PHONE_TEL}
                suppressHydrationWarning
                onClick={() => setContactOpen(false)}
                className="flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-transform active:scale-[0.99]"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.92)" }}
              >
                <span className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(255,255,255,0.10)" }}>
                  <Phone className="w-5 h-5" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] leading-tight font-bold">Call us</span>
                  <span suppressHydrationWarning className="text-[12px] font-medium text-white/55">{PHONE_DISPLAY}</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Services panel — full width, floats above the buttons */}
        <div
          className={`absolute bottom-full left-0 right-0 mb-2.5 origin-bottom transition-all duration-300 ease-out ${
            servicesOpen
              ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
              : "opacity-0 translate-y-3 scale-95 pointer-events-none"
          }`}
        >
          <div
            className="rounded-2xl border border-white/10 backdrop-blur-2xl overflow-hidden"
            style={{ background: railBg, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.06)" }}
          >
            <div className="flex items-center justify-between px-4 pt-3.5 pb-2">
              <span className="text-[10px] font-extrabold tracking-[0.16em] uppercase" style={{ color: accent }}>Services</span>
              <button onClick={() => setServicesOpen(false)} className="text-white/40 hover:text-white/80 transition-colors p-1" aria-label="Close services">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="px-2 pb-3 flex flex-col gap-0.5">
              {SERVICES.map(({ label, href, icon: Icon }) => {
                const active = pathname === href
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all"
                    style={{ background: active ? `${accent}18` : "transparent", color: active ? accent : "rgba(255,255,255,0.75)" }}
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-lg shrink-0" style={{ background: active ? `${accent}22` : "rgba(255,255,255,0.05)" }}>
                      <Icon className="w-3.5 h-3.5" strokeWidth={2.2} />
                    </span>
                    <span className="text-[13px] font-semibold leading-tight">{label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        {/* Services — square (left) */}
        <button
          onClick={() => { setContactOpen(false); setServicesOpen((v) => !v) }}
          className="flex items-center justify-center w-14 h-14 shrink-0 rounded-2xl border backdrop-blur-2xl transition-transform active:scale-95"
          style={{
            background: railBg,
            borderColor: isServicesActive ? `${accent}66` : "rgba(255,255,255,0.12)",
            color: isServicesActive ? accent : "rgba(255,255,255,0.8)",
            boxShadow: "0 12px 30px -10px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
          aria-label="Services menu"
          aria-expanded={servicesOpen}
        >
          {servicesOpen ? <X className="w-6 h-6" strokeWidth={2.2} /> : <Layers className="w-6 h-6" strokeWidth={2.2} />}
        </button>

        {/* Get a Quote — matches the hero CTA; opens the contact panel */}
        <button
          onClick={() => { setServicesOpen(false); setContactOpen((v) => !v) }}
          className="flex-1 inline-flex flex-col items-center justify-center gap-0.5 h-14 rounded-2xl text-white transition-transform active:scale-[0.98]"
          style={{ background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`, boxShadow: quoteShadow }}
          aria-label="Get Your Custom Quote"
          aria-expanded={contactOpen}
        >
          <span className="inline-flex items-center gap-2 font-extrabold text-[15px] tracking-[0.01em]">
            Get Your Custom Quote
            {contactOpen ? <X className="w-4 h-4" strokeWidth={2.4} /> : <ArrowRight className="w-4 h-4" />}
          </span>
          <span className="text-[10px] font-semibold text-white/85 leading-tight">Delivered in under 4 hours — not days.</span>
        </button>
      </div>
    </div>
  )
}
