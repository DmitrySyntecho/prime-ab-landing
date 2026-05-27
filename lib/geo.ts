const BASE = 'https://geo2.service.syntecho.com'
const SEC = 'bae9Eih0Eilac&ee'

export interface GeoSettings {
  defaultCity?: string
  city?: string
  state?: string
}

export async function getGeoSettings(): Promise<GeoSettings> {
  try {
    const res = await fetch(`${BASE}/settings-zyx`, {
      headers: { 'x-sec-code': SEC },
      next: { revalidate: 3600 },
    })
    if (!res.ok) return {}
    return await res.json()
  } catch {
    return {}
  }
}

const TIMEOUT_MS = 500

const withTimeout = (promise: Promise<Response>, ms: number) =>
  Promise.race([
    promise,
    new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error(`geo timeout after ${ms}ms`)), ms)
    ),
  ])

export async function resolveLocation(requestUrl: string): Promise<string> {
  if (!requestUrl) return ''
  try {
    const res = await withTimeout(
      fetch(`${BASE}/resolve-url`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-sec-code': SEC,
        },
        body: JSON.stringify({ url: requestUrl }),
        cache: 'no-store',
      }),
      TIMEOUT_MS
    )
    if (!res.ok) return ''
    const data = await res.json()
    const city = data?.match?.city
    if (typeof city === 'string') return city.trim()
    return ''
  } catch {
    return ''
  }
}
