'use client'

import { useState, useEffect, useRef } from 'react'

export default function HeroVideoBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const handleInteraction = () => {
      setHasInteracted(true)
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(() => {})
      }
    }

    const timer = setTimeout(() => {
      setHasInteracted(true)
    }, 800);

    window.addEventListener('scroll', handleInteraction, { once: true })
    window.addEventListener('click', handleInteraction, { once: true })

    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleInteraction)
      window.removeEventListener('click', handleInteraction)
      clearTimeout(timer)
    }
  }, [])

  const handleVideoEnded = () => {
    if (!videoRef.current) return
    videoRef.current.pause()
    videoRef.current.currentTime = 0.05 
    videoRef.current.play().catch(() => {})
  }

  const loadVideo = () => {
    if (isMobile || !hasInteracted) return null
    
    return (
      <video
        ref={videoRef}
        autoPlay
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
        onEnded={handleVideoEnded} 
      >
        <source src="/videos/video-hero.mp4" type="video/mp4" />
      </video>
    )
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
      <div 
        className={`absolute inset-0 bg-black/90 transition-opacity duration-500 ${isLoaded && !isMobile ? 'opacity-0' : 'opacity-100'}`}
      />
      {loadVideo()}
      <div className="absolute inset-0 bg-blue-900/30 mix-blend-color"></div>
      <div className="absolute inset-0 bg-black/35"></div>
      <div className="absolute inset-0" 
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.4) 80%)',
          backdropFilter: 'blur(1px)'
        }}
      ></div>
      <div className="absolute inset-x-0 -top-1 h-3 bg-black transform scale-x-110"></div>
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-2 bg-black"></div>
      <div className="absolute inset-x-0 -bottom-1 h-2 bg-black transform scale-110"></div>
    </div>
  )
}
