# SERVICE PAGE TEMPLATE SPECIFICATION

## Overview
Service pages are the core conversion-focused templates for Prime Line AV's 8 Phase 1 services. Each service page follows a consistent structure with 10 core sections, optimized for SEO clustering and user conversion.

---

## Template Structure (10 Sections)

### 1. Hero Section
**Purpose:** Establish service value immediately and drive CTAs.

**Components Used:**
- Background image with gradient overlay
- Breadcrumb navigation
- Service badge/label
- Headline (from `service.headline`)
- Subheadline (from `service.subheadline`)
- Primary CTA button: "Start Your Quote"
- Secondary CTA button: Phone call
- Video embed container (Vidalytics)

**Data Source:** `SERVICES` array in `sitemap-data.ts`

---

### 2. Service Overview (Intro Section)
**Purpose:** Explain what the service covers in detail.

**Components Used:**
- Centered text block
- `service.intro` paragraph from data

**Layout:** Max-width container, centered text, bg-white

---

### 3. Equipment Section
**Purpose:** Show specific equipment used for this service.

**Components Used:**
- Equipment grid (3-4 items)
- Equipment cards with images/icons
- Links to `/equipment/[slug]`

**Example Equipment Cards:**
- LED Panels (with image)
- Speakers/PA Systems
- Lighting Fixtures
- Truss Systems

**Data Relationship:** Link to equipment pages based on `service.equipment` array (to be added to sitemap-data.ts)

---

### 4. Industries We Support
**Purpose:** Show which industries benefit from this service (SEO clustering).

**Components Used:**
- Section header with green accent
- Industry grid (4 columns on desktop, 2 on mobile)
- Industry cards linking to `/industries/[slug]`
- Uses `service.internalLinks.industries` from sitemap-data

**Current Implementation:** Already in existing service page (working well)

---

### 5. Cities We Serve
**Purpose:** Location-based SEO content for geographic targeting.

**Components Used:**
- State/city grid
- Location cards
- Links to `/locations/[state]/[city]-av-production`
- Uses `NAV_LOCATIONS` data

**Current Implementation:** Already in existing service page (working well)

---

### 6. Planning Resources
**Purpose:** Drive engagement with educational/comparison content.

**Components Used:**
- 3-column resource grid
- Resource cards with icons/images
- Links to `/resources/[slug]`
- Uses `service.internalLinks.resources` from sitemap-data

**Current Implementation:** Already in existing service page (working well)

---

### 7. Comparisons Section
**Purpose:** Help prospects understand competitive positioning.

**Components Used:**
- 3-column comparison grid
- Comparison cards
- Links to `/comparisons/[slug]`
- Uses relevant comparisons from `NAV_COMPARISONS`

**Current Implementation:** Already in existing service page (working well)

---

### 8. Production Packages
**Purpose:** Drive immediate sales with pre-configured packages.

**Components Used:**
- 4-column package grid
- Package cards
- Links to `/packages/[slug]`
- Uses `service.internalLinks.packages` from sitemap-data

**Current Implementation:** Already in existing service page (working well)

---

### 9. Process/Workflow Section
**NEW SECTION** - Currently missing from template

**Purpose:** Build trust by showing transparent, professional workflow.

**Components To Create:**
- Timeline/process visualization
- 5-7 step process (sequential numbers)
- Step descriptions
- Icons for each step

**Typical Process for AV Services:**
1. Initial Consultation & Site Assessment
2. Design & 3D Rendering
3. Equipment Selection & Planning
4. Client Approval & Proposal
5. Pre-Event Technical Meeting
6. Event Day Setup & Testing
7. Live Event Management
8. Post-Event Breakdown & Wrap

**Data Needed:** Add `process` array to each service in sitemap-data.ts

---

### 10. FAQ Section (Service-Specific)
**NEW SECTION** - Currently missing from template

**Purpose:** Address objections and boost SEO with Q&A content.

**Components Used:**
- Accordion component (already exists as `FAQSection`)
- 8-12 FAQs specific to the service
- Service-specific questions

**Example FAQs for LED Wall Rental:**
- "What's the difference between indoor and outdoor LED walls?"
- "How much does LED wall rental cost?"
- "What's the minimum rental period?"
- "Can you provide custom content loading?"
- "What if something goes wrong during the event?"

**Data Needed:** Add `faqs` array to each service in sitemap-data.ts

---

### 11. Related Services (Bonus)
**Purpose:** Cross-sell and keep users on site.

**Components Used:**
- 4-column service grid
- Related service cards (auto-filtered)
- Links to related services

**Current Implementation:** Already in existing service page (working well)

---

### 12. Final CTA Section
**Purpose:** Last-chance conversion block.

**Components Used:**
- Dark background (bg-[#0B1217])
- Centered heading with service name
- Description paragraph
- Primary CTA button
- StickyCTA component

**Current Implementation:** Already in existing service page (working well)

---

## Components Used

### Existing & Integrated:
- `TrustedBySection` - Client logos carousel
- `TestimonialsCarousel` - Video testimonials
- `QuoteForm` - Multi-step lead capture
- `StickyCTA` - Sticky footer conversion button
- `Accordion` (from UI components) - FAQ section

### New Components Needed:
- `ServiceProcessSection` - Timeline/steps visualization
- `ServiceFAQSection` - Service-specific FAQs with data mapping

---

## Data Structure Update Needed

Each service in `sitemap-data.ts` needs to be enhanced:

```typescript
{
  slug: "led-wall-rental",
  name: "LED Wall Rental",
  title: "...",
  metaDescription: "...",
  primaryKeyword: "...",
  headline: "...",
  subheadline: "...",
  intro: "...",
  // NEW FIELDS:
  equipment: [
    { slug: "p2-led-panel", name: "P2 Indoor LED Panels" },
    { slug: "p3-91-led-panel", name: "P3.91 Outdoor LED Panels" },
    // ... more equipment
  ],
  process: [
    { step: 1, title: "Consultation", description: "..." },
    // ... 7 more steps
  ],
  faqs: [
    { question: "...", answer: "..." },
    // ... 11 more FAQs
  ],
  internalLinks: {
    industries: [...],
    resources: [...],
    packages: [...],
    topCities: [...],
  },
}
```

---

## SEO Clustering Architecture

Each service page creates clusters by linking to:
1. **Industries** (4-5 industries that use this service)
2. **Resources** (2-3 relevant planning guides)
3. **Packages** (2-3 packages that include this service)
4. **Equipment** (3-4 specific equipment items used)
5. **Locations** (5+ major cities where service is offered)
6. **Related Services** (2-3 complementary services)

This creates an interconnected network where each page reinforces authority for related keywords.

---

## Implementation Status

### Complete ✓
- Hero section with video
- Service overview
- Industries section
- Locations section
- Resources section
- Comparisons section
- Packages section
- Related services section
- Final CTA section
- Sticky CTA & Quote form

### To Add
- Equipment section with equipment page links
- Process/workflow timeline
- Service-specific FAQ section
- Equipment data field in sitemap-data.ts
- Process data field in sitemap-data.ts
- FAQ data field in sitemap-data.ts

---

## Page Route

All service pages render from: `/app/services/[slug]/page.tsx` (dynamic route)

Example URLs:
- `/services/led-wall-rental`
- `/services/sound-system-rental`
- `/services/event-lighting`
- `/services/staging-and-truss`
- `/services/pipe-and-drape-rental`
- `/services/live-streaming`
- `/services/video-production`
- `/services/av-production`
