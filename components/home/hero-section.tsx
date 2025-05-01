'use client'

import { memo } from 'react'
import dynamic from 'next/dynamic'
import Hero from "@/components/home/hero"
import LogoCarousel from "@/components/home/logo-carousel"

// Cargar el componente de video con lazy loading
const HeroVideoBackground = dynamic(() => import('@/components/home/hero-video-background'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
})

// Componente optimizado con memo para evitar rerenderizados innecesarios
const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Video de fondo optimizado */}
      <HeroVideoBackground />
      
      {/* Contenido del Hero sobre el video, centrado vertical y horizontalmente */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
        {/* Hero Section */}
        <Hero />
        
        {/* Texto de medios donde ha aparecido */}
        <div className="mt-16 text-center text-sm text-gray-400">
          <p>Featured in <span className="font-semibold text-white">leading financial media</span></p>
        </div>
        
        {/* Logo Carousel integrado directamente en la sección hero */}
        <div className="mt-6 w-full max-w-4xl">
          <LogoCarousel />
        </div>
      </div>
    </section>
  )
}

export default memo(HeroSection) 