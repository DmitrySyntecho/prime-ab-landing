import { NextRequest, NextResponse } from 'next/server'

const BASE = 'https://geo2.service.syntecho.com'
const SEC = 'bae9Eih0Eilac&ee'
const COOKIE = 'detected_city'
const PROD_HOST = 'https://lp.primelineav.com'

function buildGeoUrl(request: NextRequest): string {
  const url = new URL(request.url)
  if (url.hostname === 'localhost') {
    const prod = new URL(PROD_HOST)
    url.hostname = prod.hostname
    url.protocol = prod.protocol
    url.port = ''
  }
  url.pathname = '/'
  return url.toString()
}

function isFreshAdVisit(searchParams: URLSearchParams): boolean {
  return [...searchParams.keys()].some(k =>
    k.startsWith('utm_') ||
    k === 'gclid' ||
    k === 'gbraid' ||
    k === 'gad_source' ||
    k.startsWith('cq_')
  )
}

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const requestHeaders = new Headers(request.headers)
  const cookieCity = request.cookies.get(COOKIE)?.value

  // Miami/Orlando pages — city is determined by URL slug, don't touch geo cookie
  if (pathname.endsWith('-miami') || pathname.endsWith('-orlando')) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const hasUtm = isFreshAdVisit(searchParams)

  // Cookie exists and no fresh ad visit — use cached city
  if (cookieCity && !hasUtm) {
    requestHeaders.set('x-detected-city', cookieCity)
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  // Fresh ad visit or no cookie — call geo service
  let detected = ''
  try {
    const res = await fetch(`${BASE}/resolve-url`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-sec-code': SEC },
      body: JSON.stringify({ url: buildGeoUrl(request) }),
      signal: AbortSignal.timeout(500),
    })
    if (res.ok) {
      const data = await res.json()
      const c = data?.match?.city
      if (typeof c === 'string') detected = c.trim()
    }
  } catch {}

  const city = detected || cookieCity || ''
  if (city) requestHeaders.set('x-detected-city', city)

  const response = NextResponse.next({ request: { headers: requestHeaders } })

  // Only update cookie when we got a fresh detection
  if (detected) {
    response.cookies.set(COOKIE, detected, {
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
      sameSite: 'lax',
    })
  }

  return response
}

export const config = {
  matcher: ['/', '/services/:path*'],
}
