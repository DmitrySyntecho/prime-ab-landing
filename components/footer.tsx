"use client"

import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Events", href: "/#events" },
  { label: "About", href: "/#about" },
  { label: "FIFA 2026", href: "/fifa-2026-packages" },
]

export function Footer() {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"
  const accentText = isFifa ? "text-[#E61D25]" : "text-[#FF2D6F]"
  const accentBorder = isFifa ? "border-[#E61D25]/10" : "border-[#FF2D6F]/10"
  const accentBg = isFifa ? "bg-[#E61D25]/15" : "bg-[#FF2D6F]/15"
  const accentHover = isFifa ? "hover:text-[#E61D25]" : "hover:text-[#FF2D6F]"

  const openQuote = () => {
    document.dispatchEvent(new CustomEvent("openQuoteForm"))
  }

  return (
    <footer className={`relative overflow-hidden border-t ${accentBorder}`}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(3,7,10,0.4) 50%, rgba(3,7,10,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-16 pb-8">
        {/* Top row: brand + nav + CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-flex">
              <Image
                src="/images/prime-line-av-logo-dark-bg.svg"
                alt="Prime Line AV"
                width={200}
                height={75}
                className="h-9 w-auto"
              />
            </Link>
            <p className="text-white/55 text-[14px] max-w-md">
              Full-service AV production for the brands that demand flawless execution.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-semibold tracking-[0.04em] uppercase text-white/65 ${accentHover} transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={openQuote}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-[13px] font-extrabold tracking-[0.02em] transition-all hover:-translate-y-0.5"
            style={{
              background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
              color: "#fff",
              boxShadow: isFifa
                ? "0 12px 36px -8px rgba(230,29,37,0.55), inset 0 1px 0 rgba(255,255,255,0.25)"
                : "0 12px 36px -8px rgba(255,45,111,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
            }}
          >
            Get a Quote
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mid row: contacts */}
        <div className="grid sm:grid-cols-3 gap-5 py-8">
          <a
            href="tel:7869338488"
            className="group flex items-center gap-3 p-4 rounded-[14px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] transition-all"
          >
            <span className={`w-10 h-10 rounded-[10px] ${accentBg} flex items-center justify-center ${accentText}`}>
              <Phone className="w-4 h-4" strokeWidth={2.4} />
            </span>
            <div>
              <div className={`text-[10px] tracking-[0.14em] uppercase font-bold ${accentText}`}>Call us</div>
              <div className="text-white text-[15px] font-bold">(786) 933-8488</div>
            </div>
          </a>

          <div className="flex items-center gap-3 p-4 rounded-[14px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-md">
            <span className={`w-10 h-10 rounded-[10px] ${accentBg} flex items-center justify-center ${accentText}`}>
              <Clock className="w-4 h-4" strokeWidth={2.4} />
            </span>
            <div>
              <div className={`text-[10px] tracking-[0.14em] uppercase font-bold ${accentText}`}>Hours</div>
              <div className="text-white text-[14px] font-semibold">Mon–Fri 8am–7pm</div>
              <div className="text-white/45 text-[12px]">Sat 10am–4pm</div>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-[14px] border border-white/[0.08] bg-white/[0.03] backdrop-blur-md">
            <span className={`w-10 h-10 rounded-[10px] ${accentBg} flex items-center justify-center ${accentText}`}>
              <MapPin className="w-4 h-4" strokeWidth={2.4} />
            </span>
            <div>
              <div className={`text-[10px] tracking-[0.14em] uppercase font-bold ${accentText}`}>Based in</div>
              <div className="text-white text-[14px] font-semibold">Los Angeles, California</div>
              <div className="text-white/45 text-[12px]">Coast-to-coast deployment</div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-7 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-[12px]">
          <p>© {new Date().getFullYear()} Prime Line AV. All rights reserved.</p>
          <p>When everything is just perfect.</p>
        </div>
      </div>
    </footer>
  )
}
