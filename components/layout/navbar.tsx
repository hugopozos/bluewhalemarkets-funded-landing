import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="relative z-20 bg-black shadow-sm shadow-black/30 border-b border-black">
      <div className="container mx-auto px-6 py-5 flex items-center justify-between backdrop-blur-sm">
        <div className="flex items-center">
          <Image
            src="/images/application-logo.png"
            alt="Application Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
            quality={100}
            priority
            unoptimized
          />
        </div>

        <nav className="hidden md:flex items-center justify-center flex-1 px-4">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link href="#platform-preview" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Platform
            </Link>
            <Link href="#trading-tools" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Trading Tools
            </Link>
            <Link href="#challenges" className="text-sm font-medium text-gray-300 hover:text-white transition">
              Challenges
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-300 hover:text-white transition">
              How It Works
            </Link>
            <Link
              href="https://funded.help.bluewhalemarkets.com/"
              className="text-sm font-medium text-gray-300 hover:text-white transition"
            >
              FAQ
            </Link>
          </div>
        </nav>

        <Link 
          href="#get-started"
          className="bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full px-6 py-2.5 text-sm font-medium transition"
        >
          Get Funded
        </Link>
      </div>
    </header>
  )
}
