"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { PromoTopBanner } from "./promo-top-banner"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/#about" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
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

      if (y < 80) {
        setHidden(false)
      } else if (delta > 4) {
        // scrolling down → hide
        setHidden(true)
        if (mobileMenuOpen) setMobileMenuOpen(false)
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
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <div
      className="sticky top-0 z-50 transition-transform duration-500 ease-out will-change-transform"
      style={{ transform: hidden ? "translateY(-110%)" : "translateY(0)" }}
    >
      <PromoTopBanner />

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

            {/* Mobile menu button */}
            <button
              className="lg:hidden text-white p-2 rounded-lg bg-white/[0.04] border border-white/[0.08]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav
              className="lg:hidden mt-3 p-4 rounded-2xl border border-white/10 backdrop-blur-2xl"
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
        </div>
      </header>
    </div>
  )
}
