"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQCategory = "Trading Conditions" | "Other Questions";

const faqs: Record<FAQCategory, { question: string; answer: string | string[]  }[]> = {
  "Trading Conditions": [
    {
      question: "¿How many accounts can I trade?",
      answer:
        ["You can purchase and trade multiple evaluations simultaneously. During the evaluation phase, there’s no limit to the number of accounts you can have. However, in the funded phase, the total sum of your accounts cannot exceed $400K."],
    },
    {
      question: "¿When does the evaluation start?",
      answer: "With your first trade.",
    },
    {
      question: "¿Can I hold trades over the weekend?",
      answer:  `Yes, as long as you have the Swing Trading Add-on.
                Without the Swing Trading Add-on, you cannot trade or hold positions over the weekend. All trades must be closed before the market closes on Friday at 21:30 GMT+1. `,
    },
    {
      question: "¿Are bots or EAs allowed?",
      answer: "No, only risk management EAs are permitted.",
    },
    {
      question: "¿Is copy trading allowed?",
      answer: `SOnly between accounts owned by the same person.
                Copy trading across accounts owned by different individuals (including family or friends) is strictly prohibited and will result in account termination.`,
    },
    {
      question: "¿Can I trade during news events?",
      answer: "No trades may be opened 5 minutes before or after high-impact news events (marked in red folders on Forex Factory).",
    },
    {
      question: "¿Is Stop Loss mandatory?",
      answer: `No trades may be opened 5 minutes before or after high-impact news events (marked in red folders on Forex Factory).`,
    },
    {
      question: "¿Is Stop Loss mandatory?",
      answer:
        `Yes. Every trade must include a Stop Loss when placed.
        A first violation will result in a warning. A second violation will lead to immediate suspension or termination of the account`,
    },
    {
      question: "¿What leverage is offered?",
      answer: `1:50 for Forex
                1:30 for indices and commodities
                Using more than 50% of the available margin in a single trade is not allowed. This is not considered a violation, as the platform will simply block any attempt to open a trade exceeding this limit. This is to prevent “full margin,” “gambling,” or “all or nothing” behavior.`,
    },
    {
      question: "¿Which platforms can I use?",
      answer: "MetaTrader 5.",
    },
    {
        question: "¿What is a minimum trading day?",
        answer: "A day in which you open at least one trade.",
      },
    {
      question: "¿What are the conditions for swap, spread, and commissions?",
      answer: `Commission: $5 per lot traded.

                You can view live trading conditions by logging into the following MT5 account:

                Server: BlueWhaleMarkets-Server
                Login: 234955745
                Password: H*NtXpR7

                `,
    },
    {
        question: "¿Which strategies are prohibited?",
        answer: [
            "Any form of exploitation or abuse of the platform is strictly forbidden and violates our Terms of Service. Please review our full guidelines to avoid penalties.",
            "- Gambling: Strategies that involve excessive leverage or \"all or nothing\" behavior are not tolerated. No trade may use over 50% of the available margin.",
            "- High-Frequency Trading (HFT): Using ultra-fast algorithms to execute a large volume of trades in milliseconds is not allowed.",
            "- Latency Trading: Exploiting delayed market data or execution lags to guarantee profits is prohibited.",
            "- Copy Trading Others: You cannot copy trades across accounts not owned by the same person (including relatives or friends).",
            "- Hedging Across Multiple Accounts: Hedging trades across different accounts is not allowed.",
            "- Arbitrage Trading: Using price discrepancies between platforms or assets to generate risk-free profits is not allowed.",
            "- Tick Scalping: Engaging in high-volume trades to profit from minor price fluctuations over a short time is prohibited.",
            "- Grid Trading: Placing opposing buy/sell orders with similar risk parameters across multiple accounts or firms is not allowed.",
            "- One-Sided Betting: Taking trades in only one direction without proper market analysis or rationale is prohibited.",
            "- Shared Accounts: Sharing or reselling accounts is not allowed.",
            "- Hyperactivity: Executing an excessive number of trades in a short time frame is not allowed.",
            "- Exploiting platform/data freezes or demo server errors: Using any unfair advantage due to platform malfunctions or data lags is strictly forbidden to ensure fair play for all."
          ]
      },
      {
        question: "¿What happens if I don’t trade for 30 days?",
        answer: ["To keep your account active, you must place at least one trade every 30 calendar days.",
                "The first violation will result in a warning. The second violation will lead to immediate suspension or termination of the account."],
      },
      {
        question: "¿Can I use different IPs to trade?",
        answer: ["No. You are not allowed to connect from multiple geographic locations simultaneously.",
            "Challenges",
               " 1-Phase Challenge:",
               " - Profit Target: 8%",
               " - Daily Loss Limit: 4%",
               " - Total Loss Limit: 9%",
                "- Minimum Trading Days: 5",
                "2-Phase Challenge:",
             "Phase 1:",
                "- Profit Target: 6%",
                "- Daily Loss Limit: 9%",
                "- Total Loss Limit: 4%",
                "- Minimum Trading Days: 5",
                "Phase 2:",
                "- Profit Target: 6%",
                "- Daily Loss Limit: —",
                "- Total Loss Limit: —",
                "- Minimum Trading Days: 5"],
      },
      {
        question: "¿What should I do after completing my challenge?",
        answer: "Once you meet all the requirements, a button labeled 'Overcome Challenge' will appear on your Dashboard. Use it to request account review and approval.",
      },
  ],
  "Other Questions": [
    {
        question: "¿Which platform will I trade on?",
        answer: "MetaTrader 5.",
      },
      {
        question: "¿Which broker is used?",
        answer: "We provide MT5 access via Blue Whale Markets, working with top-tier liquidity providers to simulate real market conditions.",
      },
      {
        question: "¿What are the withdrawal methods?",
        answer: ["Cryptocurrency.",
                    "Profit Split:",
                    "- 1st Payout: 70%",


                   " - 2nd Payout: 80%",


                    "- 3rd and beyond: 90%",


                    "Payout Schedule:",
                    "- Every 21 business days."],
      },
      {
        question: "¿Are there minimum days required before withdrawal?",
        answer: "Yes. At least 5 trading days are required.",
      },
      {
        question: "¿Are there active promotions or discounts?",
        answer: "No.",
      },
      {
        question: "¿When do I need to submit my KYC?",
        answer: "You must complete KYC when obtaining a funded account and to receive payouts. A valid government-issued document (ID card, passport, or driver’s license) is required.",
      },
      {
        question: "¿Can I trade from the U.S.?",
      
        answer: ["Yes, if you reside in the U.S., but U.S. citizens are not allowed.",
                   "Restricted Access Policy",
                   "At Blue Whale Markets Funded, we aim to offer international access to our services. However, due to compliance and regulatory reasons, certain countries are excluded.",
                   "Requirements to Participate:",
                   "Be of legal age in your country of residence.",
                   "Successfully complete identity verification (KYC).",
                   "Submit valid government-issued documentation: passport, national ID, or driver’s license.",
                   "Restricted Countries:",
                   "Due to regulatory compliance, we do not accept users located in Cuba."]
      }
      
  ], 
};

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<FAQCategory>("Trading Conditions");
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx)
        : [...prev, idx]
    );
  };

  return (
    <section className="relative py-24 px-6">
    {/* Glow + fondo dentro del contenedor principal directamente */}
    <div className="relative z-10 bg-black/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6 shadow-[0_0_60px_10px_#00ffff33] ring-1 ring-cyan-400/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-12 text-white">FAQ</h2>
  
        {/* Botones de categoría */}
        <div className="flex justify-center gap-4 mb-8">
          {Object.keys(faqs).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as FAQCategory)}
              className={`px-4 py-2 rounded-full border ${
                selectedCategory === category
                  ? "bg-white text-black"
                  : "border-gray-600 text-gray-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
  
        {/* Preguntas */}
        <div className="space-y-4">
          {faqs[selectedCategory].map((faq, idx) => (
            <div key={idx} className="border border-gray-700 rounded-lg">
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => toggleIndex(idx)}
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndexes.includes(idx) ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndexes.includes(idx) && (
                <div className="p-4 border-t border-gray-700 text-gray-400 text-left space-y-2">
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, i) =>
                      line.trim().startsWith("-") ? (
                        <li key={i} className="ml-5 list-disc">
                          {line.slice(1).trim()}
                        </li>
                      ) : (
                        <p key={i} className="text-center">{line}</p>
                      )
                    )
                  ) : (
                    <p>{faq.answer}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  

  );
}
