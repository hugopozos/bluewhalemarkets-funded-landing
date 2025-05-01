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

        {/* Features Section */}
        <FeaturesSection />

        {/* Challenges Table Section */}
        <ChallengesTable />

        {/* How It Works Section */}
        <HowItWorksSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Framer Badge */}
      <FramerBadge />
    </div>
  )
}
