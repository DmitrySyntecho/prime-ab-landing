"use client"
// Banner v2 - no divider, fixed layout
import Image from "next/image"
import { Phone, CalendarDays, Mail, Sparkles } from "lucide-react"

const PHONE = "(786) 933-8488"
const EMAIL = "info@primelineav.com"

interface ContactSpecialistBannerProps {
  onStartQuote?: () => void
}

export function ContactSpecialistBanner({ onStartQuote }: ContactSpecialistBannerProps) {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className="relative rounded-2xl md:rounded-3xl border border-white/[0.08] overflow-hidden"
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

          {/* Content grid */}
          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-12 py-12 md:py-16 px-6 md:px-12 lg:px-16">

            {/* Photo — left side, always circular with effects */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Outer glow layer */}
                <div
                  className="absolute -inset-6 md:-inset-8 rounded-full blur-2xl"
                  style={{ background: "radial-gradient(circle, rgba(255,45,111,0.25) 0%, transparent 70%)" }}
                  aria-hidden
                />
                {/* Inner subtle glow */}
                <div
                  className="absolute -inset-3 md:-inset-4 rounded-full blur-xl"
                  style={{ background: "radial-gradient(circle, rgba(255,94,58,0.15) 0%, transparent 60%)" }}
                  aria-hidden
                />
                {/* Image container — perfectly circular */}
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 md:border-4 border-[#FF2D6F]/40 shadow-[inset_0_0_30px_rgba(255,45,111,0.2)]">
                  <Image
                    src="/egor.png"
                    alt="AV Production Specialist"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content — right side */}
            <div className="flex-1 text-center md:text-left">

              {/* Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#FF2D6F]/30 bg-[#FF2D6F]/08 mb-5 mx-auto md:mx-0">
                <Sparkles className="w-3 h-3 text-[#FF2D6F]" />
                <span className="text-[10px] font-bold tracking-[0.08em] uppercase text-[#FF2D6F]">
                  AV Production Specialist
                </span>
              </div>

              {/* Headline — full text visible, properly wrapped */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[1.2] text-white mb-6">
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

              {/* Subtitle */}
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
                Talk to a real Prime Line AV specialist. We&apos;ll help you pick the right setup, find the best package for your budget, and answer any technical questions — no bots, no waiting.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mb-7">
                <a
                  href={`tel:${PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
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
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white border border-white/15 bg-white/05 hover:bg-white/10 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
                >
                  <CalendarDays className="w-4 h-4" />
                  Request a Quote
                </button>

                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-base text-white/70 border border-white/10 bg-white/03 hover:text-white hover:border-white/20 transition-all hover:-translate-y-1 w-full sm:w-auto justify-center"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>

              {/* Topic pills */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-2 text-xs md:text-sm">
                {["LED Wall & Staging", "Audio & Lighting", "Permanent Installs", "Event Packages"].map((topic) => (
                  <span key={topic} className="flex items-center gap-2 text-white/40 font-semibold">
                    <span className="w-1 h-1 rounded-full bg-[#FF2D6F]/60" />
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
