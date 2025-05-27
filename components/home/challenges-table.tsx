"use client"

import { useState } from "react"
import { Check, Info } from "lucide-react"
import Image from "next/image"

// Define las opciones de financiación
const fundingOptions = [
  { value: 5000, label: "$5K" },
  { value: 10000, label: "$10K" },
  { value: 25000, label: "$25K" },
  { value: 50000, label: "$50K" },
  { value: 100000, label: "$100K" },
  { value: 200000, label: "$200K" },
]

// Define los tipos de desafío
const challengeTypes = [
  { id: "standard", name: "One Step" },
  { id: "express", name: "Two Step" },
  // { id: "pro", name: "Pro" },
]

// Define las características del plan para cada tipo de desafío
const planFeatures = {
  standard: [
    { name: "Profit Target", value: "8%" },
    { name: "Daily Drawdown", value: "4%" },
    { name: "Max Drawdown", value: "9%" },
    { name: "Min Trading Days", value: "5 days" },
    { name: "Profit Split", value: "Up to 90%" },
  ],
  express: [
    { name: "Profit Target", value: "6%" },
    { name: "Daily Drawdown", value: "4%" },
    { name: "Max Drawdown", value: "9%" },
    { name: "Min Trading Days", value: "5 days" },
    { name: "Profit Split", value: "Up to 90%" },
  ],
  pro: [
    { name: "Profit Target", value: "9%" },
    { name: "Daily Drawdown", value: "4%" },
    { name: "Max Drawdown", value: "8%" },
    { name: "Min Trading Days", value: "5 days" },
    { name: "Profit Split", value: "Up to 95%" },
  ],
}

// Define los precios para cada tipo de desafío y monto de financiación
const pricing = {
  standard: {
    5000: 55,
    10000: 99,
    25000: 199,
    50000: 299,
    100000: 499,
    200000: 999,
  },
  express: {
    5000: 83,
    10000: 149,
    25000: 249,
    50000: 399,
    100000: 599,
    200000: 1199,
  },
  pro: {
    5000: 83,
    10000: 199,
    25000: 299,
    50000: 499,
    100000: 799,
    200000: 1299,
  },
}

// Define las descripciones del plan
const planDescriptions = {
  standard: {
    title: "One Step",
    description: "Balance between requirements and profit potential",
    tag: "Most Popular",
    offer: "",
  },
  express: {
    title: "Two Step",
    description: "Faster evaluation with higher profit targets",
    tag: "",
    offer: "(Phase One and Phase Two)",
  },
  pro: {
    title: "Professional Challenge",
    description: "Higher profit split with stringent requirements",
    tag: "For Experts",
    offer: "",
  },
}

// Características globales incluidas en todos los planes
const globalFeatures = [
  { name: "Maximum Trading Days", value: "No limit" },
  { name: "Overnight & Weekend Positions", value: "Allowed" },
  { name: "News Trading", value: "Allowed" },
  { name: "EAs & Automation", value: "Supported" },
  { name: "One-time Fee", value: "No monthly charges" },
  { name: "MetaTrader 5", value: "Included" },
]

export default function ChallengesTable() {
  const [selectedChallenge, setSelectedChallenge] = useState("standard")
  const [selectedAmount, setSelectedAmount] = useState(25000)

  // Obtener el precio para el desafío y el monto seleccionados
  const price = pricing[selectedChallenge as keyof typeof pricing][selectedAmount as keyof (typeof pricing)["standard"]]

  return (
    <section className="py-24 relative">
      
      {/* Fondo con efecto de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"></div>

      {/* Efectos de luz sutiles en el fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-blue-900/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-900/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full border border-gray-800 text-sm text-gray-400 mb-6">
            Trading Challenges
          </div>
          <h2 className="text-4xl md:text-5xl font-medium mb-6 max-w-3xl">
            Choose your path to funded trading
          </h2>
          <p className="text-gray-400 max-w-2xl">
            Select the challenge that best fits your trading style and goals. We offer different options to accommodate traders of all skill levels.
          </p>
        </div>

        {/* Selección de tipo de desafío */}
        <div className="flex justify-center mb-10">
          <div className="bg-[#0A0A0A]/80 border border-gray-800 rounded-full p-1 flex">
            {challengeTypes.map((type) => (
              <button 
                key={type.id}
                className={`px-6 py-2 rounded-full text-sm ${selectedChallenge === type.id ? "bg-white text-black" : "text-gray-400 hover:text-white"} transition-colors`}
                onClick={() => setSelectedChallenge(type.id)}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Selección de monto de financiación */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#0A0A0A]/80 border border-gray-800 rounded-full p-1 flex flex-wrap justify-center">
            {fundingOptions.map((option) => (
              <button 
                key={option.value}
                className={`px-5 py-2 rounded-full text-sm m-1 ${selectedAmount === option.value ? "bg-gradient-to-br from-black to-gray-800 text-white" : "text-gray-400 hover:text-white"} transition-colors`}
                onClick={() => setSelectedAmount(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tarjeta principal del plan */}
        <div className="bg-gradient-to-br from-black to-[#080816] border border-gray-800 rounded-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Columna izquierda - Información del plan */}
            <div className="lg:col-span-4 p-8 border-r border-gray-800 flex flex-col">
              <div className="mb-4">
                <div className="inline-block px-3 py-1 bg-[#121224] rounded-full text-xs text-gray-300 mb-4">
                  {planDescriptions[selectedChallenge as keyof typeof planDescriptions].tag}
                </div>
                <h3 className="text-2xl font-medium mb-2">
                  {planDescriptions[selectedChallenge as keyof typeof planDescriptions].title}
                </h3>
                <p className="text-gray-400 text-sm mb-6">
                  {planDescriptions[selectedChallenge as keyof typeof planDescriptions].description}
                </p>
              </div>

              <div className="bg-[#0A0A0A]/80 border border-gray-800 rounded-xl p-6 flex flex-col items-center mb-6">
                <div className="text-xs text-gray-400 mb-2">One-time payment</div>
                <div className="flex items-baseline mb-1">
                  <span className="text-4xl font-light">${price}</span>
                </div>
                <div className="text-xs text-gray-400 mb-6">For ${selectedAmount.toLocaleString()} account</div>
                <button className="w-full bg-white text-black hover:bg-gray-100 rounded-full px-6 py-3 font-medium text-sm transition flex items-center justify-center gap-2">
                  <span className="h-2 w-2 bg-black rounded-full"></span>
                  <span>Get Started</span>
                </button>
              </div>

              {/* <div className="mt-auto">
                <div className="text-xs text-gray-400 mb-2">Account Size</div>
                <div className="text-2xl font-medium">${selectedAmount.toLocaleString()}</div>
              </div> */}
            </div>

            {/* Columna derecha - Características del plan */}
            <div className="lg:col-span-8 p-8">
              <div className="mb-8">
                <h3 className="text-lg font-medium mb-6 flex items-center">
                  <span className="h-2 w-2 bg-gray-500 rounded-full mr-2"></span>
                  Challenge Rules   {planDescriptions[selectedChallenge as keyof typeof planDescriptions].offer}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {planFeatures[selectedChallenge as keyof typeof planFeatures].map((feature, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#0A0A0A]/60 border border-gray-800 rounded-lg p-4">
                      <div className="flex items-center">
                        <Check className="w-4 h-4 text-gray-500 mr-2" />
                        <span className="text-sm">{feature.name}</span>
                      </div>
                      <div className="bg-[#121224] px-3 py-1 rounded-full text-xs font-medium">
                        {feature.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-6 flex items-center">
                  <span className="h-2 w-2 bg-gray-500 rounded-full mr-2"></span>
                  Weekend positions with add on Swing Trading (+15%)
                </h3>
                
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {globalFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-gray-500 mr-2" />
                      <span className="text-sm text-gray-300">{feature.name}</span>
                      <span className="ml-auto text-xs text-gray-400">{feature.value}</span>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 