import Hero from "@/components/home/hero"
import HeroDashboardPreview from "@/components/home/hero-dashboard-preview"
import AnnouncementBanner from "@/components/home/announcement-banner"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import FramerBadge from "@/components/ui/framer-badge"
import LogoCarousel from "@/components/home/logo-carousel"
import FeaturesSection from "@/components/home/features-section"
import HowItWorksSection from "@/components/home/how-it-works-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"
import SmoothScrollLinks from "@/components/smooth-scroll-links"

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
        {/* Hero Section con Dashboard */}
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          {/* Announcement Banner */}
          <AnnouncementBanner />

          {/* Hero Section */}
          <Hero />

          {/* Gradient Fade Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

          {/* Dashboard Preview - Usando el nuevo componente similar al de How it Works */}
          <HeroDashboardPreview />
        </div>

        {/* Logo Carousel */}
        <LogoCarousel />

        {/* Features Section */}
        <FeaturesSection />

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
