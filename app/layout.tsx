import type React from "react"
import type { Metadata } from "next"
import { Manrope } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import SmoothScroll from "@/components/smooth-scroll";

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
        <meta property="og:title" content="Blue Whale Markets Funded" />
        <meta property="og:description" content="Trade with our capital and keep up to 90% of the profits. Simple, transparent, and fair." />
        <meta property="og:image" content="https://funded.bluewhalemarkets.com/images/logo-favicon.webp" />
        <meta property="og:url" content="https://funded.bluewhalemarkets.com" />
        <meta property="og:type" content="website" />

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
         {/* GTranslate Settings */}
         <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                var available = ["en","es","fr","de","it","zh-TW"];
                var lang = (navigator.language || navigator.userLanguage || "en").slice(0,2);
                if (available.indexOf(lang) === -1) lang = "en";
                window.__desiredLang = lang;

                window.gtranslateSettings = {
                  default_language: "en",
                  native_language_names: true,
                  languages: available,
                  wrapper_selector: ".gtranslate_wrapper",
                  switcher_horizontal_position: "left"
                };

                function setGoogTransCookie(from, to) {
                  try {
                    var v = "/" + from + "/" + to;
                    document.cookie = "googtrans=" + v + "; path=/";
                    if (location.hostname.indexOf(".") > -1) {
                      document.cookie = "googtrans=" + v + "; domain=" + location.hostname + "; path=/";
                      document.cookie = "googtrans=" + v + "; domain=." + location.hostname + "; path=/";
                    }
                    location.hash = "#googtrans(" + from + "|" + to + ")";
                  } catch (e) {}
                }

                var applied = false;
                function applyTranslation() {
                  if (applied || lang === "en") return; 
                  setGoogTransCookie("en", lang);

                  var tries = 0, max = 40;
                  var timer = setInterval(function () {
                    tries++;
                    if (typeof window.doGTranslate === "function") {
                      window.doGTranslate("en|" + lang);
                      applied = true;
                      clearInterval(timer);
                      return;
                    }
                    var link = document.querySelector('.gtranslate_wrapper a[onclick*="|' + lang + '"]');
                    if (link) {
                      link.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
                      applied = true;
                      clearInterval(timer);
                      return;
                    }
                    if (tries >= max) clearInterval(timer);
                  }, 250);
                }

                window.addEventListener("load", applyTranslation);
                document.addEventListener("inertia:finish", applyTranslation);
                if (window.MutationObserver) {
                  var mo = new MutationObserver(function () {
                    applyTranslation();
                  });
                  mo.observe(document.body, { childList: true, subtree: true });
                }
              })();
            `
          }}
        />

        {/* GTranslate widget script */}
        <Script src="https://cdn.gtranslate.net/widgets/latest/float.js" strategy="afterInteractive" />
      
      </head>
      <body className={manrope.className}>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
