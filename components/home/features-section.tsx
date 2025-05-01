"use client"

import { MessagesSquare, Clock, Award, LineChart } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

export default function FeaturesSection() {
  // Referencias para los elementos que queremos animar
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<Array<HTMLDivElement | null>>([])

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
    <section className="py-24 bg-black relative" ref={sectionRef}>
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
            className="bg-gradient-to-br from-black to-[#0c0e1a] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            {/* Efecto de resplandor Discord */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex justify-center mb-4">
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
            <h3 className="text-xl font-medium mb-3 text-center">Trading Community</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Join our exclusive Discord community where traders share insights, strategies, and support each other on their trading journey.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-indigo-500/20 flex items-center justify-center">
                  <MessagesSquare className="w-3 h-3 text-indigo-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-indigo-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                <div className="flex items-start gap-2 mb-4">
                  <div className="min-w-6 h-6 rounded-full bg-indigo-500/10 flex items-center justify-center mt-1">
                    <span className="text-indigo-500 text-xs">🎮</span>
                  </div>
                  <div className="text-sm">Blue Whale Markets Community</div>
                </div>

                <div className="text-sm text-gray-300 mb-4 pl-8">Connect with 5,000+ traders worldwide</div>

                <div className="flex gap-2 pl-8 mb-4">
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-indigo-500/30 transition-colors">
                    Live analysis
                  </button>
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-indigo-500/30 transition-colors">
                    Trading ideas
                  </button>
                </div>

                <div className="flex items-center justify-between pl-8 text-xs text-gray-500">
                  <div>Weekly webinars with top traders</div>
                  <div className="w-5 h-5 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center">
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 - 24/5 Support */}
          <div
            ref={(el) => setCardRef(el, 1)}
            className="bg-gradient-to-br from-black to-[#041204] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
          >
            {/* Efecto de resplandor verde */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-medium mb-3 text-center">24/5 Dedicated Support</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Get professional assistance whenever you need it with our round-the-clock support team, available throughout the trading week.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-green-500/20 flex items-center justify-center">
                  <Clock className="w-3 h-3 text-green-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <div className="bg-[#111] border border-gray-800 rounded-lg px-3 py-2 mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400">Average</span>
                    <span className="text-xs text-green-500 mx-1">Response</span>
                    <span className="text-xs text-gray-400">Time</span>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#0A0A0A] border border-gray-800 flex items-center justify-center">
                    <span className="text-xs">↓</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <span className="text-green-500 text-xs">✓</span>
                    </div>
                    <div className="text-xs text-gray-300">Support Channels</div>
                  </div>
                  <div className="text-xs text-gray-400 pl-6 mb-1">Email Support: Under 2 hours</div>
                  <div className="text-xs text-gray-500 pl-6">• Live Chat: Instant response</div>
                  <div className="text-xs text-gray-500 pl-6">• Phone Support: Available</div>
                  <div className="text-xs text-gray-500 pl-6">• Ticket System: Priority handling</div>
                </div>

                <div className="flex gap-2 justify-center">
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-green-500/30 transition-colors">
                    Contact Support
                  </button>
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-green-500/30 transition-colors">
                    Help Center
                  </button>
                </div>
              </div>
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
            className="bg-gradient-to-br from-black to-[#040e1a] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            {/* Efecto de resplandor azul */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex justify-center mb-6">
              <Image 
                src="/images/application-logo.webp" 
                alt="Blue Whale Markets" 
                width={80} 
                height={50} 
                className="object-contain h-[40px] w-auto"
              />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-center">Reliable Brokerage Partner</h3>
            <p className="text-gray-400 text-center text-sm mb-10">
              Trade with confidence knowing your funds are secure with our regulated broker partners, offering competitive spreads and fast execution.
            </p>

            <div className="mt-auto relative z-10">
              <div className="flex justify-between mb-4 px-2">
                <div className="text-center">
                  <div className="text-xs text-gray-400">Regulated</div>
                  <div className="text-sm font-medium">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">Accounts</div>
                  <div className="text-sm font-medium">Multiple</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-400">Execution</div>
                  <div className="text-sm font-medium">Fast</div>
                </div>
              </div>

              <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2 mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                  <div className="text-xs">Tight spreads starting from 0.0 pips</div>
                </div>
              </div>

              <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-4 bg-blue-500 rounded-full"></div>
                  <div className="text-xs">Advanced risk management tools</div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 4 - MT5 Platform */}
          <div
            ref={(el) => setCardRef(el, 3)}
            className="bg-gradient-to-br from-black to-[#120412] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
          >
            {/* Efecto de resplandor púrpura */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="flex justify-center mb-6">
              <Image 
                src="/images/metatrader-5.png" 
                alt="MetaTrader 5" 
                width={80} 
                height={80} 
                className="object-contain h-[50px] w-auto"
              />
            </div>
            <h3 className="text-2xl font-medium mb-3 text-center">MetaTrader 5 Platform</h3>
            <p className="text-gray-400 text-center text-sm mb-10">
            The most powerful version of MetaTrader. Improve your trading style with advanced customization. You can access over 400 different CFDs in seconds and trade forex, indices, stocks, precious metals, commodities, bonds, and futures easily and quickly.
            </p>

            <div className="mt-auto relative z-10">
              <div className="flex items-start gap-2 mb-3">
                <div className="min-w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center mt-0.5">
                  <span className="text-purple-500 text-xs font-bold">📊</span>
                </div>
                <div className="text-sm font-medium">Platform Features</div>
              </div>

              <div className="grid grid-cols-1 gap-2">
                <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                  <div className="text-xs">Advanced Charts</div>
                  <div className="text-xs text-purple-500">Multiple Timeframes</div>
                </div>
                <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                  <div className="text-xs">Custom Indicators</div>
                  <div className="text-xs text-purple-500">2,000+ Available</div>
                </div>
                <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                  <div className="text-xs">Automated Trading</div>
                  <div className="text-xs text-purple-500">EA Support</div>
                </div>
                <div className="bg-[#111]/80 border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                  <div className="text-xs">Available On</div>
                  <div className="text-xs text-purple-500">Desktop & Mobile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
