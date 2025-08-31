import { useNavigate } from "react-router-dom"; 
import sampleVideo from "../assets/home_bg_video.mp4"; 
import bgImage from "../assets/bg_video.webp"; 
import { Twitter, Linkedin, Github } from "lucide-react";


export default function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-12">
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Your Personal{" "}
            <span className="text-blue-500">AI Trading</span> Companion
          </h1>
          <p className="text-gray-300 text-lg">
            Welcome to NexTradeAI – the smarter way to trade.
            We combine the power of AI with advanced market analysis to give you clear, reliable, and actionable stock predictions. 
            By turning raw data into easy-to-read graphs, we help you cut through the noise and make confident trading decisions.
          </p>
          <ul className="space-y-3 text-gray-400 text-base">
            <li>📊 Portfolio intelligence that knows your holdings & performance</li>
            <li>📑 Real-time Stock research recommendations</li>
            <li>💬 Natural conversations about market strategies</li>
          </ul>

          <button
            onClick={() => navigate("/login")}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg w-fit"
          >
            Get Started
          </button>
        </div>

        <div className="relative">
          <div className="bg-white text-black rounded-2xl shadow-2xl p-6 space-y-4 max-w-md mx-auto">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg w-fit font-medium">
              Claude with HDFC SKY MCP
            </div>

            <div className="bg-blue-600 text-white px-4 py-3 rounded-lg w-fit">
              Show me my portfolio performance and what HDFC research says about my holdings
            </div>

            <div className="space-y-3 text-sm">
              <div className="border p-3 rounded-lg">
                <p><strong>SBI:</strong> ₹793.70 (100 shares)</p>
                <p className="text-green-600">+1.40%</p>
                <p>HDFC Research: <span className="font-semibold">BUY</span> | Target: ₹850</p>
                <p>Upside: 7.1%</p>
              </div>

              <div className="border p-3 rounded-lg">
                <p><strong>IRCTC:</strong> ₹770 (5 shares)</p>
                <p className="text-green-600">+1.30%</p>
                <p>HDFC Research: <span className="font-semibold">BUY</span> | Target: ₹820</p>
              </div>
            </div>

            <p className="text-gray-700 text-sm">
              Your portfolio is up <strong>2.1% today</strong>. HDFC research shows
              positive outlook for both holdings with good upside potential.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center pt-40 ">
        Trade Smarter. Profit with AI.
      </h2>

      <div
        className="w-full mt-4 flex items-center justify-center rounded-2xl shadow-2xl overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px", 
        }}
      >
        <video
          src={sampleVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-3/4 h-3/4 object-contain rounded-xl shadow-lg"
        />
      </div>

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
