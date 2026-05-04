import { Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const features = [
  "Full-service AV production from concept to execution",
  "Nationwide coverage with local expertise",
  "24/7 dedicated support during your event",
  "In-house creative and technical teams",
]

export function AboutUsSection() {
  return (
    <section id="about" className="py-24 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="ds-pill">
              <span className="dot" />
              About Us
            </span>
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.08] text-white">
              The AV Partner <span className="ds-accent-text">Brands Trust</span>
            </h2>

            <p className="text-white/60 leading-relaxed text-[16px] md:text-[17px]">
              For over 15 years, we&apos;ve been the go-to AV production partner for the world&apos;s most demanding
              brands. From intimate corporate gatherings to large-scale festivals, we deliver flawless execution every
              time.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-md bg-[#4ADE80]/15 border border-[#4ADE80]/25 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#4ADE80]" strokeWidth={3} />
                  </div>
                  <span className="text-white/75 text-[14px] md:text-[15px]">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-br from-[#4ADE80] to-[#16A34A] text-[#03070a] font-bold transition-all hover:-translate-y-0.5 mt-2"
              style={{
                boxShadow:
                  "0 12px 36px -8px rgba(74,222,128,0.55), inset 0 1px 0 rgba(255,255,255,0.3)",
              }}
            >
              Work With Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="relative h-[420px] md:h-[520px]">
            {/* Top right image */}
            <div className="absolute top-0 right-0 w-[65%] h-[55%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] z-10">
              <img
                src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1400&q=80"
                alt="Corporate event with LED video wall in elegant ballroom"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stats glass card */}
            <div
              className="absolute top-4 right-[-10px] md:right-[-20px] px-5 py-4 rounded-[14px] border border-[#4ADE80]/25 backdrop-blur-2xl z-20"
              style={{
                background: "rgba(8,18,26,0.85)",
                boxShadow:
                  "0 18px 40px -12px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-3xl md:text-4xl font-extrabold text-[#4ADE80] tracking-[-0.02em]">500+</p>
              <p className="text-white/55 text-[12px] tracking-[0.04em] uppercase font-semibold">Successful Events</p>
            </div>

            {/* Bottom left image */}
            <div className="absolute bottom-0 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] z-20">
              <img
                src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?auto=format&fit=crop&w=1200&q=80"
                alt="AV technician at control console monitoring live event"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="absolute bottom-8 right-0 w-[45%] h-[40%] rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)] z-10">
              <img
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80"
                alt="Professional lighting and video control software"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
