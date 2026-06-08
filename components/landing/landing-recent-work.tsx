"use client"

import { useState } from "react"
import { Play } from "lucide-react"

/* Block 3 — Recent Work. Real behind-the-scenes Mux videos. If a real video
   isn't available for a future entry, leave muxId empty → "Video coming soon". */
interface WorkVideo {
  id: string
  muxId: string
  stat: string
  title: string
  event: string
}

const videos: WorkVideo[] = [
  {
    id: "tiktok",
    muxId: "KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU",
    stat: "5,000 People · 48 Hours",
    title: "Watch: How We Built a 5,000-Person Stage in 48 Hours",
    event: "TikTok Shop Summit",
  },
  {
    id: "idb",
    muxId: "a1VM513vYaAw3u8rBfLB8bG4MMma2FbIFN2YGepuxiA",
    stat: "Full Corporate AV · 1 Day",
    title: "Full Corporate AV Setup — Boardroom to Ballroom in One Day",
    event: "IDB Group Corporate Summit",
  },
  {
    id: "lca",
    muxId: "02w1uQtRVTaeIYfYMvYnHvIFZbFF19lAyoDYU00M00fGHk",
    stat: "40ft LED Wall",
    title: "Gala Night: 40ft LED Wall + Full Lighting Design (4-Min Walkthrough)",
    event: "Last Chance for Animals Gala",
  },
  {
    id: "amagi",
    muxId: "BrD9vKSat02duCjNodPZ00a02ZRc5QfKAno007TIKGF5vOU",
    stat: "3 Breakout Rooms + Live Stream",
    title: "Conference AV: 3 Breakout Rooms, Main Stage, Live Stream — See the Rig",
    event: "Amagi FAST Conference",
  },
]

function WorkCard({ video }: { video: WorkVideo }) {
  const [playing, setPlaying] = useState(false)
  const thumbnail = video.muxId ? `https://image.mux.com/${video.muxId}/thumbnail.jpg?time=5&width=800` : ""

  return (
    <div className="relative rounded-[18px] overflow-hidden border border-white/[0.08] bg-black group">
      <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
        {playing && video.muxId ? (
          <video className="absolute inset-0 w-full h-full object-cover" src={`https://stream.mux.com/${video.muxId}.m3u8`} autoPlay controls playsInline />
        ) : (
          <>
            {thumbnail ? (
              <img src={thumbnail} alt={video.event} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            ) : (
              <div className="absolute inset-0 grid place-items-center bg-[#0a0818] text-white/40 text-[13px] font-semibold">Video coming soon</div>
            )}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)" }} />
            <span
              className="absolute top-3 left-3 inline-flex items-center px-2.5 py-1 rounded-full text-[10px] md:text-[11px] font-extrabold tracking-[0.04em] uppercase text-white"
              style={{ background: "rgba(255,45,111,0.85)", boxShadow: "0 8px 24px -8px rgba(255,45,111,0.8)" }}
            >
              {video.stat}
            </span>
            {video.muxId && (
              <button onClick={() => setPlaying(true)} className="absolute inset-0 flex items-center justify-center" aria-label={`Play: ${video.title}`}>
                <span
                  className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-all duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #FF2D6F 0%, #FF5E3A 100%)", boxShadow: "0 16px 48px -8px rgba(255,45,111,0.6)" }}
                >
                  <span className="absolute inset-0 rounded-full animate-ping" style={{ background: "rgba(255,45,111,0.25)" }} />
                  <Play className="w-5 h-5 md:w-6 md:h-6 fill-white text-white ml-0.5" />
                </span>
              </button>
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 pointer-events-none">
              <p className="text-white font-bold text-[14px] md:text-[15px] leading-snug">{video.title}</p>
              <p className="text-white/55 text-[11px] md:text-[12px] mt-1">{video.event}</p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export function LandingRecentWork() {
  return (
    <section className="relative py-14 md:py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-9 md:mb-12 max-w-3xl">
          <span className="ds-pill mb-4">
            <span className="dot" />
            See Us At Work
          </span>
          <h2 className="text-[28px] md:text-[44px] font-extrabold tracking-[-0.025em] leading-[1.1] text-white mb-3">
            Recent <span className="ds-accent-text">Work</span>
          </h2>
          <p className="text-white/55 text-[15px] md:text-[17px]">
            Behind-the-scenes videos showing how our team sets up, builds, and produces real events.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
          {videos.map((v) => (
            <WorkCard key={v.id} video={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
