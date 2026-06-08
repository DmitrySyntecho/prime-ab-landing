"use client"

/* Company logos — shown at the bottom of the first screen (hero). Single
   compact auto-scrolling row so the full roster fits above the fold. */
const logos = [
  { name: "Walmart", src: "/images/brands/walmart.svg" },
  { name: "Amazon", src: "/images/brands/amazon.svg" },
  { name: "Google", src: "/images/brands/google.svg" },
  { name: "Apple", src: "/images/brands/apple.svg" },
  { name: "Meta", src: "/images/brands/meta.svg" },
  { name: "Nike", src: "/images/brands/nike.svg" },
  { name: "Coca-Cola", src: "/images/brands/coca-cola.svg" },
  { name: "Disney", src: "/images/brands/disney.svg" },
  { name: "Tesla", src: "/images/brands/tesla.svg" },
  { name: "TikTok", src: "/images/brands/tiktok.svg" },
  { name: "Sony", src: "/images/brands/sony.svg" },
  { name: "Nestlé", src: "/images/brands/nestle.svg" },
  { name: "Costco", src: "/images/brands/costco.svg" },
  { name: "Bank of America", src: "/images/brands/bank-of-america.svg" },
  { name: "Cisco", src: "/images/brands/cisco.svg" },
  { name: "Mercedes-Benz", src: "/images/brands/mercedes-benz.svg" },
  { name: "JP Morgan", src: "/images/brands/jp-morgan.svg" },
  { name: "Target", src: "/images/brands/target.svg" },
  { name: "Visa", src: "/images/brands/visa.svg" },
]

export function LandingLogoStrip() {
  const repeated = [...logos, ...logos, ...logos, ...logos]
  return (
    <div className="mt-10 md:mt-14">
      <p className="text-center text-[11px] md:text-[12px] font-semibold text-white/45 tracking-[0.18em] uppercase mb-5">
        Trusted by Apple, Nike, TikTok &amp; 500+ leading brands
      </p>
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max items-center animate-scroll-left" style={{ animationDuration: "120s" }}>
          {repeated.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex-shrink-0 grid place-items-center h-[44px] min-w-[120px] px-4 mr-3 rounded-[12px] border border-white/[0.06] bg-white/[0.03] backdrop-blur-md"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-5 md:h-6 w-auto max-w-[96px] object-contain"
                style={{ filter: "brightness(0) invert(1) opacity(0.6)" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
