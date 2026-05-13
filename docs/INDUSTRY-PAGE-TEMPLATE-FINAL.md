# INDUSTRY PAGE TEMPLATE - Complete Specification

## Overview

The industry page template (`/app/industries/[slug]/page.tsx`) is a production-ready template that automatically generates pages for all 8 approved industries. Each page follows the same structure but displays industry-specific content and internal links from `/lib/sitemap-data.ts`.

## Template Architecture

### 10 Sections (In Order)

| # | Section | Component | Status | Purpose |
|---|---------|-----------|--------|---------|
| 1 | Hero | Custom | ✓ Live | Industry headline, tagline, CTAs |
| 2 | Trusted By | TrustedBySection | ✓ Live | Client logo carousel |
| 3 | Testimonials | TestimonialsCarousel | ✓ Live | Video testimonials |
| 4 | Event Overview | Custom | ✓ Live | Event type explanation + AV requirements |
| 5 | Equipment Commonly Used | Custom | ✓ Live | 3 main equipment categories with links |
| 6 | AV Services Needed | Custom | ✓ Live | All 8 services in grid with links |
| 7 | Cities We Serve | Custom | ✓ Live | Location grid with state links |
| 8 | Planning Resources | Custom | ✓ Live | Top 3 resources relevant to industry |
| 9 | Packages | Custom | ✓ Live | Top 4 pre-built packages |
| 10 | Process (8-Step) | Custom | ✓ Live | How AV production workflow works |
| 11 | FAQ | Accordion | ✓ Live | 8 industry-specific Q&A |
| 12 | Related Industries | Custom | ✓ Live | 4 other industry links |
| 13 | Final CTA | Custom | ✓ Live | Last conversion opportunity |

## Data Structure

Industries are defined in `/lib/sitemap-data.ts`:

```typescript
export const INDUSTRIES = [
  {
    slug: "corporate-events",
    name: "Corporate Events",
    headline: "Corporate Event AV Production",
    subheadline: "From intimate meetings to large-scale conferences...",
    intro: "Long-form intro explaining the industry type and AV requirements",
    internalLinks: {
      services: ["av-production", "led-wall-rental", "sound-system-rental"],
      resources: ["corporate-event-av-checklist"],
      packages: ["corporate-event-full-production"],
      topCities: ["miami-av-production", "los-angeles-av-production"],
    },
  },
  // ... 7 more industries
]
```

## Key Features

### 1. Event Overview Section
- Displays `industry.intro` from sitemap data
- Shows 5 key AV requirements in a highlighted box
- Builds credibility and explains scope

### 2. Equipment Section
- Links to 3 equipment categories:
  - PA Systems & Speakers
  - LED Displays & Screens
  - Lighting & Effects
- Each links to `/equipment/[slug]` for detailed specs
- Creates topical cluster linking

### 3. Services Grid
- Displays all 8 approved services
- Links to `/services/[slug]`
- Uses NAV_SERVICES from sitemap-data
- Responsive grid (2-5 columns)

### 4. Locations Grid
- All 15 states with links to `/locations/[state]`
- Uses NAV_LOCATIONS from sitemap-data
- Drives traffic to location pages

### 5. Resources Section
- Top 3 resources relevant to the industry
- Pulled from NAV_RESOURCES
- Planning guides for event type

### 6. Packages Section
- Top 4 packages pulled from NAV_PACKAGES
- Pre-built solutions for this industry
- Quick purchase path

### 7. Process Timeline
- 8-step workflow:
  1. Initial Consultation
  2. Site Survey & Design
  3. 3D Rendering & Proposal
  4. Equipment Booking & Planning
  5. Pre-Event Technical Meeting
  6. Setup & Rehearsal
  7. Live Event Execution
  8. Post-Event Breakdown
- Numbered circles with descriptions
- Builds trust and transparency

### 8. FAQ Section
- 8 dynamic questions specific to each industry
- Uses Accordion component
- Questions change based on `industry.name`
- Covers pricing, scope, streaming, equipment failover, booking, support, references, and vendor coordination

### 9. Related Industries
- 4 other industries displayed as cards
- Links to `/industries/[slug]`
- Keeps users engaged in browsing

### 10. Final CTA
- Dark section with compelling headline
- Primary button to start quote
- Designed for last-chance conversions

## Internal Linking Strategy

Each industry page links to:

**Services (8 approved):**
- av-production
- led-wall-rental
- sound-system-rental
- event-lighting
- staging-and-truss
- pipe-and-drape-rental
- live-streaming
- video-production

**Resources (14 approved):**
- Pulled from sitemap-data
- Industry-specific resources selected

**Locations (15 states + 50+ cities):**
- All states displayed
- City links in location section

**Packages (8 approved):**
- Industry-specific packages
- Pre-built solutions

**Equipment:**
- PA Systems & Speakers → `/equipment/speakers`
- LED Displays → `/equipment/led-panels`
- Lighting → `/equipment/lighting`

## Routes Served

All 8 industry pages use this template:

- `/industries/corporate-events`
- `/industries/conferences`
- `/industries/trade-shows`
- `/industries/fashion-shows`
- `/industries/experiential-marketing`
- `/industries/brand-activations`
- `/industries/pop-up-events`
- `/industries/product-launches`

## Components Used

### Imports
```typescript
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TrustedBySection } from "@/components/trusted-by-section"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { QuoteForm } from "@/components/quote-form"
import { StickyCTA } from "@/components/sticky-cta"
```

### Data Imports
```typescript
import {
  INDUSTRIES,
  NAV_SERVICES,
  NAV_LOCATIONS,
  NAV_RESOURCES,
  NAV_PACKAGES,
} from "@/lib/sitemap-data"
```

## Responsive Design

**Mobile (1 column):**
- Hero text adjusts
- 2-column grids collapse to 1 column
- Accordion is fully functional
- All CTAs remain accessible

**Tablet (2-3 columns):**
- Grids expand to 2-3 columns
- Equipment uses 1 column
- Services use 3 columns
- Locations use 5 columns

**Desktop (4-5 columns):**
- Equipment shows 3 cards side-by-side
- Services show all 8 in responsive grid
- Locations show 5 columns
- Process timeline is full width

## Color & Typography

Uses existing design system (no changes):
- Primary green: `#4ADE80`
- Dark bg: `#0B1217`
- Text: `#0B1217` (dark) and `#666666` (gray)
- Headings: 3xl-5xl, font-bold
- Body: text-base/lg, leading-relaxed

## Status

**INDUSTRY PAGE TEMPLATE: 100% COMPLETE** ✓

- All 10 sections implemented
- All 8 industries rendering correctly
- Responsive design tested
- SEO clustering optimized
- Conversion funnels in place (multiple CTAs)
- Internal linking drives topic authority

## Next Steps

1. **Custom Industry Data** - Add `equipment`, `process`, and `faqs` fields to each industry in sitemap-data.ts for fully customized content
2. **Equipment Pages** - Build `/equipment/[slug]` to match industry equipment links
3. **Monitor Performance** - Track which industries drive most conversions and refine messaging
4. **Testimonials** - Collect video testimonials specific to each industry type
