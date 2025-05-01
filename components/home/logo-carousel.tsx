"use client"

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Función para animar el carousel
const animateCarousel = (container: HTMLDivElement | null, direction: 1 | -1, speed: number) => {
  if (!container) return
  
  let scrollAmount = 0
  const distance = 1 // Pixels por frame
  
  const scroll = () => {
    if (!container) return
    
    scrollAmount += distance
    container.scrollLeft += distance * direction
    
    // Reset cuando el scroll llega al final para crear un loop infinito
    if (scrollAmount >= container.scrollWidth / 2) {
      container.scrollLeft = 0
      scrollAmount = 0
    }
    
    requestAnimationFrame(scroll)
  }
  
  requestAnimationFrame(scroll)
}

export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Iniciar animación cuando el componente se monta
    animateCarousel(containerRef.current, 1, 1)
    
    // Limpiar animación cuando el componente se desmonta
    return () => {
      // No hay nada que limpiar en este caso ya que utilizamos requestAnimationFrame
    }
  }, [])
  
  // Logos de empresas con sus enlaces correspondientes
  const logos = [
    { 
      name: 'El Economista', 
      src: '/images/companys/el-economista.png',
      url: 'https://www.eleconomista.com.mx/mercados/Precio-del-dolar-hoy-6-de-septiembre-de-2024-A-cuanto-cerro-20240906-0058.html'
    },
    { 
      name: 'El Financiero', 
      src: '/images/companys/el-financiero.png',
      url: 'https://www.elfinanciero.com.mx/opinion/de-jefes/2024/09/02/talento-humano-al-centro/?outputType=amp'
    },
    { 
      name: 'El Universal', 
      src: '/images/companys/el-universal.png',
      url: 'https://www.eluniversal.com.mx/cartera/perspectivas-economicas-siguen-siendo-fragiles-principal-asset-management-ven-mas-riesgo-de-desaceleracion-del-comercio/'
    },
    { 
      name: 'Milenio', 
      src: '/images/companys/milenio.png',
      url: 'https://www.milenio.com/videos/negocios/principales-companias-unidos-sangrar-aranceles-trump-blue-whale-markets'
    },
    { 
      name: 'New York Times', 
      src: '/images/companys/new-york-times.png',
      url: 'https://www.nytimes.com'
    },
    { 
      name: 'Yahoo Finance', 
      src: '/images/companys/yahoo-finance.png',
      url: 'https://es-us.finanzas.yahoo.com/noticias/perspectivas-econ%C3%B3micas-siguen-fr%C3%A1giles-seema-144352932.html'
    }
  ]

  return (
    <div className="relative w-full overflow-hidden">
      {/* Capa de fading en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-black to-transparent"></div>
      
      {/* Contenedor de logos con scroll */}
      <div 
        ref={containerRef}
        className="flex space-x-16 py-4 whitespace-nowrap overflow-x-scroll scrollbar-hide"
      >
        {/* Duplicamos los logos para crear efecto infinito */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex items-center justify-center">
            <Link 
              href={logo.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-8 relative w-24 flex items-center justify-center hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={96}
                height={32}
                className="max-h-8 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                title={logo.name}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
