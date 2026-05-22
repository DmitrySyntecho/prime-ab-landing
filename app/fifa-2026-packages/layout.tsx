import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Watch Party Packages | Prime Line AV",
  description:
    "Stadium-grade LED walls, broadcast-quality sound, and full crew handling — for backyard viewing parties, fan zones, and corporate events across Los Angeles.",
  openGraph: {
    type: "website",
    siteName: "Prime Line AV",
    title: "FIFA World Cup 2026 Watch Party Packages | Prime Line AV",
    description:
      "LED walls up to 800sqft, broadcast audio, and full production crew for every kickoff from June 11 to the MetLife Final on July 19.",
    images: [
      {
        url: "/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Prime Line AV — FIFA 2026 Watch Party Packages",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIFA World Cup 2026 Watch Party Packages | Prime Line AV",
    description:
      "LED walls, broadcast sound, and full production crew for every kickoff. Packages from $799/day.",
    images: ["/og-image.webp"],
  },
}

export default function FifaLayout({ children }: { children: React.ReactNode }) {
  return children
}
