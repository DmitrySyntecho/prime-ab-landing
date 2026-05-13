// ============================================================
// PHASE 1 INTERNAL LINKING CONFIGURATION
// Approved internal links for Phase 1 pages only
// Follows the SEO sitemap and internal linking strategy
// ============================================================

export const PHASE_1_SERVICE_LINKS = {
  "av-production": [
    { href: "/industries/corporate-events", text: "corporate event production" },
    { href: "/industries/conferences", text: "conference AV production" },
    { href: "/industries/fashion-shows", text: "fashion show AV services" },
    { href: "/industries/product-launches", text: "product launch production" },
  ],
  "led-wall-rental": [
    { href: "/industries/trade-shows", text: "trade show LED displays" },
    { href: "/industries/fashion-shows", text: "fashion show LED walls" },
    { href: "/industries/experiential-marketing", text: "experiential marketing LED" },
    { href: "/industries/product-launches", text: "product launch LED displays" },
  ],
  "sound-system-rental": [
    { href: "/industries/corporate-events", text: "corporate event sound" },
    { href: "/industries/conferences", text: "conference audio systems" },
    { href: "/industries/trade-shows", text: "trade show sound systems" },
    { href: "/industries/pop-up-events", text: "pop-up event audio" },
  ],
  "event-lighting": [
    { href: "/industries/fashion-shows", text: "fashion show lighting" },
    { href: "/industries/experiential-marketing", text: "experiential marketing lighting" },
    { href: "/industries/pop-up-events", text: "pop-up event lighting" },
    { href: "/industries/product-launches", text: "product launch lighting design" },
  ],
  "staging-and-truss": [
    { href: "/industries/conferences", text: "conference staging" },
    { href: "/industries/trade-shows", text: "trade show stages" },
    { href: "/industries/experiential-marketing", text: "experiential marketing staging" },
    { href: "/industries/brand-activations", text: "brand activation stages" },
  ],
  "pipe-and-drape-rental": [
    { href: "/industries/corporate-events", text: "corporate event draping" },
    { href: "/industries/fashion-shows", text: "fashion show backdrops" },
    { href: "/industries/trade-shows", text: "trade show booth draping" },
    { href: "/industries/brand-activations", text: "brand activation backdrops" },
  ],
  "live-streaming": [
    { href: "/industries/corporate-events", text: "corporate event live streaming" },
    { href: "/industries/conferences", text: "conference live streaming" },
    { href: "/industries/pop-up-events", text: "pop-up event streaming" },
  ],
  "video-production": [
    { href: "/industries/brand-activations", text: "brand activation video" },
    { href: "/industries/product-launches", text: "product launch video production" },
    { href: "/industries/experiential-marketing", text: "experiential marketing video" },
  ],
} as const

export const PHASE_1_INDUSTRY_LINKS = {
  "corporate-events": [
    { href: "/services/av-production", text: "AV production services" },
    { href: "/services/sound-system-rental", text: "sound system rental" },
    { href: "/services/pipe-and-drape-rental", text: "pipe and drape rental" },
  ],
  "conferences": [
    { href: "/services/av-production", text: "full-service AV production" },
    { href: "/services/sound-system-rental", text: "conference audio systems" },
    { href: "/services/staging-and-truss", text: "conference staging" },
    { href: "/services/live-streaming", text: "conference live streaming" },
  ],
  "trade-shows": [
    { href: "/services/led-wall-rental", text: "LED wall displays" },
    { href: "/services/staging-and-truss", text: "trade show stages" },
    { href: "/services/sound-system-rental", text: "booth audio systems" },
    { href: "/services/pipe-and-drape-rental", text: "booth draping" },
  ],
  "fashion-shows": [
    { href: "/services/led-wall-rental", text: "LED runway displays" },
    { href: "/services/event-lighting", text: "runway lighting design" },
    { href: "/services/staging-and-truss", text: "runway staging" },
    { href: "/services/pipe-and-drape-rental", text: "fashion show backdrops" },
  ],
  "experiential-marketing": [
    { href: "/services/video-production", text: "video production" },
    { href: "/services/event-lighting", text: "lighting design" },
    { href: "/services/led-wall-rental", text: "LED installations" },
  ],
  "brand-activations": [
    { href: "/services/video-production", text: "activation video" },
    { href: "/services/staging-and-truss", text: "activation staging" },
    { href: "/services/led-wall-rental", text: "LED displays" },
  ],
  "pop-up-events": [
    { href: "/services/event-lighting", text: "event lighting" },
    { href: "/services/sound-system-rental", text: "pop-up audio" },
    { href: "/services/live-streaming", text: "live streaming" },
    { href: "/services/staging-and-truss", text: "temporary staging" },
  ],
  "product-launches": [
    { href: "/services/av-production", text: "full AV production" },
    { href: "/services/led-wall-rental", text: "LED reveal displays" },
    { href: "/services/event-lighting", text: "theatrical lighting" },
    { href: "/services/video-production", text: "launch video content" },
  ],
} as const

export const PHASE_1_SERVICES = [
  "av-production",
  "led-wall-rental",
  "sound-system-rental",
  "event-lighting",
  "staging-and-truss",
  "pipe-and-drape-rental",
  "live-streaming",
  "video-production",
] as const

export const PHASE_1_INDUSTRIES = [
  "corporate-events",
  "conferences",
  "trade-shows",
  "fashion-shows",
  "experiential-marketing",
  "brand-activations",
  "pop-up-events",
  "product-launches",
] as const
