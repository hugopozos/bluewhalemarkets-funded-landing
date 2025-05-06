import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Workflow Automation Platform",
  description: "Automate and simplify your workflow with ease",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
