"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Layers, Trophy, Sparkles, PartyPopper } from "lucide-react"
import type React from "react"

interface MobileBottomNavProps {
  onStartQuote: () => void
}

/**
 * Bottom navigation visible only on mobile (≤md).
 * - 4 side icons (Home / Services / Events / FIFA) flanking
 * - Centered raised quote button
 * - Hides on scroll down or when idle, shows on scroll up
 * - Theme tokens swap on FIFA route
 */
export function MobileBottomNav({ onStartQuote }: MobileBottomNavProps) {
  const pathname = usePathname()
  const isFifa = pathname?.startsWith("/fifa-2026-packages")

  const [show, setShow] = useState(false)
  const lastY = useRef(0)
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Show on scroll-up, hide on scroll-down. Idle keeps current state. Hidden near top (over hero).
  useEffect(() => {
    let raf = 0
    let pending = false
    const handle = () => {
      pending = false
      const y = window.scrollY
      const delta = y - lastY.current

      if (y < 240) {
        setShow(false)
      } else if (delta < -3) {
        setShow(true)
      } else if (delta > 3) {
        setShow(false)
      }
      // |delta| <= 3 → idle/jitter — preserve current state

      lastY.current = y
    }
    const onScroll = () => {
      if (!pending) {
        pending = true
        raf = requestAnimationFrame(handle)
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      if (raf) cancelAnimationFrame(raf)
      if (idleTimer.current) clearTimeout(idleTimer.current)
    }
  }, [])

  const accent = isFifa ? "#E61D25" : "#FF2D6F"
  const accentDeep = isFifa ? "#BF1119" : "#FF5E3A"
  const accentSoft = isFifa ? "#FF6B71" : "#FFD24A"
  const ringShadow = isFifa
    ? "0 14px 36px -8px rgba(230,29,37,0.65), 0 0 0 4px rgba(10,15,31,0.95), inset 0 1px 0 rgba(255,255,255,0.30)"
    : "0 14px 36px -8px rgba(255,45,111,0.65), 0 0 0 4px rgba(10,8,24,0.95), inset 0 1px 0 rgba(255,255,255,0.30)"
  const railBg = isFifa ? "rgba(10,15,31,0.92)" : "rgba(10,8,24,0.92)"

  // Items split into pairs around the center button
  const leftItems = [
    { href: "/", icon: Home, label: "Home", match: pathname === "/" },
    { href: "/#services", icon: Layers, label: "Services", match: false },
  ]
  const rightItems = [
    { href: "/#events", icon: PartyPopper, label: "Events", match: false },
    {
      href: "/fifa-2026-packages",
      icon: Trophy,
      label: "FIFA",
      match: isFifa,
    },
  ]

  return (
    <nav
      className={`md:hidden fixed bottom-3 left-3 right-3 z-50 pointer-events-none transition-all duration-500 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      aria-hidden={!show}
    >
      <div className="relative max-w-md mx-auto pointer-events-auto">
        {/* Glass rail */}
        <div
          className="relative grid grid-cols-5 items-center gap-1 px-2 py-1.5 rounded-full border backdrop-blur-2xl backdrop-saturate-150"
          style={{
            background: railBg,
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow: "0 24px 48px -12px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {leftItems.map((it) => (
            <NavItem key={it.label} {...it} accent={accent} />
          ))}

          {/* Spacer for the elevated center button */}
          <div className="flex justify-center">
            <button
              onClick={onStartQuote}
              className="relative -translate-y-4 w-[58px] h-[58px] rounded-full flex flex-col items-center justify-center text-white transition-transform active:scale-95"
              style={{
                background: `linear-gradient(135deg, ${accent} 0%, ${accentDeep} 100%)`,
                boxShadow: ringShadow,
              }}
              aria-label="Request a Quote"
            >
              <Sparkles className="w-[22px] h-[22px]" strokeWidth={2.2} />
              <span
                className="absolute -bottom-5 text-[9px] font-extrabold tracking-[0.14em] uppercase whitespace-nowrap"
                style={{ color: accentSoft }}
              >
                Quote
              </span>
            </button>
          </div>

          {rightItems.map((it) => (
            <NavItem key={it.label} {...it} accent={accent} />
          ))}
        </div>
      </div>
    </nav>
  )
}

function NavItem({
  href,
  icon: Icon,
  label,
  match,
  accent,
}: {
  href: string
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  match: boolean
  accent: string
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col items-center justify-center gap-0.5 py-1.5 rounded-full transition-colors"
      style={{ color: match ? accent : "rgba(255,255,255,0.55)" }}
    >
      <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
      <span className="text-[9px] font-bold tracking-[0.06em] uppercase">{label}</span>
    </Link>
  )
}

