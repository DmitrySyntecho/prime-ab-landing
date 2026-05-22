// ============================================================
// PRIME LINE AV - APPROVED SITEMAP DATA LAYER
// Source of truth for all URLs, metadata, and internal links.
// DO NOT add pages not in the approved SEO sitemap.
// ============================================================

// ─── SERVICES ────────────────────────────────────────────────
export const SERVICES = [
  {
    slug: "av-production",
    name: "AV Production",
    title: "AV Production Company | Full-Service Event AV",
    metaDescription:
      "Prime Line AV delivers full-service AV production for corporate events, conferences, brand activations, and live productions nationwide.",
    primaryKeyword: "AV production company",
    headline: "Full-Service AV Production for High-Stakes Events",
    subheadline:
      "Audio, video, lighting, and staging — all under one roof. We handle every technical detail so your event performs flawlessly.",
    intro:
      "Prime Line AV is a full-service AV production company specializing in corporate events, conferences, brand activations, experiential marketing, and live productions. We provide end-to-end audio, video, lighting, and staging solutions with certified technicians and industry-leading equipment.",
    // CLUSTER: AV Production Core Hub
    internalLinks: {
      industries: ["corporate-events", "conferences", "brand-activations"],
      resources: ["how-av-production-works", "event-av-planning-timeline", "corporate-event-av-checklist"],
      comparisons: ["full-service-av-vs-equipment-rental"],
      relatedServices: ["led-wall-rental", "sound-system-rental", "event-lighting"],
      topCities: ["miami-av-production", "los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "led-wall-rental",
    name: "LED Wall Rental",
    title: "LED Wall Rental | Indoor & Outdoor LED Screens",
    metaDescription:
      "Rent LED walls for events nationwide. Indoor and outdoor LED screens in any size or configuration. Corporate events, concerts, brand activations.",
    primaryKeyword: "LED wall rental",
    headline: "LED Wall Rental for Any Event, Any Scale",
    subheadline:
      "High-resolution indoor and outdoor LED displays in any size or configuration. Delivered, installed, and operated by our certified team.",
    intro:
      "We supply and operate LED walls for corporate events, conferences, concerts, trade shows, and brand activations. Our inventory includes fine-pitch indoor panels, weather-resistant outdoor panels, and curved configurations — all with on-site technicians.",
    // CLUSTER: LED Wall Hub
    internalLinks: {
      industries: ["conferences", "trade-shows", "fashion-shows", "product-launches"],
      resources: ["led-wall-rental-cost", "how-big-should-led-wall-be"],
      comparisons: ["led-wall-vs-projection"],
      relatedServices: ["av-production", "video-production"],
      topCities: ["miami-av-production", "los-angeles-av-production"],
    },
  },
  {
    slug: "sound-system-rental",
    name: "Sound System Rental",
    title: "Sound System Rental | Professional Event Audio",
    metaDescription:
      "Professional sound system rental for events. Line arrays, PA systems, wireless microphones, and audio engineering nationwide.",
    primaryKeyword: "sound system rental",
    headline: "Professional Sound Systems for Every Venue",
    subheadline:
      "Line arrays, PA systems, wireless microphones, and in-ear monitors — engineered and operated by certified audio professionals.",
    intro:
      "Our sound system rental service covers everything from intimate corporate meetings to large-scale outdoor concerts. We provide complete audio solutions including speakers, microphones, mixing consoles, and on-site audio engineers to ensure pristine sound quality at every event.",
    // CLUSTER: Sound System Hub
    internalLinks: {
      industries: ["corporate-events", "conferences", "trade-shows"],
      resources: [],
      comparisons: [],
      relatedServices: ["av-production", "event-lighting"],
      topCities: ["miami-av-production", "los-angeles-av-production"],
    },
  },
  {
    slug: "event-lighting",
    name: "Event Lighting",
    title: "Event Lighting Production | Design & Programming",
    metaDescription:
      "Professional event lighting design and production. Intelligent fixtures, LED uplighting, theatrical lighting, and DMX programming for events nationwide.",
    primaryKeyword: "event lighting production",
    headline: "Event Lighting That Transforms Any Space",
    subheadline:
      "Dynamic lighting design, intelligent fixtures, and precise DMX programming that sets the mood and elevates your event.",
    intro:
      "Our event lighting team handles everything from simple uplighting to complex intelligent lighting rigs. We design, program, and operate custom lighting for corporate events, galas, brand activations, concerts, and theatrical productions — indoors and outdoors.",
    // CLUSTER: Event Lighting Hub
    internalLinks: {
      industries: ["galas", "corporate-events", "brand-activations"],
      resources: ["lighting-design-for-events"],
      comparisons: [],
      relatedServices: ["av-production", "staging-and-truss"],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "staging-and-truss",
    name: "Staging & Truss",
    title: "Staging & Truss Rental | Custom Stages, Rigging & Truss Systems",
    metaDescription:
      "Professional staging and truss rental for events. Custom stage builds, modular platforms, truss systems, and rigging for corporate events, concerts, and fashion shows.",
    primaryKeyword: "staging and truss rental",
    headline: "Staging & Truss — Built for Your Event",
    subheadline:
      "Custom stage builds, modular platforms, truss systems, and rigging — engineered for safety and assembled by our experienced crew.",
    intro:
      "We design, build, and strike custom stages and truss systems for corporate events, concerts, fashion shows, product launches, and outdoor festivals. Our modular staging and truss inventory allows flexible configurations in any venue, and every build is engineered and certified for safety.",
    // CLUSTER: Staging & Truss Hub
    internalLinks: {
      industries: ["fashion-shows", "product-launches", "corporate-events", "trade-shows"],
      resources: ["stage-setup-guide"],
      comparisons: [],
      relatedServices: ["av-production", "event-lighting", "pipe-and-drape-rental"],
      topCities: ["miami-av-production", "los-angeles-av-production"],
    },
  },
  {
    slug: "pipe-and-drape-rental",
    name: "Pipe & Drape Rental",
    title: "Pipe & Drape Rental | Event Backdrops & Room Dividers",
    metaDescription:
      "Rent pipe and drape systems for events. Custom backdrops, room dividers, and event draping in any color or configuration.",
    primaryKeyword: "pipe and drape rental",
    headline: "Pipe & Drape Rental for Events",
    subheadline:
      "Custom backdrops, booth dividers, and room separation systems available in any color, height, or configuration.",
    intro:
      "Our pipe and drape rental service provides professional event draping solutions for trade show booths, gala backdrops, room dividers, and conference separators. We carry a full inventory of fabrics in multiple colors and our team handles delivery, installation, and strike.",
    // CLUSTER: Pipe & Drape Hub
    internalLinks: {
      industries: ["trade-shows", "fashion-shows", "brand-activations"],
      resources: ["pipe-drape-design-ideas"],
      comparisons: [],
      relatedServices: ["av-production", "staging-and-truss"],
      topCities: ["miami-av-production", "los-angeles-av-production"],
    },
  },
  {
    slug: "live-streaming",
    name: "Live Streaming",
    title: "Live Streaming Production | Hybrid Event Services",
    metaDescription:
      "Professional live streaming production for events. Multi-camera live streams, hybrid events, and virtual event production nationwide.",
    primaryKeyword: "live streaming production",
    headline: "Live Streaming Production for Hybrid Events",
    subheadline:
      "Multi-camera live streams, virtual event platforms, and broadcast-quality production that reaches your audience anywhere.",
    intro:
      "Our live streaming production team delivers broadcast-quality streams for corporate events, conferences, product launches, and virtual events. We handle multi-camera production, encoding, platform integration, and real-time graphics so your remote audience gets the full experience.",
    // CLUSTER: Live Streaming Hub
    internalLinks: {
      industries: ["conferences", "corporate-events", "product-launches"],
      resources: ["live-streaming-best-practices"],
      comparisons: ["live-streaming-vs-in-person"],
      relatedServices: ["av-production", "video-production"],
      topCities: ["new-york-av-production"],
    },
  },
  {
    slug: "video-production",
    name: "Video Production",
    title: "Video Production Services | Event Video & Content",
    metaDescription:
      "Professional video production services for events. Multi-camera recording, highlight reels, event coverage, and post-production nationwide.",
    primaryKeyword: "video production services",
    headline: "Event Video Production That Captures Every Moment",
    subheadline:
      "Multi-camera event coverage, highlight reels, and broadcast-quality post-production that turns your event into lasting content.",
    intro:
      "We provide end-to-end video production services for corporate events, brand activations, conferences, and product launches. Our team handles pre-production planning, multi-camera coverage on-site, and post-production delivery — giving you broadcast-quality content you can use across every channel.",
    // CLUSTER: Video Production Hub
    internalLinks: {
      industries: ["brand-activations", "product-launches", "corporate-events"],
      resources: ["video-production-workflow"],
      comparisons: [],
      relatedServices: ["av-production", "live-streaming"],
      topCities: ["los-angeles-av-production"],
    },
  },
] as const

export type ServiceSlug = (typeof SERVICES)[number]["slug"]

// ─── INDUSTRIES ───────────────────────────────────────────────
export const INDUSTRIES = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    title: "Corporate Event AV Production | Full-Service Production Company",
    metaDescription:
      "Professional AV production for corporate events including galas, conferences, product launches, and brand activations.",
    primaryKeyword: "corporate event AV production",
    headline: "Corporate Event AV Production",
    subheadline:
      "From intimate executive meetings to large-scale conferences, we deliver polished, technically flawless AV production.",
    // CLUSTER: Corporate Events Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental", "sound-system-rental", "event-lighting"],
      resources: ["corporate-event-av-checklist", "event-av-planning-timeline"],
      packages: ["corporate-event-full-production"],
      topCities: ["miami-av-production", "los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "conferences",
    name: "Conferences",
    title: "Conference AV Production | Audio, Video & Streaming",
    metaDescription:
      "AV production for conferences including live streaming, LED displays, audio systems, and stage production.",
    primaryKeyword: "conference AV production",
    headline: "Conference Production That Engages Attendees",
    subheadline:
      "Multi-day conference AV from registration to closing ceremony — including hybrid and live streaming capabilities.",
    // CLUSTER: Conferences Hub
    internalLinks: {
      services: ["av-production", "live-streaming", "led-wall-rental", "sound-system-rental"],
      resources: ["event-av-planning-timeline", "how-av-production-works"],
      packages: ["conference-av-package"],
      topCities: ["chicago-av-production", "atlanta-av-production"],
    },
  },
  {
    slug: "trade-shows",
    name: "Trade Shows",
    title: "Trade Show AV Production | Booth & Exhibit Production",
    metaDescription:
      "AV production for trade shows and exhibitions. Booth displays, LED walls, sound systems, and interactive exhibits.",
    primaryKeyword: "trade show AV production",
    headline: "Trade Show AV That Stops Traffic",
    subheadline:
      "Eye-catching LED displays, audio systems, and interactive technology that makes your booth the talk of the show.",
    // CLUSTER: Trade Shows Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental", "pipe-and-drape-rental"],
      resources: ["event-budget-planning"],
      packages: ["trade-show-booth-av"],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "fashion-shows",
    name: "Fashion Shows",
    title: "Fashion Show Production | Runway AV & Lighting",
    metaDescription:
      "Professional AV and lighting production for fashion shows. Runway lighting, audio systems, and visual displays for fashion events.",
    primaryKeyword: "fashion show production",
    headline: "Fashion Show Production Excellence",
    subheadline:
      "Precision runway lighting, synchronized sound design, and visual storytelling that brings your collection to life.",
    // CLUSTER: Fashion Shows Hub
    internalLinks: {
      services: ["event-lighting", "av-production", "staging-and-truss"],
      resources: ["lighting-design-for-events"],
      packages: ["fashion-show-production-package"],
      topCities: ["new-york-av-production", "los-angeles-av-production"],
    },
  },
  {
    slug: "experiential-marketing",
    name: "Experiential Marketing",
    title: "Experiential Marketing Event Production | Brand Experiences",
    metaDescription:
      "AV production for experiential marketing campaigns. Interactive displays, LED installations, sound design, and technical production for brand experiences.",
    primaryKeyword: "experiential marketing event production",
    headline: "AV Production for Experiential Marketing",
    subheadline:
      "Immersive LED installations, spatial audio, and technically flawless production that brings your brand experience to life.",
    // CLUSTER: Experiential Marketing Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental", "video-production"],
      resources: ["event-budget-planning"],
      packages: ["experiential-marketing-av"],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "brand-activations",
    name: "Brand Activations",
    title: "Brand Activation Production | Event AV for Brands",
    metaDescription:
      "Technical production for brand activations. LED walls, sound systems, lighting design, and staging for brand activation events nationwide.",
    primaryKeyword: "brand activation production",
    headline: "Brand Activation Production",
    subheadline:
      "We've produced activations for Netflix, TikTok, and Fortune 500 brands. We know what it takes to make your brand moment land.",
    // CLUSTER: Brand Activations Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental", "video-production"],
      resources: [],
      packages: [],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "pop-up-events",
    name: "Pop-Up Events",
    title: "Pop-Up Event AV Production | Temporary Event Spaces",
    metaDescription:
      "AV production for pop-up events and temporary venues. Fast-deploy audio, lighting, LED displays, and staging for pop-up retail and event spaces.",
    primaryKeyword: "pop-up event production",
    headline: "Pop-Up Event Production — Fast Deploy, Perfect Execution",
    subheadline:
      "We build fully-produced AV environments in temporary spaces, warehouses, rooftops, and non-traditional venues.",
    // CLUSTER: Pop-Up Events Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental"],
      resources: ["event-budget-planning"],
      packages: ["pop-up-event-av"],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
  {
    slug: "product-launches",
    name: "Product Launches",
    title: "Product Launch Event Production | Launch Event AV",
    metaDescription:
      "Professional AV production for product launch events. LED walls, sound systems, lighting, and staging for press and consumer product launches.",
    primaryKeyword: "product launch event production",
    headline: "Product Launch Production That Drives Impact",
    subheadline:
      "LED reveals, cinematic sound design, and precision staging — because your product launch only gets one first impression.",
    // CLUSTER: Product Launches Hub
    internalLinks: {
      services: ["av-production", "led-wall-rental", "live-streaming", "video-production"],
      resources: [],
      packages: ["product-launch-event"],
      topCities: ["los-angeles-av-production", "new-york-av-production"],
    },
  },
] as const

export type IndustrySlug = (typeof INDUSTRIES)[number]["slug"]

// ─── LOCATIONS ────────────────────────────────────────────────
export const STATES = [
  {
    slug: "florida-av-production",
    state: "Florida",
    abbr: "FL",
    title: "AV Production Florida | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Florida. Corporate events, conferences, and brand activations in Miami, Orlando, Tampa, and statewide.",
    primaryKeyword: "AV production Florida",
    cities: [
      { slug: "miami-av-production", city: "Miami", primaryKeyword: "AV production Miami" },
      { slug: "orlando-av-production", city: "Orlando", primaryKeyword: "AV production Orlando" },
      { slug: "tampa-av-production", city: "Tampa", primaryKeyword: "AV production Tampa" },
      { slug: "jacksonville-av-production", city: "Jacksonville", primaryKeyword: "AV production Jacksonville" },
      { slug: "west-palm-beach-av-production", city: "West Palm Beach", primaryKeyword: "AV production West Palm Beach" },
      { slug: "fort-lauderdale-av-production", city: "Fort Lauderdale", primaryKeyword: "AV production Fort Lauderdale" },
    ],
  },
  {
    slug: "california-av-production",
    state: "California",
    abbr: "CA",
    title: "AV Production California | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving California. Corporate events, conferences, and brand activations in Los Angeles, San Francisco, and statewide.",
    primaryKeyword: "AV production California",
    cities: [
      { slug: "los-angeles-av-production", city: "Los Angeles", primaryKeyword: "AV production Los Angeles" },
      { slug: "san-francisco-av-production", city: "San Francisco", primaryKeyword: "AV production San Francisco" },
      { slug: "san-diego-av-production", city: "San Diego", primaryKeyword: "AV production San Diego" },
      { slug: "sacramento-av-production", city: "Sacramento", primaryKeyword: "AV production Sacramento" },
      { slug: "oakland-av-production", city: "Oakland", primaryKeyword: "AV production Oakland" },
    ],
  },
  {
    slug: "texas-av-production",
    state: "Texas",
    abbr: "TX",
    title: "AV Production Texas | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Texas. Corporate events, conferences, and brand activations in Houston, Dallas, Austin, and statewide.",
    primaryKeyword: "AV production Texas",
    cities: [
      { slug: "houston-av-production", city: "Houston", primaryKeyword: "AV production Houston" },
      { slug: "dallas-av-production", city: "Dallas", primaryKeyword: "AV production Dallas" },
      { slug: "austin-av-production", city: "Austin", primaryKeyword: "AV production Austin" },
      { slug: "san-antonio-av-production", city: "San Antonio", primaryKeyword: "AV production San Antonio" },
      { slug: "fort-worth-av-production", city: "Fort Worth", primaryKeyword: "AV production Fort Worth" },
    ],
  },
  {
    slug: "new-york-av-production",
    state: "New York",
    abbr: "NY",
    title: "AV Production New York | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving New York. Corporate events, conferences, and brand activations in NYC, Brooklyn, Buffalo, and statewide.",
    primaryKeyword: "AV production New York",
    cities: [
      { slug: "new-york-city-av-production", city: "New York City", primaryKeyword: "AV production New York City" },
      { slug: "brooklyn-av-production", city: "Brooklyn", primaryKeyword: "AV production Brooklyn" },
      { slug: "buffalo-av-production", city: "Buffalo", primaryKeyword: "AV production Buffalo" },
      { slug: "albany-av-production", city: "Albany", primaryKeyword: "AV production Albany" },
    ],
  },
  {
    slug: "illinois-av-production",
    state: "Illinois",
    abbr: "IL",
    title: "AV Production Illinois | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Illinois. Corporate events, conferences, and brand activations in Chicago and statewide.",
    primaryKeyword: "AV production Illinois",
    cities: [
      { slug: "chicago-av-production", city: "Chicago", primaryKeyword: "AV production Chicago" },
      { slug: "aurora-av-production", city: "Aurora", primaryKeyword: "AV production Aurora" },
      { slug: "naperville-av-production", city: "Naperville", primaryKeyword: "AV production Naperville" },
    ],
  },
  {
    slug: "georgia-av-production",
    state: "Georgia",
    abbr: "GA",
    title: "AV Production Georgia | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Georgia. Corporate events, conferences, and brand activations in Atlanta and statewide.",
    primaryKeyword: "AV production Georgia",
    cities: [
      { slug: "atlanta-av-production", city: "Atlanta", primaryKeyword: "AV production Atlanta" },
      { slug: "savannah-av-production", city: "Savannah", primaryKeyword: "AV production Savannah" },
      { slug: "augusta-av-production", city: "Augusta", primaryKeyword: "AV production Augusta" },
    ],
  },
  {
    slug: "pennsylvania-av-production",
    state: "Pennsylvania",
    abbr: "PA",
    title: "AV Production Pennsylvania | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Pennsylvania. Corporate events, conferences, and brand activations in Philadelphia, Pittsburgh, and statewide.",
    primaryKeyword: "AV production Pennsylvania",
    cities: [
      { slug: "philadelphia-av-production", city: "Philadelphia", primaryKeyword: "AV production Philadelphia" },
      { slug: "pittsburgh-av-production", city: "Pittsburgh", primaryKeyword: "AV production Pittsburgh" },
      { slug: "allentown-av-production", city: "Allentown", primaryKeyword: "AV production Allentown" },
    ],
  },
  {
    slug: "ohio-av-production",
    state: "Ohio",
    abbr: "OH",
    title: "AV Production Ohio | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Ohio. Corporate events, conferences, and brand activations in Columbus, Cleveland, Cincinnati, and statewide.",
    primaryKeyword: "AV production Ohio",
    cities: [
      { slug: "columbus-av-production", city: "Columbus", primaryKeyword: "AV production Columbus" },
      { slug: "cleveland-av-production", city: "Cleveland", primaryKeyword: "AV production Cleveland" },
      { slug: "cincinnati-av-production", city: "Cincinnati", primaryKeyword: "AV production Cincinnati" },
    ],
  },
  {
    slug: "arizona-av-production",
    state: "Arizona",
    abbr: "AZ",
    title: "AV Production Arizona | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Arizona. Corporate events, conferences, and brand activations in Phoenix, Scottsdale, Tucson, and statewide.",
    primaryKeyword: "AV production Arizona",
    cities: [
      { slug: "phoenix-av-production", city: "Phoenix", primaryKeyword: "AV production Phoenix" },
      { slug: "scottsdale-av-production", city: "Scottsdale", primaryKeyword: "AV production Scottsdale" },
      { slug: "tucson-av-production", city: "Tucson", primaryKeyword: "AV production Tucson" },
    ],
  },
  {
    slug: "colorado-av-production",
    state: "Colorado",
    abbr: "CO",
    title: "AV Production Colorado | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Colorado. Corporate events, conferences, and brand activations in Denver, Boulder, and statewide.",
    primaryKeyword: "AV production Colorado",
    cities: [
      { slug: "denver-av-production", city: "Denver", primaryKeyword: "AV production Denver" },
      { slug: "boulder-av-production", city: "Boulder", primaryKeyword: "AV production Boulder" },
      { slug: "colorado-springs-av-production", city: "Colorado Springs", primaryKeyword: "AV production Colorado Springs" },
    ],
  },
  {
    slug: "washington-av-production",
    state: "Washington",
    abbr: "WA",
    title: "AV Production Washington | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Washington State. Corporate events, conferences, and brand activations in Seattle, Bellevue, and statewide.",
    primaryKeyword: "AV production Washington",
    cities: [
      { slug: "seattle-av-production", city: "Seattle", primaryKeyword: "AV production Seattle" },
      { slug: "bellevue-av-production", city: "Bellevue", primaryKeyword: "AV production Bellevue" },
      { slug: "spokane-av-production", city: "Spokane", primaryKeyword: "AV production Spokane" },
    ],
  },
  {
    slug: "massachusetts-av-production",
    state: "Massachusetts",
    abbr: "MA",
    title: "AV Production Massachusetts | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Massachusetts. Corporate events, conferences, and brand activations in Boston and statewide.",
    primaryKeyword: "AV production Massachusetts",
    cities: [
      { slug: "boston-av-production", city: "Boston", primaryKeyword: "AV production Boston" },
      { slug: "cambridge-av-production", city: "Cambridge", primaryKeyword: "AV production Cambridge" },
      { slug: "worcester-av-production", city: "Worcester", primaryKeyword: "AV production Worcester" },
    ],
  },
  {
    slug: "nevada-av-production",
    state: "Nevada",
    abbr: "NV",
    title: "AV Production Nevada | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Nevada. Corporate events, conferences, and brand activations in Las Vegas, Reno, and statewide.",
    primaryKeyword: "AV production Nevada",
    cities: [
      { slug: "las-vegas-av-production", city: "Las Vegas", primaryKeyword: "AV production Las Vegas" },
      { slug: "reno-av-production", city: "Reno", primaryKeyword: "AV production Reno" },
      { slug: "henderson-av-production", city: "Henderson", primaryKeyword: "AV production Henderson" },
    ],
  },
  {
    slug: "north-carolina-av-production",
    state: "North Carolina",
    abbr: "NC",
    title: "AV Production North Carolina | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving North Carolina. Corporate events, conferences, and brand activations in Charlotte, Raleigh, and statewide.",
    primaryKeyword: "AV production North Carolina",
    cities: [
      { slug: "charlotte-av-production", city: "Charlotte", primaryKeyword: "AV production Charlotte" },
      { slug: "raleigh-av-production", city: "Raleigh", primaryKeyword: "AV production Raleigh" },
      { slug: "durham-av-production", city: "Durham", primaryKeyword: "AV production Durham" },
    ],
  },
  {
    slug: "michigan-av-production",
    state: "Michigan",
    abbr: "MI",
    title: "AV Production Michigan | Prime Line AV",
    metaDescription:
      "Full-service AV production company serving Michigan. Corporate events, conferences, and brand activations in Detroit, Grand Rapids, and statewide.",
    primaryKeyword: "AV production Michigan",
    cities: [
      { slug: "detroit-av-production", city: "Detroit", primaryKeyword: "AV production Detroit" },
      { slug: "grand-rapids-av-production", city: "Grand Rapids", primaryKeyword: "AV production Grand Rapids" },
      { slug: "ann-arbor-av-production", city: "Ann Arbor", primaryKeyword: "AV production Ann Arbor" },
    ],
  },
] as const

export type StateSlug = (typeof STATES)[number]["slug"]

// ─── RESOURCES ────────────────────────────────────────────────
export const RESOURCES = [
  {
    slug: "av-production-cost",
    name: "AV Production Cost Guide",
    title: "How Much Does AV Production Cost? | 2025 Pricing Guide",
    metaDescription:
      "Complete AV production cost guide. Learn what drives pricing, average costs for different event types, and how to budget for AV production.",
    primaryKeyword: "how much does AV production cost",
    headline: "How Much Does AV Production Cost?",
    category: "pricing" as const,
    internalLinks: {
      services: ["av-production"],
      industries: ["corporate-events", "conferences"],
      comparisons: ["full-service-av-vs-equipment-rental"],
    },
  },
  {
    slug: "led-wall-rental-cost",
    name: "LED Wall Rental Cost",
    title: "LED Wall Rental Cost | 2025 Pricing Guide",
    metaDescription:
      "How much does it cost to rent an LED wall? Complete pricing guide covering size, resolution, indoor vs outdoor, and what's included.",
    primaryKeyword: "LED wall rental cost",
    headline: "LED Wall Rental Cost: What to Expect",
    category: "pricing" as const,
    internalLinks: {
      services: ["led-wall-rental"],
      industries: ["trade-shows", "product-launches"],
      comparisons: ["led-wall-vs-projection"],
    },
  },
  {
    slug: "how-av-production-works",
    name: "How AV Production Works",
    title: "How Does AV Production Work? | Complete Guide",
    metaDescription:
      "Learn how AV production works from pre-production planning to event day execution. A complete guide for event planners and brand managers.",
    primaryKeyword: "how does AV production work",
    headline: "How AV Production Works: A Complete Guide",
    category: "educational" as const,
    internalLinks: {
      services: ["av-production"],
      industries: ["corporate-events"],
      comparisons: [],
    },
  },
  {
    slug: "event-av-planning-timeline",
    name: "Event AV Planning Timeline",
    title: "Event AV Planning Timeline | When to Book AV Production",
    metaDescription:
      "A complete AV planning timeline for events. Learn when to book AV, what to confirm at each stage, and how to avoid last-minute problems.",
    primaryKeyword: "event AV planning timeline",
    headline: "Event AV Planning Timeline: From Booking to Show Day",
    category: "planning" as const,
    internalLinks: {
      services: ["av-production"],
      industries: ["corporate-events", "conferences"],
      comparisons: [],
    },
  },
  {
    slug: "corporate-event-av-checklist",
    name: "Corporate Event AV Checklist",
    title: "Corporate Event AV Checklist | Complete Planning Guide",
    metaDescription:
      "A comprehensive AV checklist for corporate events. Audio, video, lighting, staging, and technical requirements covered.",
    primaryKeyword: "corporate event AV checklist",
    headline: "Corporate Event AV Checklist",
    category: "planning" as const,
    internalLinks: {
      services: ["av-production", "sound-system-rental"],
      industries: ["corporate-events"],
      comparisons: [],
    },
  },
  {
    slug: "how-big-should-led-wall-be",
    name: "LED Wall Size Guide",
    title: "How Big Should an LED Wall Be? | LED Wall Size Guide",
    metaDescription:
      "How to choose the right LED wall size for your event. Viewing distance, venue size, and resolution explained for event planners.",
    primaryKeyword: "LED wall size calculator",
    headline: "How Big Should Your LED Wall Be?",
    category: "planning" as const,
    internalLinks: {
      services: ["led-wall-rental"],
      industries: ["trade-shows"],
      comparisons: ["led-wall-vs-projection"],
    },
  },
  {
    slug: "sound-system-sizing-guide",
    name: "Sound System Sizing Guide",
    title: "Sound System Sizing Guide for Events | Audio Planning",
    metaDescription:
      "How to choose the right sound system for your event. Room size, audience capacity, and SPL requirements explained.",
    primaryKeyword: "sound system sizing for events",
    headline: "How to Size a Sound System for Your Event",
    category: "planning" as const,
    internalLinks: {
      services: ["sound-system-rental"],
      industries: ["corporate-events", "conferences"],
      comparisons: [],
    },
  },
  {
    slug: "lighting-design-for-events",
    name: "Lighting Design for Events",
    title: "Event Lighting Design Guide | How to Light Your Event",
    metaDescription:
      "A complete guide to event lighting design. Types of lighting, DMX programming, and how to create the right atmosphere for any event.",
    primaryKeyword: "event lighting design guide",
    headline: "Event Lighting Design: A Complete Guide",
    category: "educational" as const,
    internalLinks: {
      services: ["event-lighting"],
      industries: ["fashion-shows", "corporate-events"],
      comparisons: [],
    },
  },
  {
    slug: "live-streaming-best-practices",
    name: "Live Streaming Best Practices",
    title: "Event Live Streaming Guide | Best Practices for 2025",
    metaDescription:
      "Best practices for live streaming corporate events and conferences. Cameras, encoding, platforms, and what makes a great live stream.",
    primaryKeyword: "event live streaming guide",
    headline: "Event Live Streaming Best Practices",
    category: "educational" as const,
    internalLinks: {
      services: ["live-streaming"],
      industries: ["conferences"],
      comparisons: ["live-streaming-vs-in-person"],
    },
  },
  {
    slug: "video-production-workflow",
    name: "Video Production Workflow",
    title: "Event Video Production Process | From Shoot to Delivery",
    metaDescription:
      "How event video production works from pre-production to post-production delivery. A complete workflow guide for event planners.",
    primaryKeyword: "event video production process",
    headline: "Event Video Production Workflow Explained",
    category: "educational" as const,
    internalLinks: {
      services: ["video-production"],
      industries: ["product-launches"],
      comparisons: [],
    },
  },
  {
    slug: "virtual-event-technology",
    name: "Virtual Event Technology",
    title: "Hybrid Event Technology Guide | Virtual Event AV",
    metaDescription:
      "A guide to virtual and hybrid event technology. Platforms, AV requirements, live streaming, and what you need for a successful hybrid event.",
    primaryKeyword: "hybrid event technology guide",
    headline: "Hybrid Event Technology: What You Need to Know",
    category: "educational" as const,
    internalLinks: {
      services: ["live-streaming", "av-production"],
      industries: ["conferences"],
      comparisons: [],
    },
  },
  {
    slug: "stage-setup-guide",
    name: "Stage Setup Guide",
    title: "How to Set Up an Event Stage | Stage Setup Guide",
    metaDescription:
      "A complete guide to event stage setup. Stage types, sizing, safety requirements, and what to consider when planning your stage build.",
    primaryKeyword: "how to set up event stage",
    headline: "Event Stage Setup: A Complete Guide",
    category: "planning" as const,
    internalLinks: {
      services: ["staging-and-truss"],
      industries: ["product-launches", "fashion-shows"],
      comparisons: [],
    },
  },
  {
    slug: "pipe-drape-design-ideas",
    name: "Pipe & Drape Design Ideas",
    title: "Pipe & Drape Design Ideas | Event Draping Inspiration",
    metaDescription:
      "Creative pipe and drape design ideas for events. Backdrop configurations, color combinations, and how to use draping to transform event spaces.",
    primaryKeyword: "pipe and drape design inspiration",
    headline: "Pipe & Drape Design Ideas for Events",
    category: "inspiration" as const,
    internalLinks: {
      services: ["pipe-and-drape-rental"],
      industries: ["trade-shows", "corporate-events"],
      comparisons: [],
    },
  },
  {
    slug: "event-budget-planning",
    name: "Event Budget Planning",
    title: "How to Budget for Events | Event Planning Budget Guide",
    metaDescription:
      "A complete guide to event budget planning. How to allocate budget across AV, venue, catering, and other event categories.",
    primaryKeyword: "how to budget for events",
    headline: "Event Budget Planning: How to Allocate Your Spend",
    category: "planning" as const,
    internalLinks: {
      services: ["av-production"],
      industries: ["corporate-events", "trade-shows"],
      comparisons: [],
    },
  },
] as const

export type ResourceSlug = (typeof RESOURCES)[number]["slug"]

// ─── COMPARISONS ──────────────────────────────────────────────
export const COMPARISONS = [
  {
    slug: "led-wall-vs-projection",
    name: "LED Wall vs Projection",
    title: "LED Wall vs Projection | Which Is Right for Your Event?",
    metaDescription:
      "LED wall vs projection screen: a complete comparison. Cost, brightness, resolution, setup time, and which is best for different event types.",
    primaryKeyword: "LED wall vs projection",
    headline: "LED Wall vs Projection: Which Is Right for Your Event?",
    internalLinks: {
      services: ["led-wall-rental"],
      resources: ["led-wall-rental-cost", "how-big-should-led-wall-be"],
    },
  },
  {
    slug: "full-service-av-vs-equipment-rental",
    name: "Full Service AV vs Equipment Rental",
    title: "Full Service AV vs Equipment Rental | Which Should You Choose?",
    metaDescription:
      "Full service AV production vs equipment rental: what's the difference, which costs more, and which is right for your event.",
    primaryKeyword: "full service vs rental AV",
    headline: "Full Service AV vs Equipment Rental: What's the Difference?",
    internalLinks: {
      services: ["av-production"],
      resources: ["av-production-cost"],
    },
  },
  {
    slug: "in-house-venue-av-vs-external-av",
    name: "In-House Venue AV vs External",
    title: "Venue AV vs External AV Production | Which to Choose?",
    metaDescription:
      "Should you use the venue's in-house AV or bring in an external AV production company? A complete comparison with cost and quality factors.",
    primaryKeyword: "venue AV vs external production",
    headline: "In-House Venue AV vs External AV Production",
    internalLinks: {
      services: ["av-production"],
      resources: [],
    },
  },
  {
    slug: "live-streaming-vs-in-person",
    name: "Live Streaming vs In-Person",
    title: "Live Streaming vs In-Person Events | Which Is Right?",
    metaDescription:
      "Live streaming vs in-person events: comparing reach, engagement, cost, and technical requirements for different event types.",
    primaryKeyword: "live streaming vs in person events",
    headline: "Live Streaming vs In-Person Events",
    internalLinks: {
      services: ["live-streaming"],
      resources: ["live-streaming-best-practices"],
    },
  },
  {
    slug: "video-production-vendors",
    name: "Video Production Vendors",
    title: "How to Choose a Video Production Vendor | Selection Guide",
    metaDescription:
      "A guide to selecting video production vendors for events. What to look for, questions to ask, and how to evaluate proposals.",
    primaryKeyword: "how to choose video production company",
    headline: "How to Choose a Video Production Vendor",
    internalLinks: {
      services: ["video-production"],
      resources: ["video-production-workflow"],
    },
  },
] as const

export type ComparisonSlug = (typeof COMPARISONS)[number]["slug"]

// ─── PACKAGES ─────────────────────────────────────────────────
export const PACKAGES = [
  {
    slug: "conference-av-package",
    name: "Conference AV Package",
    title: "Conference AV Production Package | Full-Service Production",
    metaDescription:
      "Complete AV production package for conferences. Includes audio, video, LED displays, lighting, live streaming, and technical support.",
    primaryKeyword: "conference AV production package",
    headline: "Complete AV Production for Conferences",
    internalLinks: {
      services: ["av-production", "live-streaming", "led-wall-rental", "sound-system-rental"],
      industries: ["conferences"],
    },
  },
  {
    slug: "fashion-show-production-package",
    name: "Fashion Show Production Package",
    title: "Fashion Show AV Production Package | Runway Lighting & Audio",
    metaDescription:
      "Complete AV and lighting package for fashion shows. Runway lighting, audio systems, and technical production for fashion events.",
    primaryKeyword: "fashion show production package",
    headline: "Fashion Show Production Package",
    internalLinks: {
      services: ["event-lighting", "av-production", "staging-and-truss"],
      industries: ["fashion-shows"],
    },
  },
  {
    slug: "experiential-marketing-av",
    name: "Experiential Marketing AV",
    title: "Experiential Marketing AV Package | Brand Experience Production",
    metaDescription:
      "AV production package for experiential marketing campaigns. Interactive displays, LED installations, sound design, and complete technical production.",
    primaryKeyword: "experiential marketing AV package",
    headline: "Experiential Marketing AV Package",
    internalLinks: {
      services: ["av-production", "led-wall-rental", "video-production"],
      industries: ["experiential-marketing", "brand-activations"],
    },
  },
  {
    slug: "pop-up-event-av",
    name: "Pop-Up Event AV",
    title: "Pop-Up Event AV Production Package | Fast Deploy Production",
    metaDescription:
      "AV production package for pop-up events and temporary venues. Audio, lighting, LED displays, and staging for fast deployment.",
    primaryKeyword: "pop up event AV package",
    headline: "Pop-Up Event AV Package",
    internalLinks: {
      services: ["av-production", "led-wall-rental"],
      industries: ["pop-up-events"],
    },
  },
  {
    slug: "corporate-event-full-production",
    name: "Corporate Event Full Production",
    title: "Corporate Event Full Production Package | Complete AV Solutions",
    metaDescription:
      "Full-service AV production package for corporate events. Audio, video, lighting, staging, and technical support included.",
    primaryKeyword: "corporate event production package",
    headline: "Corporate Event Full Production Package",
    internalLinks: {
      services: ["av-production", "sound-system-rental", "event-lighting", "staging-and-truss"],
      industries: ["corporate-events"],
    },
  },
  {
    slug: "hybrid-event-production",
    name: "Hybrid Event Production",
    title: "Hybrid Event Production Package | Live Streaming & In-Person",
    metaDescription:
      "Complete package for hybrid events. In-person AV production plus live streaming capabilities for remote audiences.",
    primaryKeyword: "hybrid event production package",
    headline: "Hybrid Event Production Package",
    internalLinks: {
      services: ["av-production", "live-streaming"],
      industries: ["conferences"],
    },
  },
  {
    slug: "trade-show-booth-av",
    name: "Trade Show Booth AV",
    title: "Trade Show Booth AV Package | Display & Audio Systems",
    metaDescription:
      "AV package for trade show booths and exhibits. LED displays, audio systems, and interactive technology to make your booth stand out.",
    primaryKeyword: "trade show booth AV package",
    headline: "Trade Show Booth AV Package",
    internalLinks: {
      services: ["av-production", "led-wall-rental", "pipe-and-drape-rental"],
      industries: ["trade-shows"],
    },
  },
  {
    slug: "product-launch-event",
    name: "Product Launch Event",
    title: "Product Launch Event Production Package | Launch AV Production",
    metaDescription:
      "Complete AV production package for product launch events. LED reveals, video playback, audio, lighting, and live streaming.",
    primaryKeyword: "product launch event AV package",
    headline: "Product Launch Event Production Package",
    internalLinks: {
      services: ["av-production", "led-wall-rental", "video-production", "live-streaming"],
      industries: ["product-launches"],
    },
  },
] as const

export type PackageSlug = (typeof PACKAGES)[number]["slug"]

// ─── TOOLS ────────────────────────────────────────────────────
export const TOOLS = [
  {
    slug: "led-wall-calculator",
    name: "LED Wall Calculator",
    title: "LED Wall Size Calculator | Find the Right LED Wall",
    metaDescription:
      "Use our LED wall size calculator to find the right LED wall for your event. Enter your venue dimensions and viewing distance to get a recommendation.",
    primaryKeyword: "LED wall size calculator",
    headline: "LED Wall Size Calculator",
  },
  {
    slug: "stage-builder",
    name: "Stage Builder",
    title: "Stage Setup Builder | Design Your Event Stage",
    metaDescription:
      "Design your event stage with our stage builder tool. Choose dimensions, height, stairs, and extensions to get a custom stage quote.",
    primaryKeyword: "stage setup builder",
    headline: "Event Stage Builder",
  },
  {
    slug: "pipe-drape-builder",
    name: "Pipe & Drape Builder",
    title: "Pipe & Drape Calculator | Design Your Event Draping",
    metaDescription:
      "Design your pipe and drape setup with our builder tool. Choose dimensions, colors, and configurations to get a custom draping quote.",
    primaryKeyword: "pipe and drape calculator",
    headline: "Pipe & Drape Builder",
  },
  {
    slug: "event-av-budget-estimator",
    name: "Event AV Budget Estimator",
    title: "Event AV Cost Estimator | Budget Your AV Production",
    metaDescription:
      "Estimate the cost of AV production for your event. Our budget estimator covers audio, video, lighting, staging, and staffing.",
    primaryKeyword: "event AV cost estimator",
    headline: "Event AV Budget Estimator",
  },
] as const

export type ToolSlug = (typeof TOOLS)[number]["slug"]

// ─── EQUIPMENT ────────────────────────────────────────────────
export const EQUIPMENT_CATEGORIES = [
  { slug: "speakers", name: "Speakers", primaryKeyword: "event speakers rental" },
  { slug: "led-panels", name: "LED Panels", primaryKeyword: "LED panels rental" },
  { slug: "staging", name: "Staging", primaryKeyword: "event staging equipment" },
  { slug: "lighting", name: "Lighting", primaryKeyword: "event lighting equipment" },
  { slug: "microphones", name: "Microphones", primaryKeyword: "event microphones rental" },
  { slug: "rigging", name: "Rigging", primaryKeyword: "truss and rigging rental" },
  { slug: "monitors", name: "Monitors", primaryKeyword: "event display monitors" },
] as const

// ─── INTERNAL LINKING HELPERS ─────────────────────────────────
// Use these to generate internal links — never link to URLs outside this file.

export const NAV_SERVICES = SERVICES.map((s) => ({
  label: s.name,
  href: `/services/${s.slug}`,
}))

export const NAV_INDUSTRIES = INDUSTRIES.map((i) => ({
  label: i.name,
  href: `/industries/${i.slug}`,
}))

export const NAV_LOCATIONS = STATES.map((s) => ({
  label: `${s.state} AV Production`,
  href: `/locations/${s.slug}`,
}))

export const NAV_RESOURCES = RESOURCES.map((r) => ({
  label: r.name,
  href: `/resources/${r.slug}`,
}))

export const NAV_COMPARISONS = COMPARISONS.map((c) => ({
  label: c.name,
  href: `/comparisons/${c.slug}`,
}))

export const NAV_PACKAGES = PACKAGES.map((p) => ({
  label: p.name,
  href: `/packages/${p.slug}`,
}))

export const NAV_TOOLS = TOOLS.map((t) => ({
  label: t.name,
  href: `/tools/${t.slug}`,
}))
