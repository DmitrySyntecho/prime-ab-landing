"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { WhatsAppIcon } from "./whatsapp-icon"
import {
  LANDING_PHONE_DISPLAY,
  LANDING_PHONE_TEL,
  whatsappLink,
  WHATSAPP_DEFAULT_MESSAGE,
} from "./contact"

/** Slim landing footer — brand mark, contact, and legal links. */
export function LandingFooter() {
  const year = 2026
  return (
    <footer className="relative border-t border-white/[0.08] pt-10 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/images/prime-line-av-logo-dark-bg.svg"
              alt="Prime Line AV"
              width={190}
              height={34}
              className="h-8 w-auto"
            />
            <p className="text-white/45 text-[13px] max-w-xs text-center md:text-left">
              Full-service AV production. One team, one contract, zero surprises.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${LANDING_PHONE_TEL}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] border border-white/[0.12] text-white font-semibold text-[13px] hover:bg-white/[0.10] transition-all"
            >
              <Phone className="w-4 h-4" />
              {LANDING_PHONE_DISPLAY}
            </a>
            <a
              href={whatsappLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-[13px] transition-all hover:-translate-y-0.5"
              style={{ background: "rgba(37,211,102,0.12)", color: "#25D366", border: "1px solid rgba(37,211,102,0.25)" }}
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-[12px]">© {year} Prime Line AV. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="/privacy-policy" className="text-white/45 text-[12px] hover:text-white/75 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="text-white/45 text-[12px] hover:text-white/75 transition-colors">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
