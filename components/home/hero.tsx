export default function Hero() {
  return (
    <div className="text-center max-w-4xl mx-auto pt-48 md:pt-52">
      <h1 className="text-5xl md:text-7xl font-semibold mb-6 leading-tight">
        We Don't Fund Accounts.{" "}
        <span className="block mt-2">We Fund Talent.</span>
      </h1>
      <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
        Don't risk your money. If you're consistent, we provide the capital and you keep up to 90% of the profits.
      </p>
      <button className="bg-white text-black hover:bg-gray-100 rounded-full px-10 py-3 font-medium text-base transition flex items-center gap-2 mx-auto relative overflow-hidden group">
        <span className="h-2 w-2 bg-black rounded-full"></span>
        <span className="relative z-10">Get Funded</span>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[length:200%_100%] animate-shimmer"></div>
      </button>
    </div>
  )
}
