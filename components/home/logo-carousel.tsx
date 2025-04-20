"use client"

export default function LogoCarousel() {
  // Logos para el carrusel
  const logos = [
    { name: "Minty", src: "/images/logo-minty.svg" },
    { name: "Trace", src: "/images/logo-trace.svg" },
    { name: "Product", src: "/images/logo-product.svg" },
    { name: "Vision", src: "/images/logo-vision.svg" },
    { name: "Cloud", src: "/images/logo-cloud.svg" },
  ]

  return (
    <div className="py-10 bg-black">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-center text-gray-300 mb-8">
          Supported by <span className="font-medium text-white">100+ customers</span> worldwide
        </h3>

        <div className="relative overflow-hidden">
          {/* Difuminado izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

          <div className="logo-slider">
            <div className="logo-slide-track">
              {/* Primera copia de logos */}
              {logos.map((logo, index) => (
                <div key={`logo-1-${index}`} className="logo-slide">
                  <div className="text-gray-400 text-lg font-medium">{logo.name}</div>
                </div>
              ))}

              {/* Segunda copia de logos para transición continua */}
              {logos.map((logo, index) => (
                <div key={`logo-2-${index}`} className="logo-slide">
                  <div className="text-gray-400 text-lg font-medium">{logo.name}</div>
                </div>
              ))}

              {/* Tercera copia para asegurar que siempre hay suficiente contenido */}
              {logos.map((logo, index) => (
                <div key={`logo-3-${index}`} className="logo-slide">
                  <div className="text-gray-400 text-lg font-medium">{logo.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Difuminado derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </div>
  )
}
