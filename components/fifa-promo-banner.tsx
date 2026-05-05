"use client"

import Link from "next/link"
import { ArrowRight, Trophy, MapPin, Tv, Volume2, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function FIFAPromoBanner() {
  const [t, setT] = useState({ days: 0, hours: 0, mins: 0 })

  useEffect(() => {
    const target = new Date("2026-06-11T20:00:00").getTime()
    const tick = () => {
      const diff = Math.max(0, target - Date.now())
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const mins = Math.floor((diff / (1000 * 60)) % 60)
      setT({ days, hours, mins })
    }
    tick()
    const id = setInterval(tick, 60000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          href="/fifa-2026-packages"
          className="block group relative rounded-[28px] overflow-hidden border backdrop-blur-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(60,172,59,0.10) 0%, rgba(42,57,141,0.18) 50%, rgba(230,29,37,0.10) 100%)",
            border: "1px solid rgba(60,172,59,0.30)",
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.10), 0 30px 80px -24px rgba(42,57,141,0.45)",
          }}
        >
          {/* Animated decorative orbs */}
          <div
            className="absolute -top-24 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(60,172,59,0.55), transparent 70%)",
              filter: "blur(80px)",
              animation: "fifaPromoOrbA 18s ease-in-out infinite",
            }}
            aria-hidden
          />
          <div
            className="absolute -bottom-24 -left-16 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(42,57,141,0.50), transparent 70%)",
              filter: "blur(80px)",
              animation: "fifaPromoOrbB 22s ease-in-out infinite",
            }}
            aria-hidden
          />
          <div
            className="absolute top-1/2 left-1/2 w-[260px] h-[260px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
            style={{
              background: "radial-gradient(circle, rgba(230,29,37,0.30), transparent 70%)",
              filter: "blur(80px)",
              animation: "fifaPromoOrbC 26s ease-in-out infinite",
            }}
            aria-hidden
          />

          {/* Sparkle dots */}
          {[
            { top: "18%", left: "22%", delay: "0s", color: "#3CAC3B" },
            { top: "30%", right: "10%", delay: "0.8s", color: "#FFD24A" },
            { top: "70%", left: "8%", delay: "1.6s", color: "#E61D25" },
            { top: "55%", right: "28%", delay: "0.4s", color: "#3CAC3B" },
            { top: "82%", left: "50%", delay: "2.0s", color: "#FFD24A" },
          ].map((p, i) => (
            <span
              key={i}
              className="absolute pointer-events-none"
              style={{
                ...p,
                width: 4,
                height: 4,
                borderRadius: "50%",
                background: p.color,
                boxShadow: `0 0 10px ${p.color}`,
                animation: `fifaPromoSparkle 3.4s ease-in-out infinite`,
                animationDelay: p.delay,
              }}
              aria-hidden
            />
          ))}

          {/* Mexican tricolor side accent on left */}
          <div
            className="absolute left-0 top-0 bottom-0 w-1 hidden md:block"
            style={{
              background:
                "linear-gradient(180deg, #3CAC3B 0% 33.33%, #E61D25 33.33% 66.66%, #2A398D 66.66% 100%)",
            }}
            aria-hidden
          />

          {/* Bauhaus pattern texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='300' height='300' viewBox='0 0 300 300' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none'%3E%3Crect x='0' y='0' width='80' height='80' fill='%233CAC3B'/%3E%3Ccircle cx='200' cy='80' r='40' fill='%23E61D25'/%3E%3Cpath d='M150 200 L250 200 L250 300 Z' fill='%232A398D'/%3E%3Crect x='0' y='220' width='60' height='60' fill='%23E61D25'/%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "300px",
              maskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, transparent 80%)",
            }}
            aria-hidden
          />

          {/* Content */}
          <div className="relative z-10 grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 p-8 md:p-10 lg:p-14 items-center">
            {/* LEFT — copy + CTA */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full text-[10px] sm:text-[11px] font-bold tracking-[0.16em] uppercase backdrop-blur-md"
                style={{
                  background: "rgba(60,172,59,0.14)",
                  border: "1px solid rgba(60,172,59,0.32)",
                  color: "#7ED77D",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#5BC25A]"
                  style={{
                    boxShadow: "0 0 10px #5BC25A",
                    animation: "fifaPromoPulse 1.6s ease-in-out infinite",
                  }}
                />
                FIFA World Cup 2026 · USA · MEX · CAN
              </div>

              <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] font-black tracking-[-0.03em] leading-[1.04] uppercase text-white mb-4 text-balance">
                <span className="block">Don&apos;t Watch the Match.</span>
                <span
                  className="block italic"
                  style={{
                    background:
                      "linear-gradient(135deg, #5BC25A 0%, #FFD24A 50%, #E61D25 100%)",
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    animation: "fifaPromoShift 5s ease-in-out infinite",
                    paddingRight: "0.18em",
                    lineHeight: 1.18,
                  }}
                >
                  Throw the Match.
                </span>
              </h2>

              <p className="text-white/65 text-[14px] md:text-[15px] leading-relaxed mb-6 max-w-[540px]">
                Stadium-grade LED walls, broadcast-quality sound, and full crew handling — for backyard
                viewing parties to corporate fan zones. Built for every kickoff from{" "}
                <b className="text-white">June 11</b> to the <b className="text-white">MetLife Final on July 19</b>.
              </p>

              {/* Feature chips */}
              <div className="flex flex-wrap gap-2 mb-7">
                {[
                  { icon: Tv, label: "LED Walls 80–800 sqft" },
                  { icon: Volume2, label: "Broadcast Audio" },
                  { icon: MapPin, label: "LA + Nationwide" },
                  { icon: Trophy, label: "Packages from $799/day" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-white/75"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon className="w-3 h-3 text-[#FFD24A]" strokeWidth={2.4} />
                    {label}
                  </span>
                ))}
              </div>

              <span
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-extrabold text-[13px] sm:text-[14px] tracking-[0.04em] uppercase transition-all group-hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #E61D25 0%, #BF1119 100%)",
                  boxShadow:
                    "0 12px 36px -8px rgba(230,29,37,0.55), inset 0 1px 0 rgba(255,255,255,0.30)",
                }}
              >
                <Sparkles className="w-4 h-4" />
                Explore FIFA 2026 Packages
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </div>

            {/* RIGHT — countdown card */}
            <div className="relative">
              <div
                className="relative rounded-[24px] p-6 md:p-7 overflow-hidden"
                style={{
                  background: "rgba(6, 10, 24, 0.65)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  backdropFilter: "blur(24px)",
                  boxShadow: "0 24px 60px -16px rgba(0,0,0,0.6)",
                }}
              >
                {/* Mini stadium glow */}
                <div
                  className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[200%] h-[100%] pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(ellipse 50% 100% at 50% 100%, rgba(60,172,59,0.20) 0%, transparent 70%)",
                  }}
                  aria-hidden
                />

                <div className="relative">
                  <div
                    className="text-[10px] tracking-[0.18em] uppercase font-bold mb-3"
                    style={{ color: "#5BC25A" }}
                  >
                    Kickoff in
                  </div>
                  <div className="flex items-baseline gap-3 mb-5">
                    {[
                      { num: t.days, lbl: "DAYS" },
                      { num: t.hours, lbl: "HRS" },
                      { num: t.mins, lbl: "MIN" },
                    ].map((c, i) => (
                      <div key={i} className="text-center">
                        <div
                          className="font-mono font-black text-[34px] sm:text-[40px] leading-none tabular-nums"
                          style={{
                            background: "linear-gradient(135deg, #FFD24A 0%, #FF5E3A 100%)",
                            WebkitBackgroundClip: "text",
                            backgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                          }}
                        >
                          {String(c.num).padStart(2, "0")}
                        </div>
                        <div className="text-[9px] tracking-[0.14em] text-white/45 font-bold mt-1">
                          {c.lbl}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="h-px bg-white/[0.10] mb-4" />

                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(230,29,37,0.18)",
                        border: "1px solid rgba(230,29,37,0.32)",
                        color: "#FF6B71",
                      }}
                    >
                      <Trophy className="w-[18px] h-[18px]" strokeWidth={2.2} />
                    </span>
                    <div>
                      <div className="text-white text-[13px] font-bold leading-tight">
                        June 11 — Estadio Azteca
                      </div>
                      <div className="text-white/50 text-[11px]">Mexico vs South Africa · Opener</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating "Limited Slots" pill */}
              <span
                className="absolute -top-3 -right-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold tracking-[0.12em] uppercase backdrop-blur-md"
                style={{
                  background: "rgba(230,29,37,0.18)",
                  border: "1px solid rgba(230,29,37,0.45)",
                  color: "#FF6B71",
                  boxShadow: "0 8px 20px -6px rgba(230,29,37,0.45)",
                  animation: "fifaPromoFloat 4s ease-in-out infinite",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full bg-[#FF6B71]"
                  style={{
                    boxShadow: "0 0 8px #FF6B71",
                    animation: "fifaPromoPulse 1.4s ease-in-out infinite",
                  }}
                />
                Limited Slots
              </span>
            </div>
          </div>

          {/* Bottom Mexican tricolor stripe */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, #3CAC3B 0% 33.33%, #E61D25 33.33% 66.66%, #2A398D 66.66% 100%)",
            }}
            aria-hidden
          />
        </Link>
      </div>

      <style jsx global>{`
        @keyframes fifaPromoOrbA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, 30px) scale(1.1); }
        }
        @keyframes fifaPromoOrbB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(35px, -25px) scale(1.15); }
        }
        @keyframes fifaPromoOrbC {
          0%, 100% { transform: translate(-50%, -50%) scale(1); }
          50% { transform: translate(-50%, -50%) scale(1.2); }
        }
        @keyframes fifaPromoSparkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes fifaPromoShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fifaPromoPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @keyframes fifaPromoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>
    </section>
  )
}
