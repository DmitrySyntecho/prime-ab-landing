"use client"

import { useState } from "react"
import { Play, Users, ShieldCheck, CheckCircle2, Clock, Quote } from "lucide-react"

/* Block 2 showreel — Prime Line "About us" reel (Mux). Swap this ID for a
   dedicated LA showreel cut when one is available. */
const SHOWREEL_MUX_ID = "jAJRQcO5mGsuhpGE01tMMiFUn70067j423fE5Er4gIJqk"

const cards = [
  {
    icon: Users,
    title: "One Team, Start to Finish",
    body: "Same crew from site survey to strike. No handoffs, no miscommunication.",
  },
  {
    icon: ShieldCheck,
    title: "Your Event, Our Reputation",
    body: "Your Technical Director is on call 24/7 because your event is our name on the line.",
  },
  {
    icon: CheckCircle2,
    title: "1,986 Flawless Events",
    body: "Not 1,986 rentals. 1,986 events where everything went exactly as planned.",
  },
  {
    icon: Clock,
    title: "Show-Ready 2 Hours Early",
    body: "Walk into a venue that's already tested, tuned, and waiting for your guests.",
  },
]

export function LandingWhyUs() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="why-us" className="relative py-16 md:py-24 scroll-mt-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-14">
          <span className="ds-pill mb-4">
            <span className="dot" />
            Why Prime Line
          </span>
          <h2 className="text-[30px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.06] text-white">
            Why 1,900+ Events <span className="ds-accent-text">Trust Prime Line</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-7 md:gap-10 items-center">
          {/* LEFT — Video */}
          <div
            className="relative rounded-[20px] overflow-hidden border border-white/10 backdrop-blur-2xl"
            style={{
              background: "linear-gradient(135deg, rgba(255, 45, 111,0.10), rgba(255, 210, 74,0.05))",
              boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)",
            }}
          >
            <div className="m-3 md:m-4 rounded-[14px] overflow-hidden bg-black border border-white/[0.08]">
              <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                {playing ? (
                  <iframe
                    src={`https://player.mux.com/${SHOWREEL_MUX_ID}?autoplay=1`}
                    className="absolute inset-0 w-full h-full"
                    style={{ border: "none" }}
                    allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={`https://image.mux.com/${SHOWREEL_MUX_ID}/animated.gif?width=480`}
                      alt="Prime Line AV showreel preview"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                    <button
                      onClick={() => setPlaying(true)}
                      className="absolute inset-0 flex items-center justify-center group"
                      aria-label="Play showreel"
                    >
                      <div
                        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-all duration-300 group-hover:scale-110"
                        style={{
                          background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)",
                          boxShadow: "0 16px 48px -8px rgba(255,45,111,0.6)",
                        }}
                      >
                        <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(255,45,111,0.25)" }} />
                        <Play className="w-6 h-6 md:w-8 md:h-8 fill-white text-white ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT — 4 cards */}
          <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
            {cards.map(({ icon: Icon, title, body }) => (
              <div key={title} className="ds-card p-5 md:p-6">
                <div className="w-11 h-11 rounded-[12px] bg-[#FF2D6F]/14 border border-[#FF2D6F]/24 grid place-items-center text-[#FF2D6F] mb-3.5">
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <h3 className="text-[16px] md:text-[17px] font-bold text-white mb-1.5 leading-snug">{title}</h3>
                <p className="text-[13px] md:text-[14px] text-white/60 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div
          className="mt-8 md:mt-12 relative rounded-[20px] border border-white/[0.08] p-6 md:p-9 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 16px 36px -12px rgba(0,0,0,0.4)",
          }}
        >
          <Quote className="absolute -top-1 right-5 w-20 h-20 text-[#FF2D6F]/10" />
          <p className="relative text-[17px] md:text-[22px] leading-relaxed text-white/90 font-medium max-w-4xl">
            “We&apos;ve used Prime Line for 6 events now. The difference is night and day. They own the entire
            production so I can actually focus on my guests.”
          </p>
          <div className="relative mt-5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF2D6F] to-[#FF5E3A] grid place-items-center text-white font-bold text-[14px]">
              LS
            </div>
            <div>
              <p className="text-white font-bold text-[14px] leading-tight">Lauren Selman</p>
              <p className="text-white/50 text-[12px]">Event Producer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
