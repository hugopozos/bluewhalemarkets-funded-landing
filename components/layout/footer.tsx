'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Instagram, Globe, Phone, Mail } from "lucide-react"

export default function Footer() {
   const [menuOpen, setMenuOpen] = useState(false)
  
  return (
    <footer className="border-t border-gray-800 bg-black w-full relative">
      {/* Fondo con sutil gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0F2A38]/20 pointer-events-none"></div>
      
      {/* Efecto de resplandor sutil */}
      <div className="absolute left-1/4 top-0 w-96 h-96 bg-[#1F485E]/5 blur-[100px] rounded-full opacity-60 pointer-events-none"></div>
      <div className="absolute right-1/4 bottom-0 w-96 h-96 bg-[#B5946E]/5 blur-[100px] rounded-full opacity-60 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo y descripción */}
          <div className="md:col-span-2 space-y-6">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/application-logo.png"
                alt="Blue Whale Markets"
                width={200}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trade with our capital and keep up to 90% of the profits. Experience a platform designed by traders for traders, with transparent rules and dedicated support.
            </p>
            
            <div className="flex items-center space-x-4 pt-2">
              {/* <Link href="#" className="text-gray-500 hover:text-[#B5946E] transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#B5946E] transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </Link> */}
              <Link href="#" className="text-gray-500 hover:text-[#B5946E] transition-colors duration-200">
                <Instagram className="h-5 w-5" />
              </Link>
              {/* <Link href="#" className="text-gray-500 hover:text-[#B5946E] transition-colors duration-200">
                <Globe className="h-5 w-5" />
              </Link> */}
            </div>
          </div>

          {/* Columna Trading */}
          <div>
            <h3 className="text-white font-medium mb-5 pb-2 border-b border-gray-800 inline-block">Trading</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#challenges" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  Challenge Accounts
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#trading-tools" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  Trading Rules
                </Link>
              </li>
              <li>
                <Link href="#trading-tools" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  Trading Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Company */}
          <div>
            <h3 className="text-white font-medium mb-5 pb-2 border-b border-gray-800 inline-block">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center">
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center"  onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/contact'; // Navegación manual
          }}>
                  <span className="bg-gradient-to-r from-[#1F485E]/70 to-[#1F485E]/10 h-[1px] w-3 inline-block mr-2"></span>
            Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Contact */}
          <div>
            <h3 className="text-white font-medium mb-5 pb-2 border-b border-gray-800 inline-block">Contact</h3>
            <ul className="space-y-3">
            <li>
              <Link
                href="mailto:funded@bluewhalemarkets.com"
                className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-[#B5946E]/70" />
                funded@bluewhalemarkets.com
              </Link>
            </li>

              {/* <li>
                <Link href="#" className="text-gray-400 hover:text-[#B5946E] text-sm transition-colors duration-200 flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#B5946E]/70" />
                  +1 (555) 123-4567
                </Link>
              </li> */}
              <li>
                <div className="mt-4 p-3 bg-[#0F2A38]/30 border border-gray-800 rounded-lg">
                  <p className="text-gray-400 text-xs">Trading hours support</p>
                  <p className="text-white text-sm">24/5 Dedicated Team</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-6 md:mb-0">
            <span className="text-[#B5946E]/70">Blue Whale Markets</span> © {new Date().getFullYear()} — Made with passion for traders worldwide
          </div>
          <div className="flex space-x-8">
            <Link href="https://www.bluewhalemarkets.com/legal/policy-privacy" className="text-gray-500 hover:text-[#B5946E] text-xs transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="https://www.bluewhalemarkets.com/legal/terms-conditions" className="text-gray-500 hover:text-[#B5946E] text-xs transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="https://www.bluewhalemarkets.com/legal/policy-cookies" className="text-gray-500 hover:text-[#B5946E] text-xs transition-colors duration-200">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
