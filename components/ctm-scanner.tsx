"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function CTMScanner() {
  const pathname = usePathname()

  useEffect(() => {
    const scan = () => {
      try {
        const ctm = (window as any).__ctm
        if (!ctm) return
        ctm.main?.scan?.()
        ctm.main?.runNow?.()
      } catch (e) {}
    }
    const t1 = setTimeout(scan, 50)
    const t2 = setTimeout(scan, 400)
    const t3 = setTimeout(scan, 1200)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [pathname])

  return null
}
