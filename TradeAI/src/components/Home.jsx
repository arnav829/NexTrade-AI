import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import sampleVideo from "../assets/home_bg_video.mp4"; 
import bgImage from "../assets/bg_video.webp"; 

export default function Home() {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-7xl w-full grid md:grid-cols-2 gap-12"
      >
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

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg w-fit"
          >
            Get Started
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
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
        </motion.div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-3xl md:text-4xl font-extrabold text-center pt-40 "
      >
        Trade Smarter. Profit with AI.
      </motion.h2>

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
    </div>
  );
}
