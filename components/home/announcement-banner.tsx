import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AnnouncementBanner() {
  return (
    <div className="flex justify-center mb-12">
      <Link
        href="#"
        className="flex items-center gap-2 bg-black/50 border border-gray-800 rounded-full px-4 py-2 text-sm hover:border-gray-600 transition"
      >
        🚀 2-for-1 on all accounts with code PRELAUNCH
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
