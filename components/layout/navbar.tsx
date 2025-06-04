'use client'

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react" // o cualquier ícono

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-6 left-2 right-2 z-50 bg-black bg-opacity-80 shadow-md rounded-2xl border border-gray-800 backdrop-blur-sm mx-auto max-w-6xl">
      <div className="px-4 py-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/images/application-logo.png"
            alt="Logo"
            width={130}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 mx-2">
          <Link href="/" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors"  onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/'; 
          }}>Home</Link>
          <Link href="#platform-preview" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors">Platform</Link>
          <Link href="#trading-tools" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors">Tools</Link>
          <Link href="#challenges" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors">Challenges</Link>
          <Link href="#how-it-works" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors">How To</Link>
          
          <Link href="/contact" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors"
          onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/contact'; // Navegación manual
          }}>
          Contact Us
        </Link>
        <Link href="/faq" className="text-[16px] font-medium text-gray-300 hover:text-white transition-colors"   onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/faq'; 
          }}>FAQ</Link>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Botón de acción */}
        <Link 
          href="https://funded.app.bluewhalemarkets.com/login"
          className="hidden md:inline-block bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full px-3 py-1 text-[11px] font-medium transition-colors"
        >
          Get Funded
        </Link>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-2">
          <Link href="/" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#platform-preview" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Platform</Link>
          <Link href="#trading-tools" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Tools</Link>
          <Link href="#challenges" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>Challenges</Link>
          <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>How To</Link>
          <Link href="/contact" className="text-sm text-gray-300 hover:text-white"    onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/contact'; 
          }}>Contact Us</Link>
             <Link href="/faq" className="text-sm text-gray-300 hover:text-white"  onClick={(e) => {
            e.preventDefault();
            setMenuOpen(false);
            window.location.href = '/faq'; 
          }}>FAQ</Link>
            <Link href="https://help.clubprotraders.com/faq" className="text-sm text-gray-300 hover:text-white" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link href="#get-started" className="text-sm mt-2 bg-transparent border border-gray-700 text-white rounded-full px-3 py-1 text-[11px] text-center" onClick={() => setMenuOpen(false)}>
            Get Funded
          </Link>
        </div>
      )}
    </header>
  )
}
