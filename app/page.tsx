'use client'

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import FramerBadge from "@/components/ui/framer-badge"
import FeaturesSection from "@/components/home/features-section"
import HowItWorksSection from "@/components/home/how-it-works-section"
import TestimonialsSection from "@/components/home/testimonials-section"
import CTASection from "@/components/home/cta-section"
import HeroSection from "@/components/home/hero-section"
import ChallengesTable from "@/components/home/challenges-table"
import HeroDashboardPreview from "@/components/home/hero-dashboard-preview"
import { motion } from "framer-motion";
import { useRef, useLayoutEffect, useState, useEffect } from "react";

const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
const NUM_PROTONES = isMobile ? 5 : 24;

export default function Home() {
  const mainRef = useRef<HTMLElement | null>(null);
  const [mainHeight, setMainHeight] = useState(0);
  const [protonConfigs, setProtonConfigs] = useState<any[]>([]);

  useLayoutEffect(() => {
    if (mainRef.current) {
      setMainHeight(mainRef.current.clientHeight);
    }
  }, []);

  useEffect(() => {
    const handleClick = (e: any) => {
      const href = e.target?.getAttribute("href");
      if (href?.startsWith("#")) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) {
          const yOffset = -88; // ajuste por el navbar
          const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    };
  
    document.querySelectorAll("a[href^='#']").forEach((link) => {
      link.addEventListener("click", handleClick);
    });
  

    if (typeof window === 'undefined' || !mainRef.current) return;

    const containerWidth = mainRef.current.clientWidth || window.innerWidth;
    const containerHeight = mainRef.current.clientHeight || window.innerHeight;

    const configs = Array.from({ length: NUM_PROTONES }).map(() => {
      const orbitRadius = 200 + Math.random() * 300; 
      const size = 150 + Math.random() * 300; 
      const duration = 10 + Math.random() * 15;
      const startAngle = Math.random() * 360;

      const centerX = Math.random() * containerWidth;
      const centerY = Math.random() * containerHeight;

      const steps = 120;
      const angles = Array.from({ length: steps }, (_, idx) =>
        (startAngle + (360 / steps) * idx) * (Math.PI / 180)
      );
      const xs = angles.map((a) => centerX + orbitRadius * Math.cos(a));
      const ys = angles.map((a) => centerY + orbitRadius * Math.sin(a));

      return { xs, ys, size, duration };
    });

    setProtonConfigs(configs);
  }, [mainHeight]);

  return (
    
    <div className="flex flex-col min-h-screen bg-black text-white ">

   
     
<div
  className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" 
  style={{
    background:
      "linear-gradient(to bottom right, rgba(0,0,0,1), rgba(30,20,60,0.8)), radial-gradient(#333 1px, transparent 1px)",
    backgroundSize: "20px 20px",
  }}
/>

       
      <Navbar />
      <main ref={mainRef} className="relative z-10 flex-grow home">
        
        <section className="relative z-10">
          
          <HeroSection />
          
        </section>

        {mainHeight > 0 && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            {protonConfigs.map((config, i) => (
              <motion.div
                key={`proton-${i}`}
                animate={{ x: config.xs, y: config.ys }}
                transition={{
                  x: { repeat: Infinity, repeatType: "loop", duration: config.duration, ease: "linear" },
                  y: { repeat: Infinity, repeatType: "loop", duration: config.duration, ease: "linear" },
                }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: config.size,
                  height: config.size,
                  borderRadius: "50%",
                  background: "radial-gradient(circle at center, #B5946E, #1F485E, transparent 80%)",
                  filter: "blur(50px)",
                  opacity: 0.75,
                  pointerEvents: "none",
                  willChange: "transform",
                  transform: "translateZ(0)",
                  zIndex: 0,
                }}
              />
            ))}
          </div>
        )}

        {/* Dashboard Preview Section */}
        <section id="platform-preview" className="scroll-mt-[88px]">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

          <div className="max-w-5xl mx-auto px-4 relative">
            <div className="flex flex-col items-center text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
                Platform Preview
              </div>
              <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
                Advanced trading dashboard designed for optimal performance
              </h2>
              <p className="text-gray-400 max-w-2xl">
                Our intuitive interface gives you complete control over your trading journey with real-time analytics and powerful tools
              </p>
            </div>
            <HeroDashboardPreview />
          </div>
        </section>

        {/* Features Section */}
        <section id="trading-tools" className="scroll-mt-[88px]">
          <FeaturesSection />
        </section>

        {/* Challenges Table Section */}
        <section id="challenges"  className="scroll-mt-[88px]">
          <ChallengesTable />
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="scroll-mt-[88px]">
          <HowItWorksSection />
        </section>

      
        {/* Testimonials Section */}
        <section id="testimonials" className="scroll-mt-[88px]">
          <TestimonialsSection />
        </section>

      
        {/* CTA Section */}
        <section id="get-started" className="scroll-mt-[88px]">
          <CTASection />
        </section>
       
      </main>

      <Footer />
      <FramerBadge />
    </div>
  );
}
