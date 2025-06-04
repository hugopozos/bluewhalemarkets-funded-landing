  'use client'

  import { useState, useEffect, useRef } from 'react'

  export default function HeroVideoBackground() {
    const [isLoaded, setIsLoaded] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768)
      }

      checkMobile()
      window.addEventListener('resize', checkMobile)
      return () => {
        window.removeEventListener('resize', checkMobile)
      }
    }, [])

    return (
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <div 
          className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
        />

        {!isMobile && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
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
           <source src="/videos/video-hero.webm" type="video/webm" />
          </video>
        )}

        {/* <div className="absolute inset-0 bg-blue-900/30 mix-blend-color"></div>
        <div className="absolute inset-0 bg-black/35"></div> */}
        {/* <div className="absolute inset-0" 
          style={{
            background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 80%)',
            backdropFilter: 'blur(1px)'
          }}
        ></div> */}


  {/* Más alto: de arriba hacia abajo */}
  <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/70 via-black/50 to-transparent"></div>

  {/* Más alto: de abajo hacia arriba */}
  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

  {/* <div className="absolute inset-x-0 bottom-0 h-2 bg-black"></div>
  <div className="absolute inset-x-0 -bottom-1 h-2 bg-black transform scale-110"></div> */}

        
      </div>
    )
  }
