"use client";
import { motion } from "framer-motion";

export default function PlatformPreviewSection() {
  return (
    <section id="platform-preview" className="relative py-24 overflow-hidden">
      {/* Círculo animado con Framer Motion */}
      <motion.div
        className="absolute left-1/2 top-1/2 w-[600px] h-[600px] rounded-full pointer-events-none opacity-15"
        style={{
          background:
            "conic-gradient(from 0deg, #9333ea, #06b6d4 40%, #f43f5e 80%, #9333ea)",
          filter: "blur(80px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
      />

      {/* Malla de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10" />

      {/* Contenido */}
      <div className="relative max-w-5xl mx-auto px-4">
        …contenido…
      </div>
    </section>
  );
}

