import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms and Conditions | Prime Line AV",
  description: "Read the Terms and Conditions for Prime Line AV services.",
}

const EFFECTIVE_DATE = "January 1, 2025"
const COMPANY = "Prime Line AV LLC"
const EMAIL = "info@primelineav.com"
const PHONE = "(786) 933-8488"
const ADDRESS = "Los Angeles, California"

export default function TermsAndConditionsPage() {
  return (
    <main className="relative min-h-screen py-24 px-4">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 10%, rgba(255,45,111,0.10) 0%, transparent 60%), linear-gradient(180deg, #060A18 0%, #0A0F1F 60%, #060A18 100%)",
        }}
      />

      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] text-white/45 hover:text-white/80 transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] font-bold tracking-[0.14em] uppercase mb-5"
            style={{
              background: "rgba(255,45,111,0.10)",
              border: "1px solid rgba(255,45,111,0.22)",
              color: "#FF7A9A",
            }}
          >
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight tracking-[-0.02em]">
            Terms &amp;{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Conditions
            </span>
          </h1>
          <p className="text-white/45 text-[14px]">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <Section title="1. Agreement to Terms">
            <p>
              By accessing our website, requesting a quote, or entering into a rental or service agreement with {COMPANY} (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
            </p>
          </Section>

          <Section title="2. Services">
            <p>
              Prime Line AV provides audio-visual equipment rentals, LED video wall installations, stage production, lighting design, and related technical services throughout the United States, with primary operations based in {ADDRESS}.
            </p>
            <p className="mt-3">
              All services are subject to availability and must be confirmed in writing via a signed agreement or purchase order. A quote issued by Prime Line AV does not constitute a binding contract until accepted in writing by both parties.
            </p>
          </Section>

          <Section title="3. Booking &amp; Deposits">
            <ul className="space-y-2 list-none">
              <Li>A non-refundable deposit of 50% of the total invoice is required to reserve equipment and crew for your event date.</Li>
              <Li>The remaining balance is due in full no later than 5 business days before the event start date.</Li>
              <Li>Bookings are not confirmed until the deposit is received and a written confirmation is issued by Prime Line AV.</Li>
              <Li>Rush bookings (within 72 hours of the event) require full payment upfront.</Li>
            </ul>
          </Section>

          <Section title="4. Cancellation &amp; Rescheduling">
            <ul className="space-y-2 list-none">
              <Li>Cancellations made 14 or more days before the event: deposit is forfeited; remaining balance is waived.</Li>
              <Li>Cancellations made 7–13 days before the event: 75% of the total invoice is due.</Li>
              <Li>Cancellations made within 6 days of the event: 100% of the total invoice is due.</Li>
              <Li>Rescheduling requests are accommodated at no charge if submitted at least 14 days in advance and subject to equipment availability.</Li>
            </ul>
          </Section>

          <Section title="5. Delivery, Setup &amp; Strike">
            <p>
              Delivery, installation, and removal (&quot;strike&quot;) fees are quoted separately and vary by location, equipment, and scope. The client is responsible for ensuring safe and unrestricted access to the venue at agreed-upon times. Delays caused by the client or venue may result in additional labor charges at our prevailing hourly rate.
            </p>
          </Section>

          <Section title="6. Equipment Use &amp; Responsibility">
            <p>
              All equipment remains the property of Prime Line AV at all times. The client accepts full responsibility for rented equipment from the time of delivery to the time of pickup. The client agrees to:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <Li>Use equipment only for its intended purpose and in accordance with provided instructions.</Li>
              <Li>Protect equipment from misuse, unauthorized modifications, theft, or environmental damage.</Li>
              <Li>Pay for repair or full replacement of any damaged or lost equipment at current market replacement value.</Li>
              <Li>Not sublet or transfer equipment to any third party without prior written consent.</Li>
            </ul>
          </Section>

          <Section title="7. Liability Limitation">
            <p>
              Prime Line AV&apos;s total liability for any claim arising under or related to these Terms shall not exceed the total fees paid by the client for the specific event in question. We are not liable for indirect, incidental, special, or consequential damages, including lost profits or event cancellations due to circumstances beyond our control (force majeure events such as natural disasters, power outages, strikes, or government actions).
            </p>
          </Section>

          <Section title="8. Intellectual Property">
            <p>
              Prime Line AV retains the right to photograph and video-record all setups and productions for portfolio, marketing, and promotional use unless the client provides a written request to opt out no later than 48 hours before the event. Client grants us a royalty-free license to use event images and footage.
            </p>
          </Section>

          <Section title="9. Indemnification">
            <p>
              The client agrees to indemnify, defend, and hold harmless Prime Line AV, its officers, employees, contractors, and agents from any claims, damages, losses, or expenses (including attorney&apos;s fees) arising from the client&apos;s use of equipment, conduct at the event, violation of these Terms, or infringement of any third-party rights.
            </p>
          </Section>

          <Section title="10. Governing Law">
            <p>
              These Terms are governed by the laws of the State of California, without regard to its conflict of law provisions. Any disputes shall be resolved exclusively in the courts located in Los Angeles County, California.
            </p>
          </Section>

          <Section title="11. Changes to These Terms">
            <p>
              We may update these Terms from time to time. Changes are effective upon posting to our website. Continued use of our services after changes are posted constitutes your acceptance of the revised Terms.
            </p>
          </Section>

          <Section title="12. Contact">
            <p>For questions about these Terms, contact us:</p>
            <div
              className="mt-4 p-5 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="font-bold text-white">{COMPANY}</p>
              <p>{ADDRESS}</p>
              <p>
                <a href={`mailto:${EMAIL}`} className="text-[#FF7A9A] hover:text-[#FF2D6F] transition-colors">{EMAIL}</a>
              </p>
              <p>
                <a href={`tel:${PHONE.replace(/\D/g, "")}`} className="text-[#FF7A9A] hover:text-[#FF2D6F] transition-colors">{PHONE}</a>
              </p>
            </div>
          </Section>

        </div>

        {/* Footer link */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex gap-6 text-[13px] text-white/40">
          <Link href="/privacy-policy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
          <Link href="/" className="hover:text-white/70 transition-colors">primelineav.com</Link>
        </div>
      </div>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-[18px] font-extrabold text-white mb-4 tracking-[-0.01em]">{title}</h2>
      <div className="text-white/65 leading-relaxed">{children}</div>
    </section>
  )
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className="mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)" }}
        aria-hidden
      />
      <span>{children}</span>
    </li>
  )
}
