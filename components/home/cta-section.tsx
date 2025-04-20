import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden bg-black">
      {/* Fondo con patrón de cuadrícula */}
      <div className="absolute inset-0 z-0">
        {/* Patrón de cuadrícula */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        {/* Iluminación circular alrededor del contenido */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(100,70,255,0.4) 0%, rgba(30,20,60,0.1) 50%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Start your trading journey today</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Begin your evaluation process today and discover how our funded accounts can transform your trading career. No
          hidden fees, transparent rules.
        </p>
        <Link
          href="#"
          className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-100 rounded-full px-8 py-3 font-medium transition"
        >
          <span className="h-2 w-2 bg-black rounded-full"></span>
          <span>Get funded now</span>
        </Link>
      </div>
    </section>
  )
}
