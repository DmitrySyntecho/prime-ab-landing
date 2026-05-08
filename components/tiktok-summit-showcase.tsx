"use client"

import Image from "next/image"
import { Sparkles } from "lucide-react"

// Images with Next.js Image optimization (quality + sizes for responsive loading)
const images = {
  // Top right row
  topRight1: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-07%20235523.png-tyMpiIJhCpfgFVGlaMwFegZT7MJEOg.jpeg",
    alt: "TikTok Shop Summit exhibition floor",
  },
  topRight2: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000231-ubLtmx4KjStNvWRYhyBW4CIxid6IfD.png",
    alt: "Lighting console operator at work",
  },
  // Middle right row
  midRight1: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000316-YGlJ1GaRhOEySjxu5xVqv8CEip6bc5.png",
    alt: "Speaker presenting TikTok Shop ecosystem milestones",
  },
  midRight2: {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202026-05-08%20000215-3olUV1CLz6o4o885yq3nTPneeOvCCX.png",
    alt: "L-Acoustics speaker array setup",
  },
}

function GalleryImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 50vw, 25vw",
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-white/[0.08] group ${className}`}
      style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.4)" }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes={sizes}
        quality={75}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 40%)" }}
      />
    </div>
  )
}

export function TikTokSummitShowcase() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 20% 80%, rgba(255,45,111,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 80% 20%, rgba(255,94,58,0.04) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#FF2D6F]/25 bg-[#FF2D6F]/08 mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF2D6F]" />
            <span className="text-[11px] font-bold tracking-[0.08em] uppercase text-[#FF2D6F]">
              Case Study
            </span>
          </div>
          <h2 className="text-[28px] md:text-[40px] lg:text-[48px] font-black tracking-[-0.025em] leading-[1.1] text-white mb-4">
            TikTok Shop{" "}
            <span
              className="italic"
              style={{
                background: "linear-gradient(90deg, #FF2D6F 0%, #FF5E3A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Summit 2026
            </span>
          </h2>
          <p className="text-white/50 text-[14px] md:text-[15px] max-w-2xl mx-auto leading-relaxed">
            Full-scale AV production for TikTok&apos;s flagship creator summit — main stage, exhibition floor,
            LED walls, lighting design, and live streaming for 5,000+ attendees.
          </p>
        </div>

        {/* Bento Grid Gallery */}
        <div
          className="rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.08] p-2 md:p-3"
          style={{
            background: "linear-gradient(135deg, rgba(20,15,30,0.8) 0%, rgba(15,10,25,0.9) 100%)",
            boxShadow: "0 40px 80px -20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
          }}
        >
          {/* Desktop: Complex bento grid */}
          <div className="hidden md:grid grid-cols-4 grid-rows-3 gap-2 md:gap-3" style={{ height: "600px" }}>
            {/* Video player left (spans 2 cols, 2 rows) */}
            <div
              className="col-span-2 row-span-2 relative overflow-hidden rounded-xl border border-white/[0.08]"
              style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)" }}
            >
              <iframe
                src="https://player.mux.com/KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU?metadata-video-title=1+TikTok+BTS&video-title=1+TikTok+BTS"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Top right images (2 images) */}
            <GalleryImage
              src={images.topRight1.src}
              alt={images.topRight1.alt}
              className="col-span-1 row-span-1"
            />
            <GalleryImage
              src={images.topRight2.src}
              alt={images.topRight2.alt}
              className="col-span-1 row-span-1"
            />

            {/* Middle right images (2 images) */}
            <GalleryImage
              src={images.midRight1.src}
              alt={images.midRight1.alt}
              className="col-span-1 row-span-1"
            />
            <GalleryImage
              src={images.midRight2.src}
              alt={images.midRight2.alt}
              className="col-span-1 row-span-1"
            />
          </div>

          {/* Mobile: Simplified stacked layout */}
          <div className="md:hidden flex flex-col gap-2">
            {/* Video player */}
            <div
              className="relative overflow-hidden rounded-xl border border-white/[0.08] aspect-video"
              style={{ boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)" }}
            >
              <iframe
                src="https://player.mux.com/KfJ00XD74CFG01AI5eclQ58q439V3U004sBcuSENC2A9IU?metadata-video-title=1+TikTok+BTS&video-title=1+TikTok+BTS"
                className="absolute inset-0 w-full h-full"
                style={{ border: "none" }}
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Images grid 2x2 */}
            <div className="grid grid-cols-2 gap-2">
              <GalleryImage src={images.topRight1.src} alt={images.topRight1.alt} className="aspect-[4/3]" />
              <GalleryImage src={images.topRight2.src} alt={images.topRight2.alt} className="aspect-[4/3]" />
              <GalleryImage src={images.midRight1.src} alt={images.midRight1.alt} className="aspect-[4/3]" />
              <GalleryImage src={images.midRight2.src} alt={images.midRight2.alt} className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
