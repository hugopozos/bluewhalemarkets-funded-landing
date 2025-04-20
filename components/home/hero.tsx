export default function Hero() {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16">
      <h1 className="text-4xl md:text-6xl mb-6 leading-tight">Trade with Our Capital, Keep Your Profits</h1>
      <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
        Access professional trading capital without risking your own money. Prove your skills, pass our evaluation, and
        trade with our funds while keeping up to 90% of the profits.
      </p>
      <button className="bg-white text-black hover:bg-gray-100 rounded-full px-8 py-2 font-medium transition flex items-center gap-2 mx-auto relative overflow-hidden group">
        <span className="h-2 w-2 bg-black rounded-full"></span>
        <span className="relative z-10">Get Funded</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] animate-shimmer"></div>
      </button>
    </div>
  )
}
