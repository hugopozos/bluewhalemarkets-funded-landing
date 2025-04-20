"use client"

import type React from "react"
import { useEffect, useState } from "react"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Variables para el smooth scrolling
    let target = 0
    let current = 0
    const ease = 0.05 // Valor más bajo = scroll más lento
    let rafId: number | null = null
    let lastScrollTop = 0

    // Función para inicializar el smooth scroll
    const initSmoothScroll = () => {
      const html = document.documentElement
      const body = document.body

      // Crear un wrapper para el contenido
      const wrapper = document.createElement("div")
      wrapper.setAttribute("id", "smooth-scroll-wrapper")
      
      // Crear un contenedor para el contenido
      const content = document.createElement("div")
      content.setAttribute("id", "smooth-scroll-content")
      
      // Mover todos los hijos del body al contenedor de contenido
      while (body.firstChild) {
        content.appendChild(body.firstChild)
      }
      
      // Añadir el contenido al wrapper y el wrapper al body
      wrapper.appendChild(content)
      body.appendChild(wrapper)
      
      // Aplicar estilos al wrapper y al contenido
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
      
      // Función para calcular la altura exacta del contenido
      const calculateExactHeight = () => {
        // Obtener todos los elementos del contenido
        const allElements = content.querySelectorAll('*');
        let maxBottom = 0;
        
        // Calcular el punto más bajo de cualquier elemento en la página
        allElements.forEach(el => {
          const rect = el.getBoundingClientRect();
          const bottom = rect.bottom + window.scrollY;
          if (bottom > maxBottom) {
            maxBottom = bottom;
          }
        });
        
        // Usar también la altura del contenedor principal como referencia
        const contentHeight = content.offsetHeight;
        maxBottom = Math.max(maxBottom, contentHeight);
        
        // No añadir margen adicional para evitar espacio en blanco
        return Math.ceil(maxBottom);
      };
      
      // Establecer la altura del body para habilitar el scroll exactamente al tamaño del contenido
      const setHeight = () => {
        const exactHeight = calculateExactHeight();
        // Asegurar que no añadimos espacio extra
        const viewportHeight = window.innerHeight;
        const footerElement = document.querySelector('footer');
        
        if (footerElement) {
          // Si hay un footer, ajustar la altura para que termine justo con él
          const footerRect = footerElement.getBoundingClientRect();
          const footerBottom = footerRect.bottom + window.scrollY;
          document.body.style.height = `${footerBottom}px`;
        } else {
          // Si no hay footer, usar la altura calculada
          document.body.style.height = `${exactHeight}px`;
        }
      }
      
      // Llamar a setHeight inicialmente y en cada cambio de tamaño
      setHeight()
      window.addEventListener("resize", setHeight)
      
      // Crear un observador para actualizar la altura cuando cambie el contenido
      const resizeObserver = new ResizeObserver(() => {
        setHeight()
      })
      resizeObserver.observe(content)
      
      // Crear un observador de mutaciones para detectar cambios en el DOM
      const mutationObserver = new MutationObserver(() => {
        setHeight()
      })
      
      // Observar cambios en el contenido
      mutationObserver.observe(content, { 
        childList: true, 
        subtree: true,
        attributes: true,
        characterData: true
      })
      
      // Función para la animación de scroll
      const smoothScroll = () => {
        // Actualizar posición objetivo
        target = window.scrollY
        
        // Aplicar la interpolación para el efecto suave
        current = current + (target - current) * ease
        
        // Aplicar la transformación al contenido
        if (Math.abs(target - current) > 0.1) {
          content.style.transform = `translate3d(0, ${-current}px, 0)`
          rafId = requestAnimationFrame(smoothScroll)
        } else {
          content.style.transform = `translate3d(0, ${-target}px, 0)`
          current = target
          rafId = null
        }

        // Asegurarse de que no haya espacio adicional debajo del footer
        const footerElement = document.querySelector('footer');
        if (footerElement) {
          const footerRect = footerElement.getBoundingClientRect();
          const documentHeight = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          );
          
          if (footerRect.bottom > window.innerHeight && documentHeight > footerRect.bottom + window.scrollY) {
            document.body.style.height = `${footerRect.bottom + window.scrollY}px`;
          }
        }
      }
      
      // Manejar el evento de scroll
      const handleScroll = () => {
        if (rafId === null) {
          rafId = requestAnimationFrame(smoothScroll)
        }
      }
      
      // Añadir event listener para el scroll
      window.addEventListener("scroll", handleScroll)
      
      // Iniciar la animación
      handleScroll()
      
      // Actualizar la altura después de que las imágenes y otros recursos se carguen
      window.addEventListener('load', setHeight);
      
      // Función de limpieza
      return () => {
        // Limpiar los observadores
        resizeObserver.disconnect()
        mutationObserver.disconnect()
        
        // Eliminar event listeners
        window.removeEventListener("resize", setHeight)
        window.removeEventListener("scroll", handleScroll)
        window.removeEventListener('load', setHeight)
        
        // Cancelar la animación
        if (rafId !== null) {
          cancelAnimationFrame(rafId)
        }
        
        // Restaurar el DOM original
        while (content.firstChild) {
          body.appendChild(content.firstChild)
        }
        
        body.removeChild(wrapper)
        body.style.height = ""
      }
    }
    
    // Iniciar el smooth scroll con un pequeño retraso para permitir que el DOM se cargue completamente
    const timeoutId = setTimeout(() => {
      const cleanup = initSmoothScroll()
      
      // Hacer un cálculo adicional después de un tiempo para asegurar que todos los elementos se han renderizado
      const recalculateId = setTimeout(() => {
        const content = document.getElementById('smooth-scroll-content');
        if (content) {
          const footerElement = document.querySelector('footer');
          if (footerElement) {
            const footerRect = footerElement.getBoundingClientRect();
            const footerBottom = footerRect.bottom + window.scrollY;
            document.body.style.height = `${footerBottom}px`;
            
            // Prevenir scroll más allá del footer usando CSS
            const style = document.createElement('style');
            style.textContent = `
              html {
                scroll-padding-bottom: 0;
                overscroll-behavior: none;
              }
              body {
                overflow-x: hidden;
                overscroll-behavior: none;
              }
              html, body {
                max-height: ${footerBottom}px;
                overflow-y: auto;
              }
              footer {
                margin-bottom: 0 !important;
              }
            `;
            document.head.appendChild(style);
          }
        }
      }, 1000);
      
      // Establecer cleanup para cuando el componente se desmonte
      return () => {
        cleanup()
        clearTimeout(recalculateId)
      }
    }, 100)
    
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])
  
  return <>{children}</>
}
