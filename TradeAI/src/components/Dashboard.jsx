import React from "react";
import mobileMockup from "../assets/mobile-mockup.webp"; 

export default function TradingDashboard({ user }) {
  return (
    <div className="min-h-screen bg-black">
      <div className="bg-black bg-opacity-60 min-h-screen p-6">
        <header className="flex justify-between items-center text-white mb-8">
          <h1 className="text-3xl font-bold">Trading Dashboard</h1>
          <div className="text-3xl font-bold text-gray-300">
            Hello, <span className="font-semibold">{user?.displayName}</span>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p className="text-black mb-3 text-lg font-semibold">
              Your AI-powered portfolio is diversified across multiple sectors
              to maximize gains and minimize risks.
            </p>
            <button className="cursor-pointer border border-gray-400 px-4 py-2 rounded-2xl">
              Smart Portfolio
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg text-black">
            <p className="text-black mb-3 text-lg font-semibold">
              Market trends are analyzed using historical data and AI models to
              predict short-term opportunities.
            </p>
            <button className="cursor-pointer border border-gray-400 px-4 py-2 rounded-2xl">
              Trend Analysis
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 bg-white rounded-2xl shadow-lg p-10">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Indian markets at your fingertips.
            </h2>
            <p className="text-gray-600 mb-6">
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>

            
          </div>

          <div className="flex justify-center">
            <img
              src={mobileMockup}
              alt="Mobile Mockup"
              className="w-[280px] h-[550px] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
