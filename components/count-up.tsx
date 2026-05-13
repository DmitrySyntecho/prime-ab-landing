"use client"

import { useEffect, useRef, useState } from "react"

interface CountUpProps {
  /** Target final value (positive integer) */
  end: number
  /** Animation duration in ms — default 2200 */
  duration?: number
  /** String to append (e.g. "+", "★", "K+") */
  suffix?: string
  /** String to prepend (e.g. "$") */
  prefix?: string
  /** Format the number (e.g. add comma separators). Defaults to localeString. */
  format?: (n: number) => string
  className?: string
  /** Trigger only when scrolled into view (IntersectionObserver) — default true */
  scrollTrigger?: boolean
}

/**
 * CountUp — animated number that counts from 0 to `end` with ease-out-quart
 * curve, triggered when the element scrolls into view.
 */
export function CountUp({
  end,
  duration = 2200,
  suffix = "",
  prefix = "",
  format,
  className,
  scrollTrigger = true,
}: CountUpProps) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const trigger = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (t: number) => {
        const p = Math.min((t - start) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 4)
        setN(Math.floor(eased * end))
        if (p < 1) requestAnimationFrame(tick)
        else setN(end)
      }
      requestAnimationFrame(tick)
    }

    if (!scrollTrigger) {
      trigger()
      return
    }

    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          trigger()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration, scrollTrigger])

  const display = format ? format(n) : n.toLocaleString()
  return (
    <span ref={ref} className={`tabular-nums ${className ?? ""}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}
