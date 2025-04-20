"use client"

import { LineChart, Shield, Award, BarChart3 } from "lucide-react"
import { useEffect, useRef } from "react"

export default function FeaturesSection() {
  // Referencias para los elementos que queremos animar
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

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
            Discover our range of innovative trading tools designed for your success
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Explore tailored solutions that meet the unique needs of professional traders, driving efficiency and
            profitability in every market condition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 1 - Risk Management */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="bg-gradient-to-br from-black to-[#120b04] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out"
          >
            {/* Efecto de resplandor naranja */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-medium mb-3 text-center">Advanced Risk Management</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Our proprietary risk calculator helps you maintain proper position sizing and stay within account drawdown
              limits.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-orange-500/20 flex items-center justify-center">
                  <Shield className="w-3 h-3 text-orange-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-orange-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(249,115,22,0.1)]">
                <div className="flex items-start gap-2 mb-4">
                  <div className="min-w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center mt-1">
                    <span className="text-orange-500 text-xs">→</span>
                  </div>
                  <div className="text-sm">Calculate risk for EURUSD long position</div>
                </div>

                <div className="text-sm text-gray-300 mb-4 pl-8">Maximum risk: 1% of $100,000 = $1,000</div>

                <div className="flex gap-2 pl-8 mb-4">
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-orange-500/30 transition-colors">
                    Position size
                  </button>
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-orange-500/30 transition-colors">
                    Stop placement
                  </button>
                </div>

                <div className="flex items-center justify-between pl-8 text-xs text-gray-500">
                  <div>Recommended lot size: 1.25</div>
                  <div className="w-5 h-5 rounded-full bg-[#111] border border-gray-800 flex items-center justify-center">
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 - Performance Metrics */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="bg-gradient-to-br from-black to-[#041204] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-100"
          >
            {/* Efecto de resplandor verde */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-medium mb-3 text-center">Real-time Performance Metrics</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Track your trading performance with detailed analytics on win rate, profit factor, and drawdown
              management.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-green-500/20 flex items-center justify-center">
                  <BarChart3 className="w-3 h-3 text-green-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-green-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                <div className="bg-[#111] border border-gray-800 rounded-lg px-3 py-2 mb-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400">Challenge Account</span>
                    <span className="text-xs text-green-500 mx-1">Performance</span>
                    <span className="text-xs text-gray-400">Metrics</span>
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
                    <div className="text-xs text-gray-300">Trading Statistics</div>
                  </div>
                  <div className="text-xs text-gray-400 pl-6 mb-1">Win Rate: 68%</div>
                  <div className="text-xs text-gray-500 pl-6">• Profit Factor: 2.3</div>
                  <div className="text-xs text-gray-500 pl-6">• Max Drawdown: 4.2%</div>
                  <div className="text-xs text-gray-500 pl-6">• Sharpe Ratio: 1.8</div>
                </div>

                <div className="flex gap-2 justify-center">
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-green-500/30 transition-colors">
                    Daily Report
                  </button>
                  <button className="text-xs bg-[#111] border border-gray-800 rounded-full px-3 py-1 text-gray-400 hover:border-green-500/30 transition-colors">
                    Weekly Summary
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 3 - Trading Journal */}
          <div
            ref={(el) => (cardsRef.current[2] = el)}
            className="bg-gradient-to-br from-black to-[#040e1a] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            {/* Efecto de resplandor azul */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-medium mb-3 text-center">Trading Journal Integration</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Document your trades automatically with our integrated journal system to improve your strategy and
              decision-making.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-blue-500/20 flex items-center justify-center">
                  <LineChart className="w-3 h-3 text-blue-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-blue-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <div className="flex items-start gap-2 mb-4">
                  <div className="min-w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mt-1">
                    <span className="text-blue-500 text-xs">📊</span>
                  </div>
                  <div className="text-sm">Recent Trades</div>
                </div>

                <div className="flex justify-between mb-4 px-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Forex</div>
                    <div className="text-sm">12 trades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Indices</div>
                    <div className="text-sm">8 trades</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-400">Crypto</div>
                    <div className="text-sm">5 trades</div>
                  </div>
                </div>

                <div className="bg-[#111] border border-gray-800 rounded-lg p-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-green-500 rounded-full"></div>
                    <div className="text-xs">EURUSD Long</div>
                    <div className="text-xs text-green-500 ml-auto">+2.4%</div>
                  </div>
                </div>

                <div className="bg-[#111] border border-gray-800 rounded-lg p-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-red-500 rounded-full"></div>
                    <div className="text-xs">GBPJPY Short</div>
                    <div className="text-xs text-red-500 ml-auto">-0.8%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 4 - Funding Milestone */}
          <div
            ref={(el) => (cardsRef.current[3] = el)}
            className="bg-gradient-to-br from-black to-[#120412] border border-gray-800 rounded-xl p-6 flex flex-col relative overflow-hidden group opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300"
          >
            {/* Efecto de resplandor púrpura */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-700"></div>

            <h3 className="text-xl font-medium mb-3 text-center">Funding Milestone Tracker</h3>
            <p className="text-gray-400 text-center text-sm mb-8">
              Monitor your progress towards passing the evaluation and securing your funded trading account.
            </p>

            <div className="mt-auto flex flex-col items-center relative z-10">
              <div className="w-10 h-10 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center mb-6 relative">
                <div className="w-5 h-5 rounded-sm bg-purple-500/20 flex items-center justify-center">
                  <Award className="w-3 h-3 text-purple-500" />
                </div>
                {/* Línea conectora */}
                <div className="absolute h-6 w-0.5 bg-gradient-to-b from-purple-500/50 to-transparent -bottom-6"></div>
              </div>

              <div className="w-full bg-[#0A0A0A]/80 backdrop-blur-sm border border-gray-800 rounded-lg p-4 shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                <div className="flex items-start gap-2 mb-4">
                  <div className="min-w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center mt-1">
                    <span className="text-purple-500 text-xs">🏆</span>
                  </div>
                  <div className="text-sm">Evaluation Progress</div>
                </div>

                <div className="grid grid-cols-1 gap-2 mb-2">
                  <div className="bg-[#111] border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-xs">Profit Target</div>
                    <div className="text-xs text-green-500">8% / 10%</div>
                  </div>
                  <div className="bg-[#111] border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-xs">Max Drawdown</div>
                    <div className="text-xs text-green-500">4.2% / 10%</div>
                  </div>
                  <div className="bg-[#111] border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-xs">Trading Days</div>
                    <div className="text-xs text-green-500">12 / 15</div>
                  </div>
                  <div className="bg-[#111] border border-gray-800 rounded-lg p-2 flex items-center justify-between">
                    <div className="text-xs">Consistency Score</div>
                    <div className="text-xs text-green-500">High</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
