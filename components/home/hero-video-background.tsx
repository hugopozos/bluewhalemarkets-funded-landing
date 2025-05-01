'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroVideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Detectar si es un dispositivo móvil
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    // Comprobar inicialmente
    checkMobile()
    
    // Agregar listener para cambios de tamaño
    window.addEventListener('resize', checkMobile)

    // Detectar interacción del usuario para cargar el video posteriormente
    const handleInteraction = () => {
      setHasInteracted(true)
      
      // Iniciar reproducción del video si está disponible
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          // Silenciar error de reproducción automática
        })
      }
    }

    // Cargar el video después de un breve retraso para mejorar el rendimiento inicial
    const timer = setTimeout(() => {
      setHasInteracted(true)
    }, 800);

    // Agregar listeners para detectar interacción
    window.addEventListener('scroll', handleInteraction, { once: true })
    window.addEventListener('click', handleInteraction, { once: true })
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('click', handleInteraction)
      clearTimeout(timer)
    }
  }, [])

  // Esta función permite cargar el video de forma perezosa
  const loadVideo = () => {
    if (isMobile || !hasInteracted) return null
    
    return (
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        width="1280"
        height="720"
        disablePictureInPicture
        disableRemotePlayback
        className={`absolute w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{
          filter: "brightness(0.5) saturate(1.2)",
        }}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/videos/ocean01.webm" type="video/webm" />
      </video>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      {/* Fondo oscuro para dispositivos móviles o antes de cargar */}
      <div 
        className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${isLoaded && !isMobile ? 'opacity-0' : 'opacity-100'}`}
      />
      
      {/* Video de fondo (solo se carga en desktop y después de interacción) */}
      {loadVideo()}
      
      {/* Capa de opacidad adicional */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Gradiente superpuesto - efecto viñeta con centro más claro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      
      {/* Viñeta para oscurecer los bordes */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" 
        style={{
          background: 'radial-gradient(circle at center, transparent 15%, rgba(0,0,0,0.65) 85%)'
        }}
      />
    </div>
  )
} 