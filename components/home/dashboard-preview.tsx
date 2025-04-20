import DashboardHeader from "@/components/home/dashboard/dashboard-header"
import DashboardSidebar from "@/components/home/dashboard/dashboard-sidebar"
import DashboardContent from "@/components/home/dashboard/dashboard-content"

export default function DashboardPreview() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-[#111] border border-gray-800 rounded-lg overflow-hidden shadow-2xl">
        {/* Dashboard Header */}
        <DashboardHeader />

        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main Dashboard Area */}
          <DashboardContent />
        </div>
      </div>
    </div>
  )
}
