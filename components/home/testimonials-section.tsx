"use client"

import { useEffect, useRef } from "react"

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = containerRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPos = 0
    const scrollSpeed = 0.5
    const totalWidth = scrollContainer.scrollWidth
    const viewportWidth = scrollContainer.offsetWidth

    const scroll = () => {
      scrollPos += scrollSpeed

      // Reset position when we've scrolled through half the items
      if (scrollPos >= totalWidth / 2) {
        scrollPos = 0
      }

      scrollContainer.scrollLeft = scrollPos
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationFrameId)
    }

    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
        scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const testimonials = [
    {
      quote:
        "I've increased my trading consistency by 40%. The advanced risk management tools allow me to focus on strategy instead of calculations. It's like having a professional risk manager working 24/7.",
      name: "Alex M.",
      title: "Full-time Forex Trader",
      image: "/confident-market-analyst.png",
      company: "Cloud",
      companyLogo: "/images/logo-cloud.svg",
    },
    {
      quote:
        "Exceptional trader support. They seamlessly integrated with my existing trading platforms, impressing me with their in-depth knowledge and ability to customize solutions. The evaluation process was smooth, and they've been responsive to every query.",
      name: "Michael R.",
      title: "Institutional Trader",
      image: "/confident-businessman.png",
      company: "Vision",
      companyLogo: "/images/logo-vision.svg",
    },
    {
      quote:
        "As a part-time trader, I found it surprisingly user-friendly. The platform optimized my trade management and performance tracking. The payout process is seamless and always on time.",
      name: "Sarah J.",
      title: "Part-time Trader",
      image: "/confident-market-analyst.png",
      company: "Minty",
      companyLogo: "/images/logo-minty.svg",
    },
    {
      quote:
        "The intuitive dashboard makes advanced trading metrics accessible to our entire team, transforming our analysis. We're making data-driven trading decisions faster, with a real impact on our bottom line.",
      name: "Jennifer L.",
      title: "Trading Team Lead",
      image: "/confident-executive.png",
      company: "Trace",
      companyLogo: "/images/logo-trace.svg",
    },
    {
      quote:
        "After trying several prop firms, this is by far the best. The capital allocation is generous, the rules are fair, and the scaling opportunities are unmatched in the industry.",
      name: "David K.",
      title: "Futures Trader",
      image: "/confident-professional.png",
      company: "Product",
      companyLogo: "/images/logo-product.svg",
    },
  ]

  // Duplicate testimonials to create seamless loop
  const allTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-black relative">
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">Hear from our successful traders</h2>
        </div>

        {/* Testimonials Carousel con gradientes laterales */}
        <div className="relative">
          {/* Gradiente izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

          <div ref={containerRef} className="flex overflow-x-hidden gap-5 pb-8 scrollbar-hide">
            {allTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="min-w-[320px] max-w-[320px] bg-black border border-gray-800 rounded-xl p-5 flex flex-col"
              >
                {/* Contenido del testimonio sin cambios */}
                <div className="mb-6 flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-800">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-medium">{testimonial.name}</div>
                      <div className="text-xs text-gray-400">{testimonial.title}</div>
                    </div>
                  </div>

                  <div className="w-16 h-8">
                    <img
                      src={testimonial.companyLogo || "/placeholder.svg"}
                      alt={testimonial.company}
                      className="w-full h-full object-contain opacity-70"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradiente derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
