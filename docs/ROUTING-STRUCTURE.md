# ROUTING STRUCTURE

## Directory Organization

```
/app
  /services
    /[slug]
      page.tsx          # Dynamic route: /services/av-production, etc.
  /industries
    /[slug]
      page.tsx          # Dynamic route: /industries/corporate-events, etc.
  /locations
    /[state]
      page.tsx          # Dynamic route: /locations/florida, /locations/california, etc.
      /[city]
        page.tsx        # Dynamic route: /locations/florida/miami, etc.
  /resources
    /[slug]
      page.tsx          # Dynamic route: /resources/av-production-cost, etc.
  /comparisons
    /[slug]
      page.tsx          # Dynamic route: /comparisons/led-wall-vs-projection, etc.
  /equipment
    /[slug]
      page.tsx          # Dynamic route: /equipment/k2-speaker, etc.
  /packages
    /[slug]
      page.tsx          # Dynamic route: /packages/conference-av-package, etc.
  /tools
    /[slug]
      page.tsx          # Dynamic route: /tools/led-wall-calculator, etc.
```

---

## Data Layer Organization

All page metadata lives in a centralized data structure:

```
/lib/sitemap-data.ts
  ├── services: Service[]
  ├── industries: Industry[]
  ├── locations: Location[]
  ├── resources: Resource[]
  ├── comparisons: Comparison[]
  ├── equipment: Equipment[]
  ├── packages: Package[]
  └── tools: Tool[]
```

Each page object contains:
- `slug` - URL identifier
- `title` - Page title (SEO)
- `description` - Meta description
- `keywords` - Primary keywords
- `content` - Page sections/blocks
- `internalLinks` - Array of approved internal links to other pages

---

## Phase 1 Route Configuration

### Services Routes (8 pages)
- `/services/av-production`
- `/services/led-wall-rental`
- `/services/sound-system-rental`
- `/services/event-lighting`
- `/services/staging-and-truss`
- `/services/pipe-and-drape-rental`
- `/services/live-streaming`
- `/services/video-production`

### Industries Routes (8 pages)
- `/industries/corporate-events`
- `/industries/conferences`
- `/industries/trade-shows`
- `/industries/fashion-shows`
- `/industries/experiential-marketing`
- `/industries/brand-activations`
- `/industries/pop-up-events`
- `/industries/product-launches`

### Phase 2+ Routes (Locked, not implemented yet)
- `/locations/[state]/` - State pages
- `/locations/[state]/[city]-av-production` - City pages
- `/resources/[slug]/` - Resource pages
- `/comparisons/[slug]/` - Comparison pages
- `/equipment/[slug]/` - Equipment pages
- `/packages/[slug]/` - Package pages
- `/tools/[slug]/` - Tool pages

---

## generateStaticParams Implementation

All dynamic routes require `generateStaticParams()` to pre-render pages at build time:

```typescript
// /app/services/[slug]/page.tsx
export async function generateStaticParams() {
  return services.map(s => ({ slug: s.slug }))
}

// /app/industries/[slug]/page.tsx
export async function generateStaticParams() {
  return industries.map(i => ({ slug: i.slug }))
}

// /app/locations/[state]/page.tsx
export async function generateStaticParams() {
  return states.map(s => ({ state: s.slug }))
}

// /app/locations/[state]/[city]/page.tsx
export async function generateStaticParams() {
  const all = []
  for (const state of states) {
    for (const city of state.cities) {
      all.push({ state: state.slug, city: city.slug })
    }
  }
  return all
}
```

---

## URL Naming Conventions

- **Kebab-case** for all slugs (e.g., `led-wall-rental`, `corporate-events`)
- **No numbers** in URLs (focus on clarity over brevity)
- **Descriptive suffixes** where helpful:
  - Services: `*-rental`, `*-production`, `*-engineering`
  - Resources: `*-cost`, `*-guide`, `*-planning`, `*-checklist`
  - Comparisons: `*-vs-*` format
  - Tools: `*-calculator`, `*-builder`, `*-estimator`

---

## Canonical URLs

All pages must include canonical tags to prevent duplicate content:

```typescript
export const metadata: Metadata = {
  canonical: `https://primelineav.com${pathname}`,
}
```
