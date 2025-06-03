'use client'

import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Video Background simplificado al máximo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >
          {/* <source src="/videos/ocean01.mp4" type="video/mp4" /> */}
          <source src="/videos/footer-final2.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        
        {/* Solo el gradiente superior */}
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
      </div>

      {/* Contenido sobre el video */}
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Start your trading journey today</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Begin your evaluation process today and discover how our funded accounts can transform your trading career. No
          hidden fees, transparent rules.
        </p>
        <Link
          href="https://funded.app.bluewhalemarkets.com/login"
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition"
        >
          <span className="h-2 w-2 bg-black rounded-full"></span>
          <span>Get funded now</span>
        </Link>
      </div>
    </section>
  )
}
