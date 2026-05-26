"use client"

import { usePathname } from "next/navigation"

export function usePageCity(): string {
  const pathname = usePathname()
  if (pathname.includes("-miami")) return "Miami"
  if (pathname.includes("-orlando")) return "Orlando"
  return "Los Angeles"
}
