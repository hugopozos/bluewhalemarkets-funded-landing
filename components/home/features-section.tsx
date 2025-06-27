"use client"

import { MessagesSquare, Clock, Award, LineChart } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export default function FeaturesSection() {
  // Referencias para los elementos que queremos animar
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])
   const [showInfo, setShowInfo] = useState(false);
  const [showInfoOne, setShowInfoOne] = useState(false);
  const [showreliable, setShowReliable] = useState(false);
  const [showMetatrader, setShowMetatrader] = useState(false);

  useEffect(() => {
    // Configurar el Intersection Observer para detectar cuando las tarjetas entran en el viewport
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.1, // 10% del elemento visible
    }

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        // Cuando una tarjeta entra en el viewport, añadir la clase para la animación
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up", "opacity-100")
          // Una vez animado, dejar de observar
          observer.unobserve(entry.target)
        }
      })
    }

    const observer = new IntersectionObserver(handleIntersect, observerOptions)

    // Observar cada tarjeta
    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  // Función para establecer la referencia
  const setCardRef = (el: HTMLDivElement | null, index: number) => {
    cardsRef.current[index] = el
  }

  return (
    <section className="py-24 relative" ref={sectionRef}>
      
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Trading Tools
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Discover our supporting ecosystem designed for your trading success
          </h2>
          <p className="text-gray-400 max-w-2xl">
            We provide comprehensive resources and support to ensure you have everything you need to succeed in your trading journey.
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 1 - Discord Community */}
          <div
            ref={(el) => setCardRef(el, 0)}
            className="bg-gradient-to-r from-black/60 to-[#0F2A38]/60 border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group min-h-[200px] h-auto transition-all duration-500 ease-in-out animate-subtle-gradient"

          >
             <div className="absolute -inset-[1px] before:absolute before:inset-0 before:rounded-2xl before:bg-[conic-gradient(from_0deg_at_50%_50%,#00ffff33,#00000000_30%,#00ffff33)] before:animate-spin-slow before:opacity-30 pointer-events-none z-0"></div>

          {/* Fondo de puntos muy sutil */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 pointer-events-none z-0"></div>

            <div className="flex justify-center mb-4 relative z-10">
              <div className="relative h-12 w-12">
                <Image 
                  src="/images/discord.png" 
                  alt="Discord" 
                  width={48} 
                  height={48} 
                  className="object-contain"
                />
              </div>
            </div>
            <h3 className="text-xl font-medium mb-3 text-center relative z-10">Private Trading Community</h3>
            <p className="text-gray-400 text-center text-sm mb-8 relative z-10">
            Join our exclusive Discord where serious traders exchange strategies, insights, and support every step of the way. Surround yourself with the kind of people who sharpen your mindset, and your results.
            </p>

            <div className="mt-9 flex flex-col items-center relative z-10">
             
            <a
            href="https://discord.gg/9wFdwJEdFk"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-44 py-3 px-5 rounded-full font-semibold text-white shadow-md transition-all duration-300 overflow-hidden group text-base text-center"
          >
            <span className="absolute inset-0 rounded-full bg-[conic-gradient(at_center,_#ffffff33,_#ffffff99,_#ffffff33)] animate-spin-slow blur-sm opacity-40 group-hover:opacity-70 z-0"></span>
            <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-0"></span>
            <span className="relative z-10">
            Join Discord
            </span>
          </a>

            </div>
          </div>

          {/* Feature Card 2 - 24/5 Support */}
          <div
            ref={(el) => setCardRef(el, 1)}

            className="bg-gradient-to-r from-black/60 to-[#634F36]/60 border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group min-h-[200px] h-auto transition-all duration-500 ease-in-out animate-subtle-gradient"

          >
              <div className="absolute -inset-[1px] before:absolute before:inset-0 before:rounded-2xl before:bg-[conic-gradient(from_0deg_at_50%_50%,#00ffff33,#00000000_30%,#00ffff33)] before:animate-spin-slow before:opacity-30 pointer-events-none z-0"></div>

              <div className="absolute inset-0 bg-[radial-gradient(#b5946e22_1px,transparent_1px)] bg-[size:20px_20px] opacity-5 pointer-events-none z-0"></div>

 
              <div className="flex justify-center mb-4">
                <div className="relative h-12 w-12">
                  <Image 
                    src="/images/support.png" 
                    alt="Discord" 
                    width={48} 
                    height={48} 
                    className="object-contain invert"
                  />
                </div>
              </div>
            <h3 className="text-xl font-medium mb-3 text-center">24/5 Human Support</h3>
            <p className="text-gray-400 text-center text-sm mb-14">
            Our expert team is available 24 hours a day, 5 days a week to answer, guide and resolve, fast. No bots. No delays. Just people who understand what trading under pressure really means
            </p>              
            <div className="mt-7 flex flex-col items-center relative z-10">
              <a href="/contact">
                <button
                  className="relative w-44 py-3 px-5 rounded-full font-semibold text-white shadow-md transition-all duration-300 overflow-hidden group text-base"
                >
                  <span className="absolute inset-0 rounded-full bg-[conic-gradient(at_center,_#ffffff33,_#ffffff99,_#ffffff33)] animate-spin-slow blur-sm opacity-40 group-hover:opacity-70 z-0"></span>
                  <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-0"></span>
                  <span className="relative z-10">
                  Contact us
                  </span>
                </button>
              </a>
            </div>
            
          </div>
        </div>


        {/* Separator with text */}
        <div className="my-16 text-center">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-16"></div>
            <h3 className="text-xl font-medium text-white">Tools that accompany you</h3>
            <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent w-16"></div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive resources to support your trading journey at every step
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 3 - Broker Information */}
          <div
            ref={(el) => setCardRef(el, 2)}
            className="bg-gradient-to-r from-black/60 to-[#0F2A38]/60 border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group min-h-[200px] h-auto transition-all duration-500 ease-in-out animate-subtle-gradient"

           
          >
             <div className="absolute -inset-[1px] before:absolute before:inset-0 before:rounded-2xl before:bg-[conic-gradient(from_0deg_at_50%_50%,#00ffff33,#00000000_30%,#00ffff33)] before:animate-spin-slow before:opacity-30 pointer-events-none z-0"></div>

            {/* Efecto de resplandor azul */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1F485E]/10 blur-3xl rounded-full opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

            <div className="flex justify-center mb-6">
              <Image 
                src="/images/application-logo.webp" 
                alt="Blue Whale Markets" 
                width={80} 
                height={50} 
                className="object-contain h-[40px] w-auto"
              />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-center">Trusted Brokerage Infrastructure</h3>
            <p className="text-gray-400 text-center text-sm mb-10">
              We’re not just another prop firm. We’re a broker, and this is the prop division of Blue Whale Markets. That means full control over our tech, our rules, and our ecosystem. It also means we can offer more than capital. We can offer a future. For those who prove it, there’s a real institutional path ahead.
            </p>
            <div className="mt-7 flex flex-col items-center relative z-10">
           
              </div>
             
          </div>

          {/* Feature Card 4 - MT5 Platform */}
          <div
            ref={(el) => setCardRef(el, 3)}
           
            className="bg-gradient-to-r from-black/60 to-[#634F36]/60 border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group min-h-[200px] h-auto transition-all duration-500 ease-in-out animate-subtle-gradient"

          >
             <div className="absolute -inset-[1px] before:absolute before:inset-0 before:rounded-2xl before:bg-[conic-gradient(from_0deg_at_50%_50%,#00ffff33,#00000000_30%,#00ffff33)] before:animate-spin-slow before:opacity-30 pointer-events-none z-0"></div>

            {/* Efecto de resplandor dorado */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#1f2d45]/5 blur-[8rem] rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-1500"></div>

            <div className="flex justify-center mb-6">
              <Image 
                src="/images/metatrader-5.png" 
                alt="MetaTrader 5" 
                width={80} 
                height={80} 
                className="object-contain h-[50px] w-auto"
              />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-center">MetaTrader 5 Technology</h3>
            <p className="text-gray-400 text-center text-sm mb-10">
            MT5 is the most advanced platform for modern traders. Access over 1,000 CFDs across forex, indices, stocks, metals, commodities, bonds, and futures, instantly. Trade with speed. Customize with freedom. Perform with confidence.
            </p>
            <div className="mt-7 flex flex-col items-center relative z-10">
          
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
