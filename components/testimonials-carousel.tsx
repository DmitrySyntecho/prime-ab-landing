"use client"

import { useRef, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Testimonial {
  name: string
  role: string
  event: string
  vidalyticsId: string
  vidalyticsAccount: string
}

const testimonials: Testimonial[] = [
  {
    name: "Lauren Selman",
    role: "Client",
    event: "Client Testimonial",
    vidalyticsId: "iYZ2jDUGcHU7suUw",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Yesmin Asmar",
    role: "Event Producer",
    event: "Corporate Event",
    vidalyticsId: "Pl8oekG0aGdwKo45",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Brandon Dawson",
    role: "Business Owner, Thought Leader",
    event: "Cardone Ventures",
    vidalyticsId: "vH_ak_WsV9NzETN2",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Robert Renaud",
    role: "Event Coordinator",
    event: "Mine Expo",
    vidalyticsId: "vAK2Q7ZmlPoDkGe_",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "World Korean Business Forum",
    role: "Business Forum Attendee",
    event: "World Korean Business Forum",
    vidalyticsId: "M1JSB8Bh5GAAXUx2",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Betina",
    role: "Representative",
    event: "Amagi",
    vidalyticsId: "erHmSiTCBsYN2WD0",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Akansha",
    role: "Fashion Event Organizer",
    event: "Fashion Show Event",
    vidalyticsId: "OtQKmhqMWWT0bJZk",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Miles",
    role: "Event Organizer",
    event: "Food Festival",
    vidalyticsId: "Ka21kFYWXcmUrpl_",
    vidalyticsAccount: "o5ZPHiF7",
  },
  {
    name: "Gaby",
    role: "Event Producer",
    event: "Event Production",
    vidalyticsId: "3pptkh7gKz9yyJgJ",
    vidalyticsAccount: "o5ZPHiF7",
  },
]

function VidalyticsEmbed({ id, account }: { id: string; account: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || container.querySelector(`#vidalytics_embed_${id}`)) return

    const embedDiv = document.createElement("div")
    embedDiv.id = `vidalytics_embed_${id}`
    embedDiv.style.cssText = "width: 100%; height: 100%; position: relative;"
    container.appendChild(embedDiv)

    const script = document.createElement("script")
    script.type = "text/javascript"
    script.innerHTML = `
      (function (v, i, d, a, l, y, t, c, s) {
        y='_'+d.toLowerCase();c=d+'L';if(!v[d]){v[d]={};}if(!v[c]){v[c]={};}if(!v[y]){v[y]={};}
        var vl='Loader',vli=v[y][vl],vsl=v[c][vl + 'Script'],vlf=v[c][vl + 'Loaded'],ve='Embed';
        if (!vsl){vsl=function(u,cb){
          if(t){cb();return;}s=i.createElement("script");s.type="text/javascript";s.async=1;s.src=u;
          if(s.readyState){s.onreadystatechange=function(){if(s.readyState==="loaded"||s.readyState=="complete"){s.onreadystatechange=null;vlf=1;cb();}};}
          else{s.onload=function(){vlf=1;cb();};}
          i.getElementsByTagName("head")[0].appendChild(s);
        };}
        vsl(l+'loader.min.js',function(){if(!vli){var vlc=v[c][vl];vli=new vlc();}vli.loadScript(l+'player.min.js',function(){var vec=v[d][ve];t=new vec();t.run(a);});});
      })(window, document, 'Vidalytics', 'vidalytics_embed_${id}', 'https://fast.vidalytics.com/embeds/${account}/${id}/');
    `
    container.appendChild(script)
  }, [id, account])

  return <div ref={containerRef} className="absolute inset-0" />
}

export function TestimonialsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="py-20 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 max-w-5xl mx-auto px-2">
          <span className="ds-pill mb-5">
            <span className="dot" />
            Testimonials
          </span>
          <h2 className="text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] font-extrabold tracking-[-0.025em] leading-[1.1]">
            <span className="text-white">Real Clients. Real Events.</span>{" "}
            <span className="ds-accent-text whitespace-nowrap">Real Results.</span>
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white/[0.04] border border-white/[0.10] hover:bg-[#4ADE80]/10 hover:border-[#4ADE80]/30 rounded-[12px] p-2.5 backdrop-blur-md hidden md:block transition-all"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto pb-4 px-2 md:px-12"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[260px] md:w-[280px] relative">
                <div
                  className="relative w-full overflow-hidden rounded-[18px] border border-white/[0.08] bg-black"
                  style={{
                    aspectRatio: "9 / 16",
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.5)",
                  }}
                >
                  <VidalyticsEmbed id={testimonial.vidalyticsId} account={testimonial.vidalyticsAccount} />
                </div>
                <div className="mt-3 px-1">
                  <h3 className="text-white font-semibold text-[14px]">{testimonial.event}</h3>
                  <p className="text-[#4ADE80] text-[13px] font-medium">{testimonial.name}</p>
                  <p className="text-white/45 text-[11px]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white/[0.04] border border-white/[0.10] hover:bg-[#4ADE80]/10 hover:border-[#4ADE80]/30 rounded-[12px] p-2.5 backdrop-blur-md hidden md:block transition-all"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  )
}
