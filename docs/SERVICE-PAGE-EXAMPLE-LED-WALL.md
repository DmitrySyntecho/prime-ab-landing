# SERVICE PAGE EXAMPLE: LED Wall Rental
## Demonstration of Service Page Template

**URL:** `/services/led-wall-rental`

**Data Source:** `SERVICES` array in `/lib/sitemap-data.ts`

---

## Complete Page Structure & Rendering

### Section 1: HERO
```
Background: /images/dji-0996.jpeg with gradient overlay
Breadcrumb: Home / Services / LED Wall Rental
Badge: "LED Wall Rental"

Headline: 
"LED Wall Rental — Professional Displays for Any Event"

Subheadline: 
"High-resolution indoor and outdoor LED walls, expertly installed and managed by our experienced AV team."

CTA Buttons:
- Primary: "Start Your Quote" → Opens quote form
- Secondary: "(786) 883-9070" → Phone call

Video: Vidalytics embed (service demo video)
```

**Data Used:**
- `service.headline`
- `service.subheadline`
- Static video embed

---

### Section 2: TRUSTED BY
```
Automatically displays Prime Line AV's client logos
(Company logos carousel)
```

---

### Section 3: TESTIMONIALS
```
Automatically displays video testimonials carousel
(Testimonial videos from past clients)
```

---

### Section 4: SERVICE OVERVIEW
```
Title: "What This Service Covers"

Content: 
"We provide indoor and outdoor LED wall rental for any event type. From small corporate meetings to large-scale brand activations, our LED displays deliver stunning visual impact. We handle everything: equipment selection, delivery, installation, content management, technical support, and post-event breakdown. Our inventory includes industry-leading brands like Unilumin, Absen, and ROE Visual in resolutions ranging from P1.5 (ultra-HD) to P6 (outdoor events)."

Data Used:
- `service.intro` (paragraph from sitemap-data.ts)
```

---

### Section 5: EQUIPMENT SECTION ✨ NEW
```
Title: "Professional Equipment for LED Wall Rental"
Subtitle: "We use industry-leading equipment and brands to deliver superior results."

Equipment Grid (3 columns):

1. LED Panels & Displays
   - Cards link to: /equipment/led-panels
   - Specs: Indoor & outdoor solutions from P2 to P10

2. Video Management Systems
   - Cards link to: /equipment/video-switchers
   - Specs: Content management and playback systems

3. Rigging & Mounting Systems
   - Cards link to: /equipment/led-rigging
   - Specs: Professional mounting and positioning hardware

Data Relationship:
- Links to `/equipment/[slug]` pages
- Shows specific equipment used for this service
```

---

### Section 6: INDUSTRIES WE SUPPORT
```
Title: "LED Wall Rental for Every Industry"

Industry Grid (4 columns on desktop):
- Corporate Events → /industries/corporate-events
- Conferences → /industries/conferences
- Trade Shows → /industries/trade-shows
- Product Launches → /industries/product-launches
- Fashion Shows → /industries/fashion-shows
- Brand Activations → /industries/brand-activations
- Experiential Marketing → /industries/experiential-marketing
- Pop-Up Events → /industries/pop-up-events

Data Used:
- `NAV_INDUSTRIES` (all 8 industries)
```

---

### Section 7: CITIES WE SERVE
```
Title: "LED Wall Rental Nationwide"
Subtitle: "We deploy to events across the country. Select your state to learn more about our coverage."

Location Grid (5 columns on desktop):
- Florida → /locations/florida
- California → /locations/california
- Texas → /locations/texas
- New York → /locations/new-york
- (... all 15 states)

Data Used:
- `NAV_LOCATIONS` (all states)
```

---

### Section 8: PLANNING RESOURCES
```
Title: "Planning Resources"

3-Column Grid:

1. LED Wall Rental Cost
   Link: /resources/led-wall-rental-cost
   CTA: "Read guide"

2. How Big Should Your LED Wall Be?
   Link: /resources/how-big-should-led-wall-be
   CTA: "Read guide"

3. LED Wall Best Practices
   Link: /resources/led-wall-best-practices
   CTA: "Read guide"

Data Used:
- `service.internalLinks.resources` (2-3 relevant resources from sitemap-data)
```

---

### Section 9: COMPARISONS
```
Title: "Making the Right Decision"

3-Column Grid:

1. LED Wall vs Projection
   Link: /comparisons/led-wall-vs-projection
   Description: Brightness, resolution, cost comparison
   CTA: "Read comparison"

2. Indoor vs Outdoor LED Walls
   Link: /comparisons/indoor-vs-outdoor-led
   CTA: "Read comparison"

3. LED Wall vs Large Monitors
   Link: /comparisons/led-wall-vs-monitors
   CTA: "Read comparison"

Data Used:
- `NAV_COMPARISONS` (relevant comparison pages)
```

---

### Section 10: PRODUCTION PACKAGES
```
Title: "Ready-to-Book Packages"

4-Column Grid:

1. Trade Show Booth AV
   Link: /packages/trade-show-booth-av
   CTA: "View package"

2. Product Launch Event
   Link: /packages/product-launch-event
   CTA: "View package"

3. Brand Activation AV
   Link: /packages/experiential-marketing-av
   CTA: "View package"

4. Hybrid Event Production
   Link: /packages/hybrid-event-production
   CTA: "View package"

Data Used:
- `NAV_PACKAGES` (packages that include this service)
- `service.internalLinks.packages` (primary packages)
```

---

### Section 11: PROCESS/WORKFLOW ✨ NEW
```
Title: "Our LED Wall Rental Workflow"
Subtitle: "From initial consultation to post-event breakdown, here's how we deliver flawless production."

8-Step Timeline:

1️⃣  Initial Consultation
    → Discuss event goals, venue, budget, technical requirements

2️⃣  Site Assessment & Design
    → Visit venue, assess lighting conditions, create technical design plan

3️⃣  3D Rendering & Proposal
    → Deliver 3D renderings, equipment specs, timeline, comprehensive proposal

4️⃣  Client Approval & Booking
    → Confirm date, secure equipment, confirm specifications

5️⃣  Pre-Event Technical Meeting
    → Final walkthrough with client team, confirm setup locations, power requirements

6️⃣  Setup & Technical Rehearsal
    → Early arrival, complete setup, testing, calibration, rehearsal

7️⃣  Live Event Management
    → Dedicated technicians manage AV during event, monitor equipment, respond to needs

8️⃣  Post-Event Breakdown
    → Complete equipment breakdown, striking, professional wrap-up

Visualization:
- Each step has a numbered circle (1-8)
- Step title
- Step description
- Vertical flow layout on mobile, horizontal on desktop

Data Used:
- `service.process` array (to be added to sitemap-data.ts)
```

---

### Section 12: FAQ ✨ NEW
```
Title: "Common Questions About LED Wall Rental"

Accordion (8-10 FAQs):

Q: How much does LED wall rental cost?
A: Pricing varies based on wall size, resolution, duration, and venue. We provide customized quotes after understanding your needs...

Q: What's included in your LED wall rental service?
A: Our complete service includes equipment rental, delivery/setup, on-site technical management, operator support, and post-event breakdown...

Q: Can you service outdoor events with LED walls?
A: Yes! We have extensive experience with outdoor events. We provide weatherproof equipment, backup power systems, and contingency planning...

Q: What happens if equipment fails during the event?
A: We carry backup equipment for all critical components. Our technicians perform thorough pre-event testing...

Q: How far in advance should we book LED wall rental?
A: We recommend booking 4-6 weeks in advance for optimal availability. For urgent requests, contact us immediately...

Q: Do you provide technical support during the event?
A: Absolutely. We provide dedicated on-site technicians throughout your entire event...

Q: What resolution LED wall should I choose for my venue?
A: This depends on viewing distance. P2 indoors for close viewing, P3-P5 for medium distance, P6-P10 for outdoor/far viewing...

Q: Can you load custom content onto LED walls?
A: Yes! We handle all content management, video playback, and can work with your creative team's digital assets...

Data Used:
- `service.faqs` array (to be added to sitemap-data.ts)
- Dynamically rendered with service name in questions/answers
```

---

### Section 13: RELATED SERVICES
```
Title: "Related Services"

4-Column Grid (auto-filtered, excludes current service):
- Sound System Rental
- Event Lighting
- Video Production
- Pipe & Drape Rental

Data Used:
- `SERVICES` array (filter out current service)
```

---

### Section 14: FINAL CTA
```
Background: Dark (bg-[#0B1217])

Heading: "Ready to Talk About LED Wall Rental?"

Description: 
"Share your event details and our team will follow up with a tailored proposal."

CTA Button: 
"Start Your Quote" → Opens quote form

Also includes: StickyCTA component (sticky footer button)
```

---

## Data Structure in sitemap-data.ts

```typescript
{
  slug: "led-wall-rental",
  name: "LED Wall Rental",
  title: "LED Wall Rental | Professional LED Displays for Events",
  metaDescription: "Rent professional LED walls for events. Indoor & outdoor displays, expert installation, content management. Nationwide service.",
  primaryKeyword: "LED wall rental",
  headline: "LED Wall Rental — Professional Displays for Any Event",
  subheadline: "High-resolution indoor and outdoor LED walls, expertly installed and managed by our experienced AV team.",
  intro: "We provide indoor and outdoor LED wall rental for any event type...",
  
  // INTERNAL LINKING CLUSTER
  internalLinks: {
    industries: [
      "corporate-events",
      "trade-shows",
      "product-launches",
      "experiential-marketing",
    ],
    resources: [
      "led-wall-rental-cost",
      "how-big-should-led-wall-be",
    ],
    packages: [
      "trade-show-booth-av",
      "product-launch-event",
    ],
    topCities: [
      "miami-av-production",
      "los-angeles-av-production",
    ],
  },

  // EQUIPMENT USED FOR THIS SERVICE (NEW)
  equipment: [
    { slug: "p2-led-panel", name: "P2 Indoor LED Panels" },
    { slug: "p3-91-led-panel", name: "P3.91 Outdoor LED Panels" },
    { slug: "p5-led-panel", name: "P5 Large Venue LED Panels" },
  ],

  // PROCESS WORKFLOW (NEW)
  process: [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Discuss event goals, venue, budget, and technical requirements...",
    },
    // ... 7 more steps
  ],

  // SERVICE-SPECIFIC FAQS (NEW)
  faqs: [
    {
      question: "How much does LED wall rental cost?",
      answer: "Pricing varies based on wall size, resolution, duration...",
    },
    // ... 7-9 more FAQs
  ],
}
```

---

## SEO Clustering Effect

By linking strategically, `/services/led-wall-rental` creates authority across multiple keyword clusters:

**Cluster 1: Equipment**
- Links to: `/equipment/p2-led-panel`, `/equipment/p3-led-panel`, etc.
- Keywords: "LED panel rental", "P2 LED panels", "outdoor LED displays"

**Cluster 2: Industries**
- Links to: `/industries/corporate-events`, `/industries/trade-shows`, etc.
- Keywords: "LED walls for trade shows", "LED displays for corporate events"

**Cluster 3: Locations**
- Links to: `/locations/florida`, `/locations/california`, etc.
- Keywords: "LED wall rental Miami", "LED wall rental Los Angeles"

**Cluster 4: Decision-Making**
- Links to: `/comparisons/led-wall-vs-projection`, `/resources/led-wall-rental-cost`
- Keywords: "LED wall vs projection", "LED wall cost"

**Cluster 5: Packages**
- Links to: `/packages/trade-show-booth-av`, `/packages/product-launch-event`
- Keywords: "LED wall packages", "trade show production packages"

This interconnected structure ensures Google recognizes the service page as a topical authority for LED wall rental across all these keyword variations.

---

## Current Implementation Status

**Live Now:** 
✓ Hero section
✓ Industries  
✓ Locations
✓ Resources
✓ Comparisons
✓ Packages
✓ Related services
✓ Final CTA

**Just Added:**
✓ Equipment section
✓ Process/workflow timeline
✓ Service-specific FAQ accordion

**Still Needed:**
- Add `equipment` field to each service in sitemap-data.ts
- Add `process` field to each service in sitemap-data.ts
- Add `faqs` field to each service in sitemap-data.ts
