"use client"

import { useEffect, useRef, useState } from "react"
import { Phone, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { WorldCupCTA } from "./landing/world-cup-cta"
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_HREF } from "@/lib/contact"

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#our-work" },
  { label: "Industry", href: "/#events" },
  { label: "About", href: "/#about" },
]

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const hash = href.split("#")[1]
  if (!hash) return
  const el = document.getElementById(hash)
  if (el) {
    e.preventDefault()
    el.scrollIntoView({ behavior: "smooth" })
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuTop, setMenuTop] = useState(0)
  const lastY = useRef(0)
  const headerRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")
  const isLp = pathname?.startsWith("/lp")

  // Close menu when header hides
  useEffect(() => {
    if (hidden) setMobileMenuOpen(false)
  }, [hidden])



  // Notify bottom nav when burger menu opens/closes
  useEffect(() => {
    document.dispatchEvent(new CustomEvent("headerMenuToggle", { detail: { open: mobileMenuOpen } }))
  }, [mobileMenuOpen])

  // CTM swap when mobile menu opens (menu is conditionally rendered, missed by initial scan)
  useEffect(() => {
    if (!mobileMenuOpen) return
    const swap = () => {
      try {
        const ctm = (window as any).__ctm
        if (!ctm) return
        ctm.main?.scan?.()
        ctm.main?.runNow?.()
      } catch (e) {}
    }
    const t1 = setTimeout(swap, 50)
    const t2 = setTimeout(swap, 400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [mobileMenuOpen])

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
        setHidden(true)
      } else if (delta < -4) {
        setHidden(false)
      }

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
    }
  }, [])

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

  const toggleMenu = () => {
    if (!mobileMenuOpen && headerRef.current) {
      setMenuTop(headerRef.current.getBoundingClientRect().bottom)
    }
    setMobileMenuOpen((v) => !v)
  }

  return (
    <>
      <div
        ref={headerRef}
        data-hidden={hidden}
        className="site-header sticky top-0 z-50 transition-transform duration-500 ease-out will-change-transform"
      >
        <header className="py-3">
          <div className="max-w-7xl mx-auto px-4">
            <div
              className="flex items-center justify-between gap-2 lg:gap-4 px-3 lg:px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-2xl backdrop-saturate-150"
              style={{
                background: headerBg,
                boxShadow:
                  "0 12px 36px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              <Link href="/" className="lg:shrink-0 flex items-center w-[40%] lg:w-auto">
                <Image
                  src="/images/prime-line-av-logo-dark-bg.svg"
                  alt="Prime Line AV"
                  width={210}
                  height={38}
                  className="h-5 lg:h-9 w-auto max-w-full"
                />
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
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
                  href={PHONE_TEL}
                  suppressHydrationWarning
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-[10px] bg-white/[0.04] border border-white/[0.10] text-white/85 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.20] transition-all text-[13px] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span suppressHydrationWarning className="hidden xl:inline">{PHONE_DISPLAY}</span>
                </a>

                {isLp ? (
                  <WorldCupCTA onClick={openQuote} />
                ) : (
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
                )}
              </div>

              {/* Mobile: Call Now button — direct call, CSS animation cycles between text and number */}
              <a
                href={PHONE_TEL}
                suppressHydrationWarning
                className="md:hidden w-[60%] max-w-[160px] relative inline-flex items-center justify-center overflow-hidden py-3 rounded-xl text-white font-extrabold text-[14px] tracking-[0.01em] transition-all active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                  boxShadow: ctaShadow,
                }}
              >
                <style href="hdr-call-btn" precedence="default">{`
                  @keyframes hdrBtnText {
                    0%, 40%  { transform: translateY(0);     opacity: 1; }
                    49%      { transform: translateY(-100%);  opacity: 0; }
                    50%      { transform: translateY(100%);   opacity: 0; }
                    88%      { transform: translateY(100%);   opacity: 0; }
                    100%     { transform: translateY(0);      opacity: 1; }
                  }
                  @keyframes hdrBtnPhone {
                    0%, 40%  { transform: translateY(100%);  opacity: 0; }
                    49%      { transform: translateY(0);      opacity: 1; }
                    88%      { transform: translateY(0);      opacity: 1; }
                    100%     { transform: translateY(-100%);  opacity: 0; }
                  }
                `}</style>
                <span className="absolute inset-0 flex items-center justify-center text-[17px]"
                  style={{ animation: "hdrBtnText 7s ease-in-out infinite" }}>
                  Call Now
                </span>
                <span className="absolute inset-0 flex items-center justify-center gap-2 whitespace-nowrap"
                  style={{ opacity: 0, transform: "translateY(100%)", animation: "hdrBtnPhone 7s ease-in-out infinite" }}>
                  <Phone className="w-4 h-4 shrink-0" />
                  <span suppressHydrationWarning>{PHONE_DISPLAY}</span>
                </span>
                <span className="invisible">Call Now</span>
              </a>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu — fixed overlay outside sticky div so it doesn't affect sticky height */}
      {mobileMenuOpen && (
        <nav
          className="lg:hidden fixed left-0 right-0 z-[49] px-4 pt-2"
          style={{ top: menuTop }}
        >
          <div
            className="rounded-2xl border border-white/10 backdrop-blur-2xl p-3"
            style={{
              background: "rgba(6, 16, 24, 0.92)",
              boxShadow: "0 12px 36px -12px rgba(0,0,0,0.6)",
            }}
          >
            <div className="flex flex-col gap-2">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
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
                onClick={() => setMobileMenuOpen(false)}
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
        </nav>
      )}
    </>
  )
}
