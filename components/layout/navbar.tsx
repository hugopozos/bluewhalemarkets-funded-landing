import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-2 right-2 z-50 bg-black bg-opacity-80 shadow-md rounded-2xl border border-gray-800 backdrop-blur-sm mx-auto max-w-5xl">
      <div className="px-4 py-4 flex items-center justify-between h-16">
        {/* Logo más compacto */}
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

        {/* Menú compacto */}
        <nav className="hidden md:flex items-center space-x-4 mx-2">
          <Link href="/" className="text-[11px] font-medium text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="#platform-preview" className="text-[11px] font-medium text-gray-300 hover:text-white transition-colors">
            Platform
          </Link>
          <Link href="#trading-tools" className="text-[11px] font-medium text-gray-300 hover:text-white transition-colors">
            Tools
          </Link>
          <Link href="#challenges" className="text-[11px] font-medium text-gray-300 hover:text-white transition-colors">
            Challenges
          </Link>
          <Link href="#how-it-works" className="text-[11px] font-medium text-gray-300 hover:text-white transition-colors">
            How To
          </Link>
        </nav>

        {/* Botón ultracompacto */}
        <Link 
          href="#get-started"
          className="bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full px-3 py-1 text-[11px] font-medium transition-colors"
        >
          Get Funded
        </Link>
      </div>
    </header>
  );
}
