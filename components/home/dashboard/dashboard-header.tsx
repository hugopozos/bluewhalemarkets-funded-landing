import { Settings } from "lucide-react"

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-800 px-4 py-3">
      <div className="flex items-center">
        <Settings className="h-5 w-5 text-gray-500" />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-gray-700"></div>
          <div className="h-3 w-3 rounded-full bg-gray-700"></div>
        </div>
        <div className="h-3 w-3 rounded-full bg-gray-700"></div>
        <div className="h-3 w-3 rounded-full bg-gray-700"></div>
      </div>
    </div>
  )
}
