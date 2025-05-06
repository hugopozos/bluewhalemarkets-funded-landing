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
          <p className="text-gray-400 max-w-2xl">
            Experience a truly trader-centric environment with the best conditions for professional traders
          </p>
        </div>

        {/* Video Player Section - Now using full width */}
        <div className="max-w-4xl mx-auto relative">
          {/* Efecto de resplandor */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-500/5 blur-3xl rounded-full"></div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
