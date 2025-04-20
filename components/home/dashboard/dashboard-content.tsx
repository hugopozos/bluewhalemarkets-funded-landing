import ActionCards from "@/components/home/dashboard/action-cards"

export default function DashboardContent() {
  return (
    <div className="flex-1 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-medium">Trader Dashboard</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-green-500 flex items-center gap-1">
            <span className="h-2 w-2 bg-green-500 rounded-full"></span>
            Live Trading
          </span>
          <select className="bg-gray-900 border border-gray-800 rounded-md text-sm px-2 py-1">
            <option>Challenge Account</option>
            <option>Funded Account</option>
          </select>
        </div>
      </div>

      {/* Trading Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">DAILY P&L</div>
          <div className="text-xl font-medium text-green-500">+$1,247.38</div>
          <div className="text-xs text-green-400">+2.4%</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">EQUITY</div>
          <div className="text-xl font-medium">$52,384.91</div>
          <div className="text-xs text-gray-400">Initial: $50,000</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">DRAWDOWN</div>
          <div className="text-xl font-medium">3.2%</div>
          <div className="text-xs text-gray-400">Max: 10%</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <div className="text-xs text-gray-400 mb-1">WIN RATE</div>
          <div className="text-xl font-medium">68%</div>
          <div className="text-xs text-gray-400">42 trades</div>
        </div>
      </div>

      {/* Recent Activity */}
      <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
      <ActionCards />
    </div>
  )
}
