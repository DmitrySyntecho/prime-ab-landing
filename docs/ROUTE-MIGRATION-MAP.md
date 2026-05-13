# ROUTE MIGRATION MAP v2.0
## Prime Line AV - Approved with Adjustments

---

## APPROVED SEO ROUTES - FINAL STRUCTURE

```
/ (Homepage)
/services/[slug] - 8 approved services
/industries/[slug] - 8 approved industries
/locations - Locations index page (NEW)
/locations/[state] - 15 state pages
/locations/[state]/[city]-av-production - 50+ city pages (ADJUSTED FORMAT)
/resources/[slug] - 14 approved resources
/comparisons/[slug] - 5 approved comparisons
/packages/[slug] - 8 approved packages
/tools/[slug] - 4 approved tools
/equipment/[category] - Equipment category pages
/equipment/[category]/[product] - Equipment product pages
```

---

## APPROVED SERVICES (8 Total)

| Slug | Name | Notes |
|------|------|-------|
| av-production | AV Production | Core service hub |
| led-wall-rental | LED Wall Rental | |
| sound-system-rental | Sound System Rental | Consolidates speakers + microphones |
| event-lighting | Event Lighting | |
| staging-and-truss | Staging & Truss | RENAMED from stage-rental |
| pipe-and-drape-rental | Pipe & Drape Rental | |
| live-streaming | Live Streaming | |
| video-production | Video Production | |

---

## APPROVED CITY URL FORMAT

**Pattern:** `/locations/[state]/[city]-av-production`

**Examples:**
- `/locations/florida/miami-av-production`
- `/locations/california/los-angeles-av-production`
- `/locations/new-york/new-york-city-av-production`
- `/locations/texas/houston-av-production`

---

## EQUIPMENT ROUTING - HIERARCHICAL STRUCTURE

```
/equipment/speakers
├── /equipment/speakers/l-acoustics-k2
├── /equipment/speakers/qsc-k12
├── /equipment/speakers/meyer-sound-lyon
└── /equipment/speakers/mackie-thump

/equipment/led-panels
├── /equipment/led-panels/p2-6-indoor
├── /equipment/led-panels/p3-91-outdoor
├── /equipment/led-panels/p5-outdoor
└── /equipment/led-panels/p10-stadium

/equipment/staging (includes rigging)
├── /equipment/staging/mobile-stage
├── /equipment/staging/modular-stage
├── /equipment/staging/truss-systems
├── /equipment/staging/rigging-hardware
└── /equipment/staging/chain-motors

/equipment/lighting
├── /equipment/lighting/moving-heads
├── /equipment/lighting/led-uplights
└── /equipment/lighting/followspots

/equipment/microphones
├── /equipment/microphones/wireless-handheld
├── /equipment/microphones/lavalier
└── /equipment/microphones/headset

/equipment/monitors
├── /equipment/monitors/in-ear-monitors
└── /equipment/monitors/stage-monitors
```

---

## ROUTE MIGRATION TABLE - FINAL

| Current Route | Action | Destination | Status |
|---------------|--------|-------------|--------|
| `/rentals/led-wall-rentals` | Redirect | `/services/led-wall-rental` | APPROVED |
| `/rentals/sound-system-rentals` | Redirect | `/services/sound-system-rental` | APPROVED |
| `/rentals/lighting-rentals` | Redirect | `/services/event-lighting` | APPROVED |
| `/rentals/stage-rentals` | Redirect | `/services/staging-and-truss` | APPROVED |
| `/rentals/pipe-drape-rentals` | Redirect | `/services/pipe-and-drape-rental` | APPROVED |
| `/rentals/microphone-rentals` | Redirect | `/services/sound-system-rental` | APPROVED |
| `/rentals/speaker-rentals` | Redirect | `/services/sound-system-rental` | APPROVED |
| `/rentals/tv-monitor-rentals` | Redirect | `/services/video-production` | APPROVED |
| `/rentals/projector-screen-rentals` | PENDING | TBD | Needs business/SEO decision |
| `/rentals/camera-gear-rentals` | Redirect | `/services/video-production` | APPROVED |
| `/rentals/dj-equipment-rentals` | Redirect | `/services/sound-system-rental` | APPROVED |
| `/rentals/truss-rigging-rentals` | Redirect | `/services/staging-and-truss` | APPROVED |
| `/rentals/red-carpet-rentals` | Redirect | `/services/staging-and-truss` | APPROVED |
| `/rentals/step-and-repeat-rentals` | Redirect | `/services/pipe-and-drape-rental` | APPROVED |
| `/services/audio-engineering` | Redirect | `/services/sound-system-rental` | APPROVED |
| `/services/full-av-production` | Redirect | `/services/av-production` | APPROVED |
| `/services/lighting-design-programming` | Redirect | `/services/event-lighting` | APPROVED |
| `/services/staging-rigging` | Redirect | `/services/staging-and-truss` | APPROVED |
| `/services/visual-led-production` | Redirect | `/services/led-wall-rental` | APPROVED |
| `/services/stage-rental` | Redirect | `/services/staging-and-truss` | APPROVED |
| `/services/permanent-av-installation` | KEEP | N/A | Needs future service decision |
| `/events/[slug]` | Delete | N/A | Not in approved sitemap |

---

## UTILITY / BRAND / CONVERSION ROUTES

| Route | Classification | Status | Indexing |
|-------|----------------|--------|----------|
| `/about` | Brand | Keep | TBD |
| `/quote` | Conversion | Keep | TBD |
| `/thank-you` | Conversion | Keep | TBD |
| `/case-studies/[id]` | Portfolio | Keep | TBD |
| `/portfolio` | Brand | Keep | TBD |
| `/fifa-2026-packages` | Campaign | Keep | TBD |

---

## ROUTES TO CREATE

| Route | Type | Priority |
|-------|------|----------|
| `/locations` | Index page | HIGH |
| `/tools/led-wall-calculator` | Interactive tool | MEDIUM |
| `/tools/stage-builder` | Interactive tool | MEDIUM |
| `/tools/pipe-drape-builder` | Interactive tool | MEDIUM |
| `/tools/event-av-budget-estimator` | Interactive tool | MEDIUM |
| `/equipment/[category]` | Category pages | MEDIUM |
| `/equipment/[category]/[product]` | Product pages | LOW |

---

## MIGRATION SUMMARY

| Action | Count |
|--------|-------|
| Redirects to implement | 19 |
| Routes pending decision | 1 |
| Routes to keep (utility) | 6 |
| Routes to keep (needs future decision) | 1 |
| Routes to delete | 1 |
| Routes to create | 5+ |
| **Total SEO pages after migration** | **262** |

---

## KEY ADJUSTMENTS FROM v1.0

1. City URL format changed to `/locations/[state]/[city]-av-production`
2. `/services/stage-rental` renamed to `/services/staging-and-truss`
3. Rigging equipment moved under `/equipment/staging`
4. `/services/permanent-av-installation` marked "Needs future service decision" (not deleted)
5. `/locations` index page added to approved routes

---

## APPROVED FOR IMPLEMENTATION

Ready to proceed with:
1. Update sitemap-data.ts with service rename (stage-rental → staging-and-truss)
2. Update city URL patterns in sitemap-data.ts
3. Create /locations index page
4. Implement redirect rules
5. Delete /events/[slug] route
