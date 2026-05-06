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

          <div className="relative z-10 grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-0 items-center">

            {/* Photo — left side, larger and more prominent */}
            <div className="relative w-full px-6 md:px-0 py-8 md:py-12 flex justify-center md:justify-start md:pl-8">
              <div className="relative w-56 h-72 md:w-72 md:h-96">
                {/* Circular glow behind photo */}
                <div
                  className="absolute -inset-4 rounded-full blur-3xl"
                  style={{ background: "radial-gradient(circle, rgba(255,45,111,0.3) 0%, transparent 65%)" }}
                  aria-hidden
                />
                {/* Circular border frame */}
                <div
                  className="absolute inset-0 rounded-full border-2 md:border-4"
                  style={{ borderColor: "rgba(255,45,111,0.4)" }}
                  aria-hidden
                />
                <Image
                  src="/egor.png"
                  alt="Egor — AV Production Specialist"
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              {/* Name plate below photo on mobile/tablet */}
              <div className="md:hidden absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white text-[13px] font-bold">Egor · AV Lead</p>
                <p className="text-white/40 text-[11px]">Mon–Fri · 9am–7pm EST</p>
              </div>
            </div>

            {/* Divider on desktop */}
            <div
              className="hidden md:block absolute left-[calc(280px-16px)] lg:left-[calc(340px-16px)] top-1/4 bottom-1/4 w-px"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 30%, rgba(255,255,255,0.08) 70%, transparent)" }}
              aria-hidden
            />

            {/* Content — right side, expanded */}
            <div className="flex-1 px-6 md:px-10 py-8 md:py-12 text-center md:text-left">

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#FF2D6F]/30 bg-[#FF2D6F]/08 mb-4">
                <Sparkles className="w-3 h-3 text-[#FF2D6F]" />
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#FF2D6F]">
                  AV Production Specialist
                </span>
              </div>

              {/* Headline — better text wrapping */}
              <h2 className="text-[28px] md:text-[36px] lg:text-[42px] font-black tracking-[-0.02em] leading-[1.2] text-white mb-4">
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
              <p className="text-white/60 text-[14px] md:text-[15px] leading-relaxed mb-7 max-w-2xl">
                Talk to a real Prime Line AV specialist. We&apos;ll help you pick the right setup, find the best package for your budget, and answer any technical questions — no bots, no waiting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mb-6">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center sm:justify-start"
                  style={{
                    background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                    boxShadow: "0 8px 24px -6px rgba(255,45,111,0.5)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call {PHONE}
                </a>

                <button
                  type="button"
                  onClick={onStartQuote}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white border border-white/15 bg-white/05 hover:bg-white/10 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <CalendarDays className="w-4 h-4" />
                  Request a Quote
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-white/70 border border-white/10 bg-white/03 hover:text-white hover:border-white/20 transition-all hover:-translate-y-0.5 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>

              {/* Topic pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5">
                {["LED Wall & Staging", "Audio & Lighting", "Permanent Installs", "Event Packages"].map((topic) => (
                  <span key={topic} className="flex items-center gap-1.5 text-[11px] text-white/35 tracking-[0.06em] uppercase font-semibold">
                    <span className="w-1 h-1 rounded-full bg-[#FF2D6F]/50 inline-block" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Name plate — desktop only, below photo on left */}
            <div className="hidden md:flex items-center justify-center md:justify-start px-8 pb-6">
              <div>
                <p className="text-white text-sm font-bold leading-tight">Egor · AV Lead</p>
                <p className="text-white/40 text-xs">Mon–Fri · 9am–7pm EST</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
