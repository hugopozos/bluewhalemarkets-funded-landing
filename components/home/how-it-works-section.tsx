import { Zap, BarChart, HeadsetIcon } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-black relative">
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            How it works
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Experience a seamless journey to becoming a funded trader
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Steps */}
          <div className="space-y-16">
            {/* Step 1 */}
            <div className="relative">
              <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
              <div className="flex gap-8">
                <div className="relative">
                  <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <div className="w-6 h-6 rounded-sm bg-blue-500/20 flex items-center justify-center">
                      <Zap className="w-4 h-4 text-blue-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Simple evaluation process to get started</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Get started quickly with our trader-friendly evaluation process that assesses your skills and risk
                    management. Pass our challenge and get funded in as little as 14 days.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="absolute left-6 top-20 w-0.5 h-32 bg-gradient-to-b from-green-500/50 to-transparent"></div>
              <div className="flex gap-8">
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(34,197,94,0.15)]">
                    <div className="w-6 h-6 rounded-sm bg-green-500/20 flex items-center justify-center">
                      <BarChart className="w-4 h-4 text-green-500" />
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Real-time performance tracking</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Experience the power of our advanced trading analytics, providing you with actionable insights on
                    your trading patterns, strengths, and areas for improvement as they happen.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-8">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#111] border border-gray-800 flex items-center justify-center relative shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                  <div className="w-6 h-6 rounded-sm bg-purple-500/20 flex items-center justify-center">
                    <HeadsetIcon className="w-4 h-4 text-purple-500" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-3">Ongoing trader support</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  We're dedicated to your success with continuous support, educational resources, and regular payout
                  options to keep you focused on what matters most - profitable trading.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Dashboard Preview */}
          <div className="relative">
            {/* Efecto de resplandor */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>

            <div className="bg-[#0A0A0A] border border-gray-800 rounded-xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.3)]">
              {/* Dashboard Header */}
              <div className="border-b border-gray-800 p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-xs text-gray-400">trader-dashboard.com</div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-gray-800"></div>
                  <div className="w-4 h-4 rounded bg-gray-800"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="flex">
                {/* Sidebar */}
                <div className="w-40 border-r border-gray-800 p-3 space-y-4">
                  <div className="text-xs font-medium text-gray-300 mb-2">Dashboard</div>
                  <div className="bg-blue-500/10 text-blue-400 text-xs py-1.5 px-2 rounded flex items-center gap-1.5">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    Dashboard
                  </div>
                  <div className="text-xs text-gray-500 py-1.5 px-2">Profile</div>
                  <div className="text-xs text-gray-500 py-1.5 px-2">Trading Rules</div>
                  <div className="text-xs text-gray-500 py-1.5 px-2">Analytics</div>
                  <div className="text-xs text-gray-500 py-1.5 px-2">Settings</div>

                  <div className="pt-4 border-t border-gray-800 mt-4">
                    <div className="text-xs font-medium text-gray-300 mb-2">Accounts</div>
                    <div className="text-xs text-gray-500 py-1.5 px-2">Challenge</div>
                    <div className="text-xs text-gray-500 py-1.5 px-2">Verification</div>
                    <div className="text-xs text-gray-500 py-1.5 px-2">Funded</div>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-medium">Trading Dashboard</div>
                    <div className="text-xs bg-green-500/20 text-green-500 px-2 py-0.5 rounded-full">
                      Challenge: Phase 1
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-[#111] border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">ACCOUNT BALANCE</div>
                      <div className="text-base font-medium truncate">$103,245.80</div>
                      <div className="text-xs text-green-500">+3.2%</div>
                    </div>
                    <div className="bg-[#111] border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">DRAWDOWN</div>
                      <div className="text-base font-medium">4.2%</div>
                      <div className="text-xs text-gray-400">Max: 10%</div>
                    </div>
                    <div className="bg-[#111] border border-gray-800 rounded-lg p-3">
                      <div className="text-xs text-gray-400 mb-1">PROFIT TARGET</div>
                      <div className="text-base font-medium">8.1%</div>
                      <div className="text-xs text-gray-400">Target: 10%</div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-[#111] border border-gray-800 rounded-lg p-3 mb-4 h-32 relative overflow-hidden">
                    <div className="text-xs text-gray-400 mb-2">EQUITY CURVE</div>
                    <div className="absolute bottom-0 left-0 right-0 h-24">
                      <svg viewBox="0 0 100 30" className="w-full h-full">
                        <path
                          d="M0,30 L1,28 L2,29 L3,26 L4,25 L5,24 L6,25 L7,24 L8,22 L9,20 L10,19 L11,18 L12,17 L13,18 L14,17 L15,16 L16,15 L17,14 L18,13 L19,14 L20,13 L21,12 L22,13 L23,12 L24,11 L25,10 L26,9 L27,10 L28,9 L29,8 L30,9 L31,8 L32,7 L33,8 L34,7 L35,6 L36,7 L37,6 L38,5 L39,6 L40,5 L41,4 L42,5 L43,4 L44,3 L45,4 L46,3 L47,2 L48,3 L49,2 L50,1 L51,2 L52,3 L53,2 L54,3 L55,4 L56,3 L57,4 L58,5 L59,4 L60,5 L61,6 L62,5 L63,6 L64,7 L65,6 L66,7 L67,8 L68,7 L69,6 L70,5 L71,4 L72,3 L73,2 L74,3 L75,2 L76,1 L77,2 L78,1 L79,0 L80,1 L81,2 L82,3 L83,2 L84,3 L85,4 L86,3 L87,4 L88,5 L89,4 L90,5 L91,6 L92,5 L93,4 L94,3 L95,4 L96,3 L97,2 L98,3 L99,2 L100,1"
                          fill="none"
                          stroke="#22c55e"
                          strokeWidth="0.5"
                        />
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                        </linearGradient>
                        <path
                          d="M0,30 L1,28 L2,29 L3,26 L4,25 L5,24 L6,25 L7,24 L8,22 L9,20 L10,19 L11,18 L12,17 L13,18 L14,17 L15,16 L16,15 L17,14 L18,13 L19,14 L20,13 L21,12 L22,13 L23,12 L24,11 L25,10 L26,9 L27,10 L28,9 L29,8 L30,9 L31,8 L32,7 L33,8 L34,7 L35,6 L36,7 L37,6 L38,5 L39,6 L40,5 L41,4 L42,5 L43,4 L44,3 L45,4 L46,3 L47,2 L48,3 L49,2 L50,1 L51,2 L52,3 L53,2 L54,3 L55,4 L56,3 L57,4 L58,5 L59,4 L60,5 L61,6 L62,5 L63,6 L64,7 L65,6 L66,7 L67,8 L68,7 L69,6 L70,5 L71,4 L72,3 L73,2 L74,3 L75,2 L76,1 L77,2 L78,1 L79,0 L80,1 L81,2 L82,3 L83,2 L84,3 L85,4 L86,3 L87,4 L88,5 L89,4 L90,5 L91,6 L92,5 L93,4 L94,3 L95,4 L96,3 L97,2 L98,3 L99,2 L100,1 L100,30 L0,30"
                          fill="url(#gradient)"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div>
                    <div className="text-xs font-medium mb-2">QUICK ACTIONS</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-[#111] border border-gray-800 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium">Trading Journal</div>
                          <div className="text-xs text-gray-400">Record your trades</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <span className="text-xs">→</span>
                        </div>
                      </div>
                      <div className="bg-[#111] border border-gray-800 rounded-lg p-3 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium">Payout Request</div>
                          <div className="text-xs text-gray-400">Withdraw profits</div>
                        </div>
                        <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center">
                          <span className="text-xs">→</span>
                        </div>
                      </div>
                    </div>
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
