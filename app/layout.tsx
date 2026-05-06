import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

import { Manrope, JetBrains_Mono } from "next/font/google"
import { LanguageProvider } from "@/lib/i18n/language-context"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackgroundFX } from "@/components/background-fx"
import { GlobalCTA } from "@/components/global-cta"

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Prime Line AV | When Everything Is Just Perfect",
  description:
    "The AV partner brands trust for corporate events, brand activations, experiential marketing, and studio work. Full-service audio, video, lighting, and staging production.",
  generator: "v0.app",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Prime Line AV | When Everything Is Just Perfect",
    description: "Full AV production for corporate events, brand activations, experiential marketing, and studio work.",
    images: [{ url: "/images/prime-line-av-social-1200x630.png", width: 1200, height: 630 }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased text-[#e6f4ee]">
        <BackgroundFX />
        <div className="page-content">
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <GlobalCTA />
          </LanguageProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
