import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blue Whale Markets Funded",
  description: "Trade with our capital and keep up to 90% of the profits. Simple, transparent, and fair.",
  generator: 'Next.js',
  icons: {
    icon: '/images/logo-favicon.webp',
    apple: '/images/logo-favicon.webp',
    shortcut: '/images/logo-favicon.webp'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo-favicon.webp" />
      </head>
      <body className={manrope.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
