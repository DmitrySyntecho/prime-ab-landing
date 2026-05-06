"use client"

import Image from "next/image"
import { Phone, CalendarDays, Mail, Sparkles } from "lucide-react"

const PHONE = "(786) 933-8488"
const WHATSAPP_LINK = `https://wa.me/17869338488`
const EMAIL = "info@primelineav.com"

interface ContactSpecialistBannerProps {
  onStartQuote?: () => void
}

export function ContactSpecialistBanner({ onStartQuote }: ContactSpecialistBannerProps) {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className="relative rounded-[24px] border border-white/[0.08] overflow-hidden"
          style={{
            background:
              "linear-gradient(120deg, rgba(10,8,24,0.98) 0%, rgba(20,10,30,0.97) 55%, rgba(30,10,20,0.96) 100%)",
            boxShadow:
              "0 30px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 80% at 100% 50%, rgba(255,45,111,0.07) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 0% 50%, rgba(255,94,58,0.05) 0%, transparent 70%)",
            }}
            aria-hidden
          />

          {/* Dot grid texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-0">

            {/* Photo — left side, clipped at bottom on mobile */}
            <div className="relative flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div className="relative w-44 h-52 md:w-52 md:h-64 mt-0 md:ml-8">
                {/* Circular glow behind photo */}
                <div
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(255,45,111,0.25) 0%, transparent 70%)" }}
                  aria-hidden
                />
                <Image
                  src="/egor.png"
                  alt="Egor — AV Production Specialist"
                  fill
                  className="object-contain object-bottom drop-shadow-[0_0_40px_rgba(255,45,111,0.2)]"
                  priority
                />
              </div>
            </div>

            {/* Divider — vertical on desktop */}
            <div
              className="hidden md:block w-px self-stretch mx-8 my-6"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)" }}
              aria-hidden
            />

            {/* Content */}
            <div className="flex-1 px-6 md:px-0 pb-8 md:py-10 md:pr-10 text-center md:text-left">

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#FF2D6F]/30 bg-[#FF2D6F]/08 mb-4">
                <Sparkles className="w-3 h-3 text-[#FF2D6F]" />
                <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#FF2D6F]">
                  AV Production Specialist
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-[26px] md:text-[34px] lg:text-[40px] font-black tracking-[-0.02em] leading-[1.1] text-white mb-3 text-balance">
                Not sure which service{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  fits your event?
                </span>
              </h2>

              {/* Sub */}
              <p className="text-white/55 text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-lg">
                Talk to a real Prime Line AV specialist. We&apos;ll help you pick the right setup,
                find the best package for your budget, and answer any technical questions — no bots, no waiting.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-5">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13px] text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                    boxShadow: "0 8px 24px -6px rgba(255,45,111,0.5)",
                  }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  Call {PHONE}
                </a>

                <button
                  type="button"
                  onClick={onStartQuote}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13px] text-white border border-white/15 bg-white/05 hover:bg-white/10 transition-all hover:-translate-y-0.5"
                >
                  <CalendarDays className="w-3.5 h-3.5" />
                  Request a Quote
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-[13px] text-white/70 border border-white/10 bg-white/03 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Email Us
                </a>
              </div>

              {/* Topic pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1">
                {["LED Wall & Staging", "Audio & Lighting", "Permanent Installs", "Event Packages"].map((topic) => (
                  <span key={topic} className="flex items-center gap-1.5 text-[11px] text-white/35 tracking-[0.06em] uppercase font-semibold">
                    <span className="w-1 h-1 rounded-full bg-[#FF2D6F]/50 inline-block" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Name plate — desktop only, bottom-left of photo area */}
          </div>

          {/* Name + role below photo, left-aligned on desktop */}
          <div className="absolute bottom-5 left-8 hidden md:block">
            <p className="text-white text-[13px] font-bold leading-tight">Egor · AV Lead</p>
            <p className="text-white/40 text-[11px]">Mon–Fri · 9am–7pm EST</p>
          </div>
        </div>
      </div>
    </section>
  )
}
