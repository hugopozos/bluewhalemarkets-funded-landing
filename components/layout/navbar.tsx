import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="relative z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/images/application-logo.webp"
            alt="Application Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition">
            About Us
          </Link>
          <Link
            href="https://funded.help.bluewhalemarkets.com/"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            FAQ
          </Link>
          <Link href="#" className="text-sm text-gray-300 hover:text-white transition">
            Contact
          </Link>
        </nav>

        <button className="bg-transparent border border-gray-700 hover:border-gray-500 text-white rounded-full px-5 py-2 text-sm transition">
          Get Funded
        </button>
      </div>
    </header>
  )
}
