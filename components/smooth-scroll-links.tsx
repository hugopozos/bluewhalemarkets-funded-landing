"use client"

import { useEffect } from "react"

export default function SmoothScrollLinks() {
  useEffect(() => {
    // Seleccionar todos los enlaces internos
    const links = document.querySelectorAll('a[href^="#"]')

    // Añadir event listener a cada enlace
    links.forEach((link) => {
      link.addEventListener("click", function(this: HTMLAnchorElement, e) {
        // Prevenir el comportamiento predeterminado
        e.preventDefault()

        // Obtener el destino del enlace
        const targetId = this.getAttribute("href")
        if (!targetId || targetId === "#") return

        // Obtener el elemento de destino
        const targetElement = document.querySelector(targetId)
        if (!targetElement) return

        // Obtener la posición del elemento
        const rect = targetElement.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const targetPosition = rect.top + scrollTop

        // Scroll suave hacia el elemento
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      })
    })
  }, [])

  return null
}
