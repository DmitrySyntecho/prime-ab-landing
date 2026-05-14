// Data for the 6 service detail pages linked from the homepage
// "End-to-End AV Production, Engineered for Impact" cards.
// Each card on the homepage maps to one entry here by slug.

export interface ServicePage {
  slug: string
  /** H1 on the service page hero */
  h1: string
  /** Short eyebrow shown above H1 */
  eyebrow: string
  /** Sub-heading rendered under H1 */
  subheadline: string
  /** Background image — same asset shown on the homepage card */
  image: string
  /** Long-form description rendered in the second block */
  description: string
  /** Headline of the second (description + CTA) block */
  descriptionHeading: string
  /** 3–5 bullet points highlighting what's included */
  highlights: string[]
  /** CTA button label */
  ctaLabel: string
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "full-av-production",
    h1: "Full AV Production",
    eyebrow: "End-to-End Service",
    subheadline:
      "Audio, video, lighting, staging — one accountable team from concept to strike.",
    image: "/images/services/event-production.webp",
    descriptionHeading: "End-to-end production handled under one roof",
    description:
      "Prime Line AV delivers full-service event production for conferences, galas, brand activations, and corporate events. From the first technical walkthrough to final breakdown, we engineer audio, video, lighting, and staging as one integrated system — so nothing falls between vendors. Our crew handles design, equipment, installation, live operation, and on-site troubleshooting with the same team that planned the show.",
    highlights: [
      "Dedicated production manager and technical director on every event",
      "Industry-leading equipment from L-Acoustics, Meyer, MA Lighting and more",
      "Pre-show 3D rendering and CAD plots for full client visibility",
      "24/7 on-call crew with redundant gear ready to deploy",
    ],
    ctaLabel: "Plan My Production",
  },
  {
    slug: "audio-engineering",
    h1: "Audio Engineering",
    eyebrow: "Sound Design & Live Mix",
    subheadline:
      "Crystal-clear sound design and live mixing for any venue, any audience size.",
    image: "/images/services/sound-audio.webp",
    descriptionHeading: "Pristine audio, tuned to every room",
    description:
      "Sound is the one thing your audience will never forgive if it's wrong. Our audio team designs, deploys, and mixes line-array PA, in-ear monitoring, wireless microphone, and broadcast-feed systems for events of every scale. Each system is acoustically modeled to the venue, time-aligned, and mixed live by a certified engineer — so speakers cut through, music sits right, and not a single moment gets lost.",
    highlights: [
      "L-Acoustics, Meyer Sound, d&b audiotechnik, QSC inventory",
      "Wireless RF coordination and on-site spectrum management",
      "Live mixing engineers with broadcast and corporate experience",
      "Backup channels and redundant transmitters on every show",
    ],
    ctaLabel: "Get an Audio Quote",
  },
  {
    slug: "visual-led-production",
    h1: "Visual & LED Production",
    eyebrow: "LED Walls & Video Content",
    subheadline:
      "Stunning LED walls, projection mapping, and broadcast-grade video production.",
    image: "/images/services/video-led.webp",
    descriptionHeading: "Big-screen impact with broadcast quality",
    description:
      "Whether it's a 30-foot LED wall behind a keynote, a curved immersive backdrop, or multi-camera live switching for a hybrid audience, our video team brings cinema-grade visuals to corporate stages. We supply fine-pitch indoor and IP-rated outdoor panels, full media servers, switching gear, and the operators who run them — so the picture stays sharp, in sync, and on-brand.",
    highlights: [
      "Fine-pitch P2.6 / P3.9 indoor and IP65-rated outdoor LED panels",
      "Disguise, Resolume and Pixera media-server workflows",
      "Multi-cam ATEM and TriCaster live switching",
      "Content creation, motion graphics and pre-show animation",
    ],
    ctaLabel: "Request LED Pricing",
  },
  {
    slug: "lighting-design",
    h1: "Lighting Design",
    eyebrow: "Atmosphere & Visual Mood",
    subheadline:
      "Atmospheric lighting that transforms spaces and sets the emotional tone.",
    image: "/images/services/lighting.webp",
    descriptionHeading: "Lighting that shapes the room",
    description:
      "Great lighting is the difference between a venue that looks like a venue and one that feels like an experience. Our designers build cue-by-cue lighting programs for galas, conferences, brand activations and concerts — combining intelligent moving heads, LED wash, theatrical fixtures, and pixel-mapped effects programmed in MA Lighting and Hog consoles. Every show gets a dedicated lighting director on-site.",
    highlights: [
      "GrandMA3 and Hog 4 console programming",
      "Moving heads, LED wash, beams, pixel mapping, atmospheric haze",
      "Custom gobos and pre-programmed cue stacks",
      "Designer + on-site lighting director included",
    ],
    ctaLabel: "Design My Lighting",
  },
  {
    slug: "staging-rigging",
    h1: "Staging & Rigging",
    eyebrow: "Stages, Truss & Rigging",
    subheadline:
      "Custom stage builds and certified rigging solutions, engineered for safety.",
    image: "/images/services/staging-rigging.webp",
    descriptionHeading: "Built to spec, rigged to code",
    description:
      "From a low-profile keynote stage to a multi-level concert build with motorized truss and overhead rigging, our staging team engineers every structure for the venue, the show, and the load. Every rig is plotted in CAD, signed off by a certified rigger, and assembled by our experienced crew. Modular Stageline, ProFlex and SkyDeck inventory lets us scale to any footprint.",
    highlights: [
      "Custom CAD design and structural load calcs",
      "ETCP-certified riggers on every motorized rig",
      "Modular stages, ramps, ADA-compliant builds",
      "Truss systems, ground support and chain motors",
    ],
    ctaLabel: "Quote My Stage Build",
  },
  {
    slug: "permanent-installation",
    h1: "Permanent Installation",
    eyebrow: "Long-Term AV Systems",
    subheadline:
      "Long-term AV systems designed and installed for venues and corporate spaces.",
    image: "/images/services/permanent-av.webp",
    descriptionHeading: "AV systems engineered to last",
    description:
      "When you need an AV system that's part of the building — boardrooms, training centers, houses of worship, retail, hospitality, broadcast studios — we design, integrate, program and commission it end-to-end. Our integration team handles low-voltage cabling, control programming (Crestron, Q-SYS, Extron), system tuning, and the user training that makes the system actually get used after we leave.",
    highlights: [
      "Crestron, Q-SYS, Extron and Dante system integration",
      "Architectural cabling, in-wall and rack engineering",
      "Programming, commissioning and full as-built documentation",
      "Service contracts, remote monitoring and on-call support",
    ],
    ctaLabel: "Scope My Install",
  },
]

export function getServicePage(slug: string): ServicePage | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}
