"use client"

import type React from "react"
import { useEffect } from "react"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.innerWidth < 768) return // No aplicar smooth scroll en móviles

    // Variables para el smooth scrolling
    let target = 0
    let current = 0
    const ease = 0.05
    let rafId: number | null = null

    const initSmoothScroll = () => {
      const html = document.documentElement
      const body = document.body

      const wrapper = document.createElement("div")
      wrapper.setAttribute("id", "smooth-scroll-wrapper")

      const content = document.createElement("div")
      content.setAttribute("id", "smooth-scroll-content")

      while (body.firstChild) {
        content.appendChild(body.firstChild)
      }

      wrapper.appendChild(content)
      body.appendChild(wrapper)

      Object.assign(wrapper.style, {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden"
      })

      Object.assign(content.style, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transformStyle: "preserve-3d",
        willChange: "transform"
      })

      const calculateExactHeight = () => {
        const allElements = content.querySelectorAll('*')
        let maxBottom = 0
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect()
          const bottom = rect.bottom + window.scrollY
          if (bottom > maxBottom) maxBottom = bottom
        })
        const contentHeight = content.offsetHeight
        return Math.max(maxBottom, contentHeight)
      }

      const setHeight = () => {
        const exactHeight = calculateExactHeight()
        const footerElement = document.querySelector('footer')
        if (footerElement) {
          const footerRect = footerElement.getBoundingClientRect()
          const footerBottom = footerRect.bottom + window.scrollY
          document.body.style.height = `${footerBottom}px`
        } else {
          document.body.style.height = `${exactHeight}px`
        }
      }

      setHeight()
      window.addEventListener("resize", setHeight)

      const resizeObserver = new ResizeObserver(() => {
        setHeight()
      })
      resizeObserver.observe(content)

      const mutationObserver = new MutationObserver(() => {
        setHeight()
      })
      mutationObserver.observe(content, {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true
      })

      const smoothScroll = () => {
        target = window.scrollY
        current = current + (target - current)
        if (Math.abs(target - current) > 0.1) {
          content.style.transform = `translate3d(0, ${-current}px, 0)`
          rafId = requestAnimationFrame(smoothScroll)
        } else {
          content.style.transform = `translate3d(0, ${-target}px, 0)`
          current = target
          rafId = null
        }
      }

      const handleScroll = () => {
        if (rafId === null) {
          rafId = requestAnimationFrame(smoothScroll)
        }
      }

      window.addEventListener("scroll", handleScroll)
      window.addEventListener("load", setHeight)

      const cleanup = () => {
        resizeObserver.disconnect()
        mutationObserver.disconnect()
        window.removeEventListener("resize", setHeight)
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener("load", setHeight)
        if (rafId !== null) cancelAnimationFrame(rafId)
        while (content.firstChild) {
          body.appendChild(content.firstChild)
        }
        body.removeChild(wrapper)
        body.style.height = ""
      }

      return cleanup
    }

    const timeoutId = setTimeout(() => {
      const cleanupFn = initSmoothScroll()
      const recalculateId = setTimeout(() => {
        const footerElement = document.querySelector('footer')
        if (footerElement) {
          const footerRect = footerElement.getBoundingClientRect()
          const footerBottom = footerRect.bottom + window.scrollY
          document.body.style.height = `${footerBottom}px`
        }
      }, 1000)

      return () => {
        if (typeof cleanupFn === 'function') {
          cleanupFn()
        }
        clearTimeout(recalculateId)
      }
    }, 100)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return <>{children}</>
}
