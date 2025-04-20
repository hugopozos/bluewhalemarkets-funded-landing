import Link from "next/link"
import Image from "next/image"
import { Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black w-full">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/application-logo.webp"
                alt="Application Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Trade with our capital and keep up to 90% of the profits. Simple, transparent, and fair.
            </p>
            <p className="text-gray-500 text-sm">Blue Whale Markets Funded © {new Date().getFullYear()}</p>
          </div>

          {/* Columna Trading */}
          <div>
            <h3 className="text-white font-medium mb-4">Trading</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Challenge Accounts
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Trading Rules
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Company */}
          <div>
            <h3 className="text-white font-medium mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna Connect */}
          <div>
            <h3 className="text-white font-medium mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                  <Twitter className="h-4 w-4" />
                  Twitter / X
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white text-sm transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-xs mb-4 md:mb-0">Made with ❤️ for traders worldwide</div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-white text-xs transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
