"use client"

import Image from 'next/image'
import Link from 'next/link'

export default function LogoCarousel() {
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
      {/* Aplicamos una máscara CSS al contenedor principal */}
      <div className="w-full overflow-hidden py-6" 
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
        }}>
        <div 
          className="flex space-x-24 py-4 animate-slide"
          style={{
            whiteSpace: 'nowrap',
            width: 'max-content',
            animation: 'slideLogos 30s linear infinite'
          }}
        >
          {/* Duplicamos los logos para crear efecto infinito */}
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <Link 
                href={logo.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-14 relative w-40 flex items-center justify-center hover:opacity-100 transition-opacity"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={160}
                  height={56}
                  className="max-h-14 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                  title={logo.name}
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Definición de la animación CSS */}
        <style jsx global>{`
          @keyframes slideLogos {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </div>
  )
}
