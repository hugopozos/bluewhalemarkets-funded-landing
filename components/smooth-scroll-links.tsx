"use client"

import { useEffect } from "react"

export default function SmoothScrollLinks() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener("click", function (this: HTMLAnchorElement, e) {
        e.preventDefault()

        const targetId = this.getAttribute("href")
        if (!targetId || targetId === "#") return

        const targetElement = document.querySelector(targetId)
        if (!targetElement || !(targetElement instanceof HTMLElement)) return


        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "auto" // sin suavidad
        })
      })
    })


    return () => {
      links.forEach((link) => {
        link.replaceWith(link.cloneNode(true))
      })
    }
  }, [])

  return null
}
