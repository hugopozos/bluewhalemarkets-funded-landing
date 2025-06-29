import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Blue Whale Markets Funded",
  description: "Trade with our capital and keep up to 90% of the profits. Simple, transparent, and fair.",
  generator: "Next.js",
  icons: {
    icon: "/images/logo-favicon.webp",
    apple: "/images/logo-favicon.webp",
    shortcut: "/images/logo-favicon.webp"
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

        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '410161175181122'); 
              fbq('track', 'PageView');
            `
          }}
        />

        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=410161175181122&ev=PageView&noscript=1" />
        </noscript>
        {/* End Meta Pixel Code */}
      </head>
      <body className={manrope.className}>
        {children}
      </body>
    </html>
  )
}
