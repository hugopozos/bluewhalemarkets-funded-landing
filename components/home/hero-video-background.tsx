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
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-80' : 'opacity-0'}`}
        style={{
          filter: "brightness(0.6) saturate(1.1) contrast(1.1)",
        }}
        onLoadedData={() => setIsLoaded(true)}
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
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
      
      {/* Capa de color azul oscuro con baja opacidad para efecto duotono */}
      <div className="absolute inset-0 bg-blue-900/30 mix-blend-color"></div>
      
      {/* Capa de oscuridad general para mejorar legibilidad */}
      <div className="absolute inset-0 bg-black/35"></div>
      
      {/* Efecto de viñeta avanzado para destacar el centro donde suele estar el texto */}
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 80%)',
          backdropFilter: 'blur(1px)'
        }}
      ></div>
      
      {/* Capa negra sólida en la parte superior para evitar la línea de separación */}
      <div className="absolute inset-x-0 -top-1 h-3 bg-black transform scale-x-110"></div>
      
      {/* Gradiente superior para una transición suave - muy sutil */}
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      
      {/* Gradiente inferior ampliado para evitar línea durante el scroll */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
      {/* Capa de corrección para bordes durante scroll */}
      <div className="absolute inset-x-0 bottom-0 h-2 bg-black"></div>
      
      {/* Capa extra para prevenir líneas al hacer scroll */}
      <div className="absolute inset-x-0 -bottom-1 h-2 bg-black transform scale-110"></div>
    </div>
  )
} 