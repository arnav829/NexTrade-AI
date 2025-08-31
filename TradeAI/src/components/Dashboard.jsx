import React from "react";
import mobileMockup from "../assets/mobile-mockup.webp";
import { Twitter, Linkedin, Github } from "lucide-react";

const FeatureCard = ({ title, description, buttonText }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button
      className="cursor-pointer border border-gray-300 px-5 py-2 rounded-full font-medium
      text-gray-800 bg-white
      hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-600 hover:text-white
      hover:shadow-md hover:scale-105
      transition-all duration-300"
    >
      {buttonText}
    </button>
  </div>
);

export default function TradingDashboard({ user }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-950 text-white">
      <header className="p-6 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-3xl font-extrabold tracking-tight">
          Trading Dashboard
        </h1>
        <div className="text-lg mt-3 md:mt-0">
          👋 Hello,{" "}
          <span className="font-semibold text-green-400">
            {user?.displayName || "Trader"}
          </span>
        </div>
      </header>

      <main className="p-6 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Smart Portfolio"
            description="Your AI-powered portfolio is diversified across multiple sectors to maximize gains and minimize risks."
            buttonText="Explore Portfolio"
          />
          <FeatureCard
            title="Trend Analysis"
            description="Market trends are analyzed using historical data and AI models to predict short-term opportunities."
            buttonText="View Trends"
          />
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug">
              Indian markets at your fingertips.
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>
            <button
              className="w-fit px-6 py-3 rounded-full font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600 text-white
              shadow-md hover:shadow-lg hover:scale-105
              transition-all duration-300"
            >
              Start Investing
            </button>
          </div>

          <div className="flex justify-center">
            <img
              src={mobileMockup}
              alt="Mobile Trading App Mockup"
              className="w-[280px] h-[550px] object-contain drop-shadow-2xl"
              loading="lazy"
            />
          </div>
        </section>
      </main>

      <footer className="bg-black text-gray-400 py-12 px-6 mt-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        
        <div>
          <h2 className="text-white text-2xl font-bold mb-4">NexTradeAI</h2>
          <p className="text-sm">
            Smarter trading powered by AI.  
            Turning complex data into clear, confident decisions.
          </p>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="/Dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
            <li><a href="/login" className="hover:text-blue-500 transition">Login</a></li>
            <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
          </ul>
        </div>


        <div className="flex flex-col">
          <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
              <Twitter className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            <a href="#" className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
              <Github className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} NexTradeAI. All rights reserved.
      </div>
    </footer>
    </div>
  );
}
