"use client"

import { useState } from "react"
import { Play } from "lucide-react"

/* Block 2 — video showreel. Uses Prime Line's "About us" reel (Mux). Swap this
   ID for a dedicated LA cut when one is available. The heavy player iframe only
   mounts after the user hits play. */
const SHOWREEL_MUX_ID = "jAJRQcO5mGsuhpGE01tMMiFUn70067j423fE5Er4gIJqk"

export function LandingVideo() {
  const [playing, setPlaying] = useState(false)

  return (
    <section id="lp-video" className="relative py-12 md:py-20 scroll-mt-4 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-10">
          <span className="ds-pill mb-4">
            <span className="dot" />
            See Us At Work
          </span>
          <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.06] text-white">
            Watch How We <span className="ds-accent-text">Work</span>
          </h2>
        </div>

        <div
          className="relative rounded-[24px] overflow-hidden border border-white/10 backdrop-blur-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(255, 45, 111,0.10), rgba(255, 210, 74,0.05))",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.7)",
          }}
        >
          <div className="m-3 md:m-5 rounded-[14px] md:rounded-[18px] overflow-hidden bg-black border border-white/[0.08]">
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
                    src={`https://image.mux.com/${SHOWREEL_MUX_ID}/animated.gif?width=640`}
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

          {/* Live tag */}
          <div className="absolute left-6 top-6 md:left-9 md:top-9 z-10 inline-flex items-center gap-2 px-2.5 md:px-3 py-1 md:py-1.5 rounded-[10px] bg-black/55 backdrop-blur-md border border-white/[0.12] text-[9px] md:text-[10px] font-bold tracking-[0.14em] uppercase text-white">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Live · Reel
          </div>
        </div>
      </div>
    </section>
  )
}
