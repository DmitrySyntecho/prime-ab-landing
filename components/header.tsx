"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Menu, X, ArrowRight, MessageCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { PromoTopBanner } from "./promo-top-banner"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/#about" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  // Past the top: used to collapse the promo banner on desktop (header itself stays)
  const [scrolled, setScrolled] = useState(false)
  const lastY = useRef(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")

  // Hide ONLY when actively scrolling down. Show on scroll-up. After scroll-up,
  // stay visible while idle (don't auto-hide). Always visible near the top.
  useEffect(() => {
    let raf = 0
    let pending = false
    const handle = () => {
      pending = false
      const y = window.scrollY
      const delta = y - lastY.current

      setScrolled(y > 24)

      if (y < 80) {
        setHidden(false)
      } else if (delta > 4) {
        // scrolling down → hide
        setHidden(true)
        if (mobileMenuOpen) setMobileMenuOpen(false)
        setContactOpen(false)
      } else if (delta < -4) {
        // scrolling up → show
        setHidden(false)
      }
      // delta within ±4 = essentially idle/jitter → keep current state

      lastY.current = y
    }
    const onScroll = () => {
      if (!pending) {
        pending = true
        raf = requestAnimationFrame(handle)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [mobileMenuOpen])

  // Theme tokens swap based on route. Main = magenta/coral, FIFA = Mexican tricolor (red CTA).
  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"
  const accentText = isFifa ? "text-[#E61D25]" : "text-[#FF2D6F]"
  const accentHoverBg = isFifa ? "hover:bg-[#E61D25]/10" : "hover:bg-[#FF2D6F]/10"
  const ctaShadow = isFifa
    ? "0 8px 22px -6px rgba(230,29,37,0.55), inset 0 1px 0 rgba(255,255,255,0.25)"
    : "0 8px 22px -6px rgba(255,45,111,0.45), inset 0 1px 0 rgba(255,255,255,0.30)"
  const ctaTextColor = "text-white"
  const headerBg = isFifa ? "rgba(10, 15, 31, 0.62)" : "rgba(10, 8, 24, 0.62)"

  const openQuote = () => {
    setMobileMenuOpen(false)
    setContactOpen(false)
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  // Close the mobile contact popover when tapping outside of it.
  // Use "click" (not pointerdown) so the opening tap can never self-close it,
  // and the [data-mobile-contact] guard keeps taps on the button/popover open.
  useEffect(() => {
    if (!contactOpen) return
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (!target.closest("[data-mobile-contact]")) setContactOpen(false)
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [contactOpen])

  return (
    <div
      className={`sticky top-0 z-50 transition-transform duration-500 ease-out will-change-transform ${
        hidden ? "max-md:-translate-y-[110%]" : ""
      }`}
    >
      {/* Promo banner collapses on scroll. On desktop (≥md) the header bar below
          stays pinned (the container never translates); on phones (<md) the whole
          thing hides on scroll-down as before. */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          scrolled ? "md:max-h-0 md:opacity-0 md:pointer-events-none" : "md:max-h-24 md:opacity-100"
        }`}
      >
        <PromoTopBanner />
      </div>

      <header className="py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div
            className="flex items-center justify-between gap-4 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-2xl backdrop-saturate-150"
            style={{
              background: headerBg,
              boxShadow:
                "0 12px 36px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/images/prime-line-av-logo-dark-bg.svg"
                alt="Prime Line AV"
                width={210}
                height={38}
                className="h-9 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3.5 py-2.5 rounded-[10px] text-[13px] font-semibold tracking-[0.04em] uppercase text-white/65 hover:text-white hover:bg-white/[0.04] transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/fifa-2026-packages"
                className={`px-3.5 py-2.5 rounded-[10px] text-[13px] font-bold tracking-[0.04em] uppercase ${accentText} hover:text-white ${accentHoverBg} transition-all`}
              >
                FIFA 2026
              </Link>
            </nav>

            {/* Right side: Phone + Quote CTA */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href="tel:7869338488"
                className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-[10px] bg-white/[0.04] border border-white/[0.10] text-white/85 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.20] transition-all text-[13px] font-semibold"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:inline">(786) 933-8488</span>
              </a>

              <button
                onClick={openQuote}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-[10px] ${ctaTextColor} font-extrabold text-[13px] tracking-[0.02em] transition-all hover:-translate-y-0.5`}
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                  boxShadow: ctaShadow,
                }}
              >
                Get a Quote
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Tablet menu button (md–lg): keeps the nav dropdown */}
            <button
              className="hidden md:inline-flex lg:hidden text-white p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            {/* Phone contact button (<md): chat icon → contact menu like the desktop FAB */}
            <button
              data-mobile-contact
              className="md:hidden relative text-white p-2.5 rounded-xl"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                boxShadow: ctaShadow,
              }}
              onClick={() => setContactOpen((v) => !v)}
              aria-label={contactOpen ? "Close contact menu" : "Contact us"}
              aria-expanded={contactOpen}
            >
              {contactOpen ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet nav dropdown (md–lg) — phones use the bottom dock + contact popover */}
          {mobileMenuOpen && (
            <nav
              className="hidden md:block lg:hidden mt-3 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl"
              style={{
                background: "rgba(6, 16, 24, 0.92)",
                boxShadow: "0 12px 36px -12px rgba(0,0,0,0.6)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-3 rounded-[10px] text-[14px] font-semibold tracking-[0.02em] uppercase text-white/75 hover:text-white hover:bg-white/[0.05] transition-all"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/fifa-2026-packages"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-3 rounded-[10px] text-[14px] font-bold tracking-[0.02em] uppercase ${accentText} ${accentHoverBg} transition-all`}
                >
                  FIFA 2026
                </Link>

                <div className="h-px bg-white/[0.08] my-2" />

                <a
                  href="tel:7869338488"
                  className="flex items-center justify-center gap-2 w-full px-3 py-3 rounded-[10px] bg-white/[0.04] border border-white/[0.10] text-white/85 font-semibold text-[14px]"
                >
                  <Phone className="w-4 h-4" />
                  (786) 933-8488
                </a>
                <button
                  onClick={openQuote}
                  className={`flex items-center justify-center gap-2 w-full px-3 py-3 rounded-[10px] ${ctaTextColor} font-extrabold text-[14px] tracking-[0.02em] transition-all`}
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                    boxShadow: ctaShadow,
                  }}
                >
                  Get a Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </nav>
          )}

          {/* Phone contact popover (<md) — mirrors the desktop chat FAB menu */}
          {contactOpen && (
            <div
              data-mobile-contact
              className="md:hidden mt-3 ml-auto w-[230px] p-2 rounded-2xl border border-white/10 backdrop-blur-2xl"
              style={{
                background: "rgba(6, 16, 24, 0.94)",
                boxShadow: "0 18px 40px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col gap-2">
                <button
                  onClick={openQuote}
                  className="flex items-center gap-2.5 w-full px-4 py-3 rounded-xl text-white font-bold text-[13px]"
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                    boxShadow: ctaShadow,
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                  Request a Quote
                </button>
                <a
                  href="https://wa.me/17869338488"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 w-full px-4 py-3 rounded-xl font-bold text-[13px]"
                  style={{
                    background: "rgba(37,211,102,0.12)",
                    color: "#25D366",
                    border: "1px solid rgba(37,211,102,0.25)",
                  }}
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
                <a
                  href="tel:7869338488"
                  className="flex items-center gap-2.5 w-full px-4 py-3 rounded-xl font-bold text-[13px]"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  (786) 933-8488
                </a>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}
