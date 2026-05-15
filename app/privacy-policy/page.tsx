import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Line AV",
  description: "Learn how Prime Line AV collects, uses, and protects your personal information.",
}

const EFFECTIVE_DATE = "January 1, 2025"
const COMPANY = "Prime Line AV LLC"
const EMAIL = "info@primelineav.com"
const PHONE = "(786) 933-8488"
const ADDRESS = "Los Angeles, California"

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen py-24 px-4">
      {/* Background */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 10%, rgba(255,94,58,0.10) 0%, transparent 60%), linear-gradient(180deg, #060A18 0%, #0A0F1F 60%, #060A18 100%)",
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
              background: "rgba(255,94,58,0.10)",
              border: "1px solid rgba(255,94,58,0.22)",
              color: "#FFB380",
            }}
          >
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3 leading-tight tracking-[-0.02em]">
            Privacy{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Policy
            </span>
          </h1>
          <p className="text-white/45 text-[14px]">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        {/* Intro */}
        <div
          className="p-5 rounded-2xl mb-10 text-[14px] text-white/60 leading-relaxed"
          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          {COMPANY} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, and the choices you have. By using our website or services, you agree to the practices described here.
        </div>

        {/* Content */}
        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          <Section title="1. Information We Collect">
            <p className="mb-3">We collect information in the following ways:</p>
            <p className="font-semibold text-white/80 mb-2">Information you provide directly</p>
            <ul className="space-y-2 list-none mb-4">
              <Li>Name, phone number, and email address when you request a quote or contact us.</Li>
              <Li>Event details such as date, venue address, and type of service requested.</Li>
              <Li>Billing and payment information when completing a transaction.</Li>
              <Li>Any messages or notes you include in forms or direct communication.</Li>
            </ul>
            <p className="font-semibold text-white/80 mb-2">Information collected automatically</p>
            <ul className="space-y-2 list-none">
              <Li>IP address, browser type, device identifiers, and referring URLs.</Li>
              <Li>Pages viewed, time spent on site, and click patterns via analytics tools.</Li>
              <Li>Cookies and similar tracking technologies (see Section 6).</Li>
            </ul>
          </Section>

          <Section title="2. How We Use Your Information">
            <ul className="space-y-2 list-none">
              <Li>To respond to quote requests, inquiries, and customer service communications.</Li>
              <Li>To process bookings, payments, and deliver contracted services.</Li>
              <Li>To send transactional emails such as booking confirmations and invoices.</Li>
              <Li>To send occasional marketing communications about promotions and new services (you may opt out at any time).</Li>
              <Li>To improve our website, services, and user experience based on analytics data.</Li>
              <Li>To comply with legal obligations and enforce our Terms and Conditions.</Li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>
              We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following limited circumstances:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <Li>With trusted service providers (e.g., payment processors, email platforms, analytics tools) who process data solely on our behalf under strict confidentiality agreements.</Li>
              <Li>When required by law, court order, or government authority.</Li>
              <Li>In connection with a business merger, acquisition, or sale of assets, provided the acquiring party agrees to honor this Privacy Policy.</Li>
            </ul>
          </Section>

          <Section title="4. Data Retention">
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes described in this Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Client records are generally retained for 5 years following the last transaction. You may request deletion of your data at any time (see Section 8).
            </p>
          </Section>

          <Section title="5. Security">
            <p>
              We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, loss, or disclosure. These include encrypted data transmission (HTTPS/TLS), access controls, and regular security reviews. However, no method of internet transmission is 100% secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Cookies">
            <p>
              Our website uses cookies and similar technologies to enhance your browsing experience and analyze traffic. Types of cookies we use:
            </p>
            <ul className="mt-3 space-y-2 list-none">
              <Li><span className="text-white/85 font-semibold">Essential cookies</span> — required for the website to function correctly.</Li>
              <Li><span className="text-white/85 font-semibold">Analytics cookies</span> — help us understand how visitors interact with our site (e.g., Google Analytics).</Li>
              <Li><span className="text-white/85 font-semibold">Marketing cookies</span> — used to deliver relevant advertising on third-party platforms.</Li>
            </ul>
            <p className="mt-3">
              You can disable non-essential cookies through your browser settings or a cookie management tool. Doing so may affect certain website features.
            </p>
          </Section>

          <Section title="7. Third-Party Links">
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites and encourage you to review their privacy policies before providing any personal information.
            </p>
          </Section>

          <Section title="8. Your Rights">
            <p>Depending on your location, you may have the following rights regarding your personal data:</p>
            <ul className="mt-3 space-y-2 list-none">
              <Li><span className="text-white/85 font-semibold">Access</span> — request a copy of the personal data we hold about you.</Li>
              <Li><span className="text-white/85 font-semibold">Correction</span> — request correction of inaccurate or incomplete data.</Li>
              <Li><span className="text-white/85 font-semibold">Deletion</span> — request that we delete your personal data, subject to legal retention obligations.</Li>
              <Li><span className="text-white/85 font-semibold">Opt-out</span> — unsubscribe from marketing communications at any time via the link in our emails.</Li>
              <Li><span className="text-white/85 font-semibold">Portability</span> — request a machine-readable copy of your data where technically feasible.</Li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, contact us at <a href={`mailto:${EMAIL}`} className="text-[#FF7A9A] hover:text-[#FF2D6F] transition-colors">{EMAIL}</a>. We will respond within 30 days.
            </p>
          </Section>

          <Section title="9. Children&apos;s Privacy">
            <p>
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately and we will delete it promptly.
            </p>
          </Section>

          <Section title="10. California Privacy Rights (CCPA)">
            <p>
              California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect and the right to opt out of any sale of personal information. We do not sell personal information. To submit a CCPA request, contact us at {EMAIL}.
            </p>
          </Section>

          <Section title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will post the revised policy on this page with an updated effective date. Continued use of our website or services after changes are posted constitutes your acceptance of the updated policy.
            </p>
          </Section>

          <Section title="12. Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please reach out:</p>
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
          <Link href="/terms-and-conditions" className="hover:text-white/70 transition-colors">Terms &amp; Conditions</Link>
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
