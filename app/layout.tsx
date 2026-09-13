import type React from "react"
import type { Metadata } from "next"
import { Manrope, Fraunces } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-serif" })

export const metadata: Metadata = {
  title: {
    default: "MPrimo Tech | On-Site Admin Mapping & Automation for Care & Hospitality",
    template: "%s | MPrimo Tech"
  },
  description: "Small UK firm that comes on site to map messy admin in care homes and hospitality venues, and automates it. Practical IT, workflow streamlining, and reliable automations.",
  keywords: ["care home admin automation", "hospitality workflow automation", "on-site admin mapping UK", "care admin streamlining", "small business IT UK", "workflow automation UK"],
  authors: [{ name: "MPrimo Tech" }],
  creator: "MPrimo Tech",
  publisher: "MPrimo Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://mprimotech.com",
    title: "MPrimo Tech | On-Site Admin Mapping & Automation for Care & Hospitality",
    description: "Small UK firm that comes on site, maps messy admin in care and hospitality, and automates it.",
    siteName: "MPrimo Tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "MPrimo Tech | On-Site Admin Mapping & Automation",
    description: "Small UK firm that comes on site, maps messy admin in care and hospitality, and automates it.",
    creator: "@mprimotech",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://mprimotech.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${fraunces.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
