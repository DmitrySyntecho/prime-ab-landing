# PHASE 1 INTERNAL LINKING MAP

## Phase 1 Pages (17 Total)

**Services (8):**
1. av-production
2. led-wall-rental
3. sound-system-rental
4. event-lighting
5. stage-rental
6. pipe-and-drape-rental
7. live-streaming
8. video-production

**Industries (8):**
1. corporate-events
2. conferences
3. trade-shows
4. fashion-shows
5. experiential-marketing
6. brand-activations
7. pop-up-events
8. product-launches

**Homepage (1):**
- `/`

---

## Linking Rules (Phase 1 Only)

### Rule 1: Service Pages Link to Related Industries
Each service page links to 3-4 relevant industries where that service is commonly used.

**av-production** → Links to:
- /industries/corporate-events
- /industries/conferences
- /industries/fashion-shows
- /industries/product-launches

**led-wall-rental** → Links to:
- /industries/trade-shows
- /industries/fashion-shows
- /industries/experiential-marketing
- /industries/product-launches

**sound-system-rental** → Links to:
- /industries/corporate-events
- /industries/conferences
- /industries/trade-shows
- /industries/pop-up-events

**event-lighting** → Links to:
- /industries/fashion-shows
- /industries/experiential-marketing
- /industries/pop-up-events
- /industries/product-launches

**stage-rental** → Links to:
- /industries/conferences
- /industries/trade-shows
- /industries/experiential-marketing
- /industries/brand-activations

**pipe-and-drape-rental** → Links to:
- /industries/corporate-events
- /industries/fashion-shows
- /industries/trade-shows
- /industries/brand-activations

**live-streaming** → Links to:
- /industries/corporate-events
- /industries/conferences
- /industries/pop-up-events

**video-production** → Links to:
- /industries/brand-activations
- /industries/product-launches
- /industries/experiential-marketing

---

### Rule 2: Industry Pages Link Back to Related Services
Each industry page links to 3-4 relevant services that support that vertical.

**corporate-events** → Links to:
- /services/av-production
- /services/sound-system-rental
- /services/pipe-and-drape-rental

**conferences** → Links to:
- /services/av-production
- /services/sound-system-rental
- /services/stage-rental
- /services/live-streaming

**trade-shows** → Links to:
- /services/led-wall-rental
- /services/stage-rental
- /services/sound-system-rental
- /services/pipe-and-drape-rental

**fashion-shows** → Links to:
- /services/led-wall-rental
- /services/event-lighting
- /services/stage-rental
- /services/pipe-and-drape-rental

**experiential-marketing** → Links to:
- /services/video-production
- /services/event-lighting
- /services/led-wall-rental

**brand-activations** → Links to:
- /services/video-production
- /services/stage-rental
- /services/led-wall-rental

**pop-up-events** → Links to:
- /services/event-lighting
- /services/sound-system-rental
- /services/live-streaming
- /services/stage-rental

**product-launches** → Links to:
- /services/av-production
- /services/led-wall-rental
- /services/event-lighting
- /services/video-production

---

### Rule 3: Homepage Links
Homepage links to key Phase 1 pages to distribute authority and guide user navigation.

**Homepage (/)** → Links to:
- **Services section:** /services/av-production (hub) + all 8 service pages
- **Industries section:** /industries/corporate-events (hub) + all 8 industry pages
- **Quote CTA:** /quote

---

## Internal Link Anchor Text Strategy (Phase 1)

All links use descriptive, keyword-rich anchor text:

### Service Page Anchors (from Industry pages)
- "led wall rental" → /services/led-wall-rental
- "AV production services" → /services/av-production
- "sound system rental for events" → /services/sound-system-rental
- "professional event lighting" → /services/event-lighting
- "stage and staging rental" → /services/stage-rental
- "pipe and drape rental services" → /services/pipe-and-drape-rental
- "live streaming production" → /services/live-streaming
- "professional video production" → /services/video-production

### Industry Page Anchors (from Service pages)
- "corporate event production" → /industries/corporate-events
- "conference AV production" → /industries/conferences
- "trade show AV rental" → /industries/trade-shows
- "fashion show production" → /industries/fashion-shows
- "experiential marketing solutions" → /industries/experiential-marketing
- "brand activation events" → /industries/brand-activations
- "pop-up event setup" → /industries/pop-up-events
- "product launch production" → /industries/product-launches

---

## Link Volume Summary (Phase 1)

| Page Type | Count | Outbound Links | Total Link Volume |
|-----------|-------|-----------------|-------------------|
| Service | 8 | 3-4 | 28-32 outbound |
| Industry | 8 | 3-4 | 24-32 outbound |
| Homepage | 1 | 16 | 16 outbound |
| **TOTAL** | **17** | | **68-80 total links** |

---

## Linking Rules (What NOT to Do in Phase 1)

❌ Do NOT link to Phase 2/3 pages:
- No location pages (/locations/florida, etc.)
- No resource pages (/resources/av-production-cost, etc.)
- No comparison pages (/comparisons/led-wall-vs-projection, etc.)
- No equipment pages (/equipment/k2-speaker, etc.)
- No package pages (/packages/conference-av-package, etc.)
- No tool pages (/tools/led-wall-calculator, etc.)

❌ Do NOT cross-link within same category:
- Service pages don't link to other service pages (except homepage)
- Industry pages don't link to other industry pages

✅ Do link bidirectionally:
- If Service X links to Industry Y, then Industry Y links back to Service X
- All links are reciprocal relationships

---

## Phase 1 Data Structure Example

Each page in sitemap-data.ts will include:

```typescript
{
  slug: "av-production",
  title: "AV Production Services | Prime Line AV",
  description: "Full-service audio, video, lighting production...",
  keywords: "AV production, audio video production, event AV services",
  internalLinks: [
    { url: "/industries/corporate-events", text: "corporate event production" },
    { url: "/industries/conferences", text: "conference AV production" },
    { url: "/industries/fashion-shows", text: "fashion show AV services" },
    { url: "/industries/product-launches", text: "product launch production" },
    { url: "/quote", text: "request a quote" }
  ]
}
```
