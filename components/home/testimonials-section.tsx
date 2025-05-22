"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"
import Image from "next/image"

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
        "Quiero recomendar ampliamente Blue Whale Markets Funded, ya que es mi tercer retiro que realizo, y no he tenido ningún problema con alguno, es fácil si sigues las reglas al pie de la letra, en total he retirado cerca de los $4,000 USD. Excelente atención de soporte, reglas justas. Gracias por la oportunidad.",
      name: "Karla Robles",
      title: "",
      image: "https://user-images.trustpilot.com/6708847e4448ddad3b63d2ce/73x73.png",
      rating: 5,
      date: "21 minutes ago",
    },
    {
      quote:
        "Quede en 2do lugar en su competencia y también he operado con sus cuentas de fondeo. Solo tengo cosas positivas que decir sobre esta empresa. Tienen muy buenas condiciones y reglas claras para operar, además sus competencias te dan gran oportunidad para crecer.",
      name: "Carlos Castro Solis",
      title: "",
      image: "https://user-images.trustpilot.com/664e12d6d11b294e3f2b5614/73x73.png",
      rating: 5,
      date: "Feb 19, 2025",
    },
    {
      quote:
        "Muy feliz con sus servicios de fondeo , educación y atención de sus colaboradores. Después de tanto tiempo y de pasar por muchas estafas con empresa de fondeo. Hoy encontré una empresa de fondeo que si paga. Estoy contento y agradecido con Clubprotraders por valorar mi esfuerzo y haberme pagado mi primer retiro. Altamente recomendados sus servicios.",
      name: "Wilson Antonio",
      title: "",
      image: "/confident-market-analyst.png",
      rating: 5,
      date: "2 months ago",
    },
    {
      quote:
        "hice un 7% en un mes, está mas que perfecto un buen trader no mete 15 operaciones diarias . divide su riesgo quizás en 2 o 3 operaciones como mucho por dia siempre y cuando se de la estrategia , y respetes el riesgo, aqui si te sobreloteas, sobreoperas y no sigues tu plan estás realmente apostando,aquí buscan solidez y aqui me quedo y pensar a largo plazo, las reglas están claras toca ponerse serio. Estamos mal acostumbrados a empresas de mentiras donde la consistencia no se premia",
      name: "AlikÄ",
      title: "",
      image: "/confident-executive.png",
      rating: 4,
      date: "Feb 18, 2025",
    },
    {
      quote:
        "Estoy muy contenta con esta empresa muy confiable solo puedo decir cosas positivas, apégate a las reglas y estás del otro lado, todo bien estoy muy feliz de haber encontrado todo aquí no solo te fondean entras a una comunidad donde compartimos nuestros análisis y nos apoyamos aunado a esto el apoyo de los asesores está increíble.",
      name: "Gloria Ramirez",
      title: "",
      image: "/jhuli.jpg",
      rating: 5,
      date: "May 12, 2025",
    },
  ]

  // Duplicate testimonials to create seamless loop
  const allTestimonials = [...testimonials, ...testimonials]

  // Trading stats
  const tradingStats = [
    { value: "3,000+", label: "Active Traders" },
    { value: "32", label: "Countries" },
    { value: "5,412", label: "Open Trades" },
    { value: "4.5/5", label: "Trustpilot Rating" },
  ]

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star 
          key={i} 
          className={`w-3 h-3 ${i < rating ? "text-[#00b67a] fill-[#00b67a]" : "text-gray-600"}`} 
        />
      ))
  }

  return (
    <section className="py-24 relative">
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Over 3,000 traders have trusted us
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Discover why professional traders from around the world choose Blue Whale Markets for their funded trading journeys
          </p>
        </div>

        {/* Stats Bar */}
        <div className="relative mb-16">
          <div className="bg-gradient-to-br from-black to-[#080816] border border-gray-800 rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {tradingStats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="text-3xl font-light mb-1">
                    {stat.label === "Trustpilot Rating" ? (
                      <div className="flex items-center gap-2">
                        <span>{stat.value}</span>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <Star key={star} className="w-4 h-4 text-[#00b67a] fill-[#00b67a]" />
                          ))}
                          <Star className="w-4 h-4 text-[#00b67a] fill-[#00b67a] opacity-50" />
                        </div>
                      </div>
                    ) : (
                      stat.value
                    )}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trustpilot-style Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2">
          <a
            href="https://www.trustpilot.com/review/clubprotraders.com?starts=5"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="w-5 h-5 bg-[#00b67a] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="white" />
              </svg>
            </div>
            <span className="font-medium text-lg">Trustpilot</span>
            </a>
          </div>
          <div className="flex items-center gap-1">
            <div className="text-sm font-medium">Excellent</div>
            <div className="flex ml-2">
              {renderStars(5)}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel con gradientes laterales */}
        <div className="relative">
          {/* Gradiente izquierdo */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>

          <div ref={containerRef} className="flex overflow-x-hidden gap-5 pb-8 scrollbar-hide">
            {allTestimonials.map((testimonial, index) => (
                <a
                key={`${testimonial.name}-${index}`}
                href="https://www.trustpilot.com/review/clubprotraders.com?starts=5"
                target="_blank"
                rel="noopener noreferrer">
              <div
                key={`${testimonial.name}-${index}`}
                className="min-w-[320px] max-w-[320px] bg-gradient-to-br from-black to-[#080816] border border-gray-800 rounded-xl p-5 flex flex-col"
              >
                
                {/* Trustpilot-style rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex">
                    {renderStars(testimonial.rating)}
                  </div>
                  <div className="text-xs text-gray-400">{testimonial.date}</div>
                </div>

                {/* Contenido del testimonio */}
                <div className="mb-6 flex-grow">
                  <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
                </div>

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
        
              </div>
              </a>
            ))}
          </div>

          {/* Gradiente derecho */}
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  )
}
