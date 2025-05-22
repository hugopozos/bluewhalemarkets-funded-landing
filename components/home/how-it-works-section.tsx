'use client';

import { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import clsx from 'clsx';

export default function HowItWorksSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleBackgroundClick = (e: MouseEvent) => {
    // Si el modal está abierto y el click NO fue dentro del modal, cerrar
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('click', handleBackgroundClick);
    } else {
      window.removeEventListener('click', handleBackgroundClick);
    }
    return () => window.removeEventListener('click', handleBackgroundClick);
  }, [isOpen]);

  const handleClose = () => {
    setClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setClosing(false);
    }, 300);
  };

  // NUEVO: Al clickear el botón, evitar que el evento 'click' burbujee y cierre el video inmediatamente
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // <--- Esto es clave
    setIsOpen(true);
  };

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Our Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Why Choose Blue Whale Markets Funded?
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Experience a truly trader-centric environment with the best conditions for professional traders
          </p>
        </div>

        <div className="flex justify-center relative z-20 w-full max-w-3xl mx-auto">
          {!isOpen && (
               <button 
               onClick={handleButtonClick}
               className="relative w-44 py-3 px-5 rounded-full font-semibold text-white shadow-md transition-all duration-300 overflow-hidden group text-base">
               <span className="absolute inset-0 rounded-full bg-[conic-gradient(at_center,_#ffffff33,_#ffffff99,_#ffffff33)] animate-spin-slow blur-sm opacity-40 group-hover:opacity-70 z-0"></span>
               <span className="absolute inset-[2px] bg-[#0a0a0a] rounded-full z-0"></span>
               <span className="relative z-10">
               <span className="relative z-10">Ver video</span>
               </span>
             </button>
          )}

          {isOpen && (
            <div
              ref={modalRef}
              className={clsx(
                "relative bg-[#0a0a0a] border border-gray-700 rounded-xl shadow-xl w-full transform transition-all duration-300",
                closing ? "scale-95 opacity-0" : "scale-100 opacity-100"
              )}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleClose();
                }}
                className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
              >
                <X size={24} />
              </button>

              <div className="relative pt-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-b-xl"
                  src="https://www.youtube.com/embed/8uwD8XY70cM"
                  title="Blue Whale Markets Funded"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes glow {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            transform: translateX(100%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        .animate-glow {
          animation: glow 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
