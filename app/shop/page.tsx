import type { Metadata } from "next"
import { ShopProductsSection } from "@/components/shop-products-section"

export const metadata: Metadata = {
  title: "LED Wall Rentals – Prime Line AV",
  description: "Professional LED video wall rentals for events, watch parties, and festivals.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ShopPage() {
  return (
    <div className="min-h-screen">
      <ShopProductsSection />
    </div>
  )
}
