export default function ActionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-400">QUICK ACTION</div>
          <div className="text-xs bg-green-900/50 text-green-500 px-2 py-0.5 rounded">NEW</div>
        </div>
        <h4 className="font-medium mb-1">Open Position</h4>
        <p className="text-sm text-gray-400">Start a new trade</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-400">QUICK ACTION</div>
          <div className="text-xs bg-orange-900/50 text-orange-500 px-2 py-0.5 rounded">UPDATED</div>
        </div>
        <h4 className="font-medium mb-1">Trading Journal</h4>
        <p className="text-sm text-gray-400">Record your trades</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-400">QUICK ACTION</div>
        </div>
        <h4 className="font-medium mb-1">Risk Calculator</h4>
        <p className="text-sm text-gray-400">Manage your risk</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="text-xs text-gray-400">QUICK ACTION</div>
        </div>
        <h4 className="font-medium mb-1">Trading Rules</h4>
        <p className="text-sm text-gray-400">Review account rules</p>
      </div>
    </div>
  )
}
