import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import FramerBadge from "@/components/ui/framer-badge"
import FeaturesSection from "@/components/home/features-section"
import HowItWorksSection from "@/components/home/how-it-works-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"
import SmoothScrollLinks from "@/components/smooth-scroll-links"
import HeroSection from "@/components/home/hero-section"
import ChallengesTable from "@/components/home/challenges-table"
import HeroDashboardPreview from "@/components/home/hero-dashboard-preview"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      {/* Componente para manejar el scroll suave en enlaces internos */}
      <SmoothScrollLinks />

      {/* Background grid pattern with gradient */}
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(0,0,0,1), rgba(30,20,60,0.8)), radial-gradient(#333 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        {/* Hero Section con Dashboard y Video de Fondo */}
        <HeroSection />

        {/* Dashboard Preview Section */}
        <section id="platform-preview" className="py-24 bg-black relative">
          {/* Fondo con efecto de puntos */}
          <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>
          
          <div className="max-w-5xl mx-auto px-4 relative">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
                Platform Preview
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
                Advanced trading dashboard designed for optimal performance
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Our intuitive interface gives you complete control over your trading journey with real-time analytics and powerful tools
              </p>
            </div>
            
            <HeroDashboardPreview />
          </div>
        </section>

        {/* Features Section */}
        <section id="trading-tools">
          <FeaturesSection />
        </section>

        {/* Challenges Table Section */}
        <section id="challenges">
          <ChallengesTable />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works">
          <HowItWorksSection />
        </section>

        {/* Testimonials Section */}
        <section id="testimonials">
          <TestimonialsSection />
        </section>

        {/* CTA Section */}
        <section id="get-started">
          <CTASection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Framer Badge */}
      <FramerBadge />
    </div>
  )
}
