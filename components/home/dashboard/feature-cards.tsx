import { ArrowRight } from "lucide-react"

export default function FeatureCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-800 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14"></path>
              <path d="M5 12h14"></path>
            </svg>
          </div>
          <div>
            <div className="font-medium">Create new asset</div>
            <div className="text-sm text-gray-400">Upload or manage creations</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-500" />
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-800 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            </svg>
          </div>
          <div>
            <div className="font-medium">
              Try the latest model <span className="text-xs text-purple-500 ml-1">MODEL-1</span>
            </div>
            <div className="text-sm text-gray-400">Use our latest LLM model</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-500" />
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-gray-800 p-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <div>
            <div className="font-medium">Train new model</div>
            <div className="text-sm text-gray-400">Personalize your AI</div>
          </div>
        </div>
        <ArrowRight className="h-5 w-5 text-gray-500" />
      </div>
    </div>
  )
}
