import { ShieldCheck, Award, Milestone } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-black relative">
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Our Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Why Choose Blue Whale Markets Funded?
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-16">
            {/* Benefit 1 */}
            <div className="relative">
              <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              <div className="flex gap-8">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <div className="w-6 h-6 rounded-sm bg-blue-500/20 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Secure Trading Environment</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    We provide a reliable and secure platform with sophisticated risk management systems. Your trading journey is protected with regulated brokers and transparent terms.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="relative">
              <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-green-500/50 to-transparent"></div>
              <div className="flex gap-8">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                    <div className="w-6 h-6 rounded-sm bg-green-500/20 flex items-center justify-center">
                      <Award className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Industry-Leading Profit Splits</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Earn up to 95% of your trading profits with our competitive split structures. We reward talent with generous profit shares, frequent payouts, and bonuses for consistent performers.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex gap-8">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <div className="w-6 h-6 rounded-sm bg-purple-500/20 flex items-center justify-center">
                    <Milestone className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Trader-Focused Growth Path</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Experience a truly trader-centric environment with scaling opportunities, educational resources, and a supportive community. We're invested in your long-term success as a professional trader.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Video Player */}
          <div className="relative">
            {/* Efecto de resplandor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="bg-gradient-to-br from-black to-[#080816] border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)]">
              {/* YouTube Video Embed */}
              <div className="relative pt-[56.25%] w-full">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full" 
                  src="https://www.youtube.com/embed/8uwD8XY70cM" 
                  title="Blue Whale Markets Funded"
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Features List */}
              <div className="p-5 border-t border-gray-800">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-light text-white mb-1">5,000+</div>
                    <div className="text-xs text-gray-400">Active Traders</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-white mb-1">$25M+</div>
                    <div className="text-xs text-gray-400">Trader Profits Paid</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-light text-white mb-1">95%</div>
                    <div className="text-xs text-gray-400">Max Profit Split</div>
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
