"use client"

import { useParams } from "next/navigation"
import { CheckCircle2, FileSearch, Sparkles, CalendarCheck, ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/landing/whatsapp-icon"
import { whatsappLink, WHATSAPP_VENUE_MESSAGE } from "@/components/landing/contact"
import { getLandingCity } from "@/lib/landing-cities"

const steps = [
  { icon: FileSearch, text: "We review your requirements and venue details" },
  { icon: Sparkles, text: "Custom quote (and 3D render if applicable) within 4 hours" },
  { icon: CalendarCheck, text: "Link to schedule a quick site survey call" },
]

export default function ThankYouPage() {
  const params = useParams<{ city: string }>()
  const data = getLandingCity(params?.city ?? "") ?? { slug: "los-angeles", city: "Los Angeles", keyword: "" }
  const waHref = whatsappLink(WHATSAPP_VENUE_MESSAGE)

  return (
    <div className="min-h-screen flex flex-col">
      <section className="relative flex-1 py-14 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-[#FF2D6F]/15 border border-[#FF2D6F]/30 flex items-center justify-center mx-auto mb-7" style={{ boxShadow: "0 0 40px rgba(255,45,111,0.35)" }}>
            <CheckCircle2 className="w-10 h-10 text-[#FF2D6F]" strokeWidth={2} />
          </div>

          {/* H1 — 2 lines max on desktop */}
          <h1 className="text-[30px] md:text-[44px] font-extrabold tracking-[-0.03em] leading-[1.1] text-white mb-4">
            Quote Request <span className="ds-accent-text">Received.</span>
          </h1>
          <p className="text-white/65 text-[16px] md:text-[18px] max-w-xl mx-auto">
            Your dedicated Technical Director is reviewing your details now.
          </p>

          <div
            className="mt-9 md:mt-12 text-left rounded-[20px] border border-white/[0.08] p-6 md:p-8"
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 36px -12px rgba(0,0,0,0.4)" }}
          >
            <h2 className="text-white font-bold text-[15px] tracking-[0.04em] uppercase mb-5">What happens next</h2>
            <ol className="space-y-4">
              {steps.map(({ icon: Icon, text }, i) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="relative w-9 h-9 rounded-[10px] bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 grid place-items-center text-[#FF2D6F] flex-shrink-0">
                    <Icon className="w-[18px] h-[18px]" strokeWidth={2} />
                    <span className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-[#FF2D6F] text-white text-[11px] font-bold grid place-items-center">{i + 1}</span>
                  </span>
                  <span className="text-white/80 text-[14px] md:text-[15px] leading-relaxed pt-1.5">{text}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-6 rounded-[20px] border border-[#25D366]/25 p-6 md:p-8" style={{ background: "linear-gradient(135deg, rgba(37,211,102,0.10) 0%, rgba(37,211,102,0.02) 100%)" }}>
            <p className="text-white/85 text-[15px] md:text-[16px] leading-relaxed max-w-xl mx-auto mb-5">
              Send us photos or videos of your venue on WhatsApp right now. It helps our designers build your 3D render faster.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-extrabold text-[15px] transition-all hover:-translate-y-0.5"
              style={{ background: "#25D366", color: "#03251a", boxShadow: "0 12px 36px -8px rgba(37,211,102,0.6)" }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              Message Us on WhatsApp
            </a>
          </div>

          <a href={`/lp/${data.slug}`} className="mt-8 inline-flex items-center gap-2 text-white/55 text-[13px] hover:text-white transition-colors">
            Back to the {data.city} page
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  )
}
