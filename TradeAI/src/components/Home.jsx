import { useNavigate } from "react-router-dom";
import sampleVideo from "../assets/home_bg_video.mp4";
import bgImage from "../assets/bg_video.webp";
import { Twitter, Linkedin, Github } from "lucide-react";
import StockTable from "../components/StockTable";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12 px-6 pt-20 md:pt-32">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Personal{" "}
            <span className="text-blue-500">AI Trading</span> Companion
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            Welcome to NexTradeAI – the smarter way to trade.  
            We combine the power of AI with advanced market analysis  
            to give you clear, reliable and actionable stock predictions.
            Our graphs cut through noise and help you make confident decisions.
          </p>
          <ul className="space-y-2 md:space-y-3 text-gray-400 text-sm md:text-base">
            <li>📊 Portfolio intelligence that knows your holdings</li>
            <li>📑 Real-time Stock research recommendations</li>
            <li>💬 Natural conversations about market strategies</li>
          </ul>
          <button
            onClick={() => navigate("/login")}
            className="
              mt-4 sm:mt-6 px-4 py-2 text-sm
              sm:px-6 sm:py-3 cursor-pointer
              rounded-xl bg-blue-600 hover:bg-blue-700
              transition text-white font-medium
              w-full sm:w-fit 
            "
          >
            Get Started
          </button>
        </div>

        <div className="relative px-4 sm:px-0">
          <div className="bg-white text-black rounded-2xl shadow-2xl p-4 sm:p-6 space-y-4 max-w-md mx-auto">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg w-fit font-medium text-sm sm:text-base">
              Analyst research indicates moderate upside potential across your US equity holdings
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="border p-3 rounded-lg">
                  <p><strong>Apple (AAPL):</strong> $189.40 (10 shares)</p>
                  <p className="text-green-600">+0.85%</p>
                  <p>Analyst View: <span className="font-semibold">BUY</span> | Target: $205</p>
                  <p>Upside: 8.2%</p>
              </div>

              <div className="border p-3 rounded-lg">
                <p><strong>Tesla (TSLA):</strong> $203.50 (3 shares)</p>
                <p className="text-red-600">-0.60%</p>
                <p>Analyst View: <span className="font-semibold">HOLD</span> | Target: $215</p>
            </div>
            </div>
            <p className="text-gray-700 text-xs sm:text-sm">
              Your portfolio is up <strong>2.1% today</strong>.
              Research indicates positive upside in both holdings.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center pt-20 px-4">
        Trade Smarter. Profit with AI.
      </h2>

     <div
  className="w-full mt-6 sm:mt-10 flex items-center justify-center rounded-2xl shadow-2xl overflow-hidden px-4"
  style={{
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <video
    src={sampleVideo}
    autoPlay
    loop
    muted
    playsInline
    className="
      w-[85%] h-[85%] object-contain rounded-xl shadow-lg
      sm:w-[80%] sm:h-[80%]
    "
  />
</div>

<div className="w-full px-4 mt-10">
  <StockTable />
</div>

      <footer className="bg-black text-gray-400 py-12 px-6 mt-20 border-t border-gray-800 w-full">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">NexTradeAI</h2>
            <p className="text-sm">
              Smarter trading powered by AI.
              Turning complex data into clear, confident decisions.
            </p>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-blue-500 transition">Home</a></li>
              <li><a href="/Dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
              <li><a href="/login" className="hover:text-blue-500 transition">Login</a></li>
              <li><a href="/about" className="hover:text-blue-500 transition">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-xs sm:text-sm mt-12 pt-6">
          © 2025 NexTradeAI. All rights reserved.
        </div>
      </footer>
    </div>
  );
}







