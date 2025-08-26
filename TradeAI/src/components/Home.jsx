// import { motion } from "framer-motion";

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-black text-white flex items-start justify-center ">
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-7xl w-full grid md:grid-cols-2 gap-12"
//       >
//         <div className="flex flex-col justify-center space-y-6">
//           <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//             Your Personal{" "}
//             <span className="text-blue-500">AI Trading</span> Companion
//           </h1>
//           <p className="text-gray-300 text-lg">
//             {/* Transform your HDFC Sky account into an intelligent trading partner
//             with AI-powered insights, personalized recommendations, and direct
//             access to premium research. */}

//             Welcome to NexTradeAI – the smarter way to trade.
//             We combine the power of AI with advanced market analysis to give you clear, reliable, and actionable stock predictions. By turning raw data into easy-to-read graphs, we help you cut through the noise and make confident trading decisions that put you ahead of the market.
//           </p>
//           <ul className="space-y-3 text-gray-400 text-base">
//             <li>📊 Portfolio intelligence that knows your holdings & performance</li>
//             <li>📑 Real-time Stock  research recommendations</li>
//             <li>💬 Natural conversations about market strategies</li>
//             <li>🔔 Smart alerts and personalized trading insights</li>
//           </ul>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium shadow-lg w-fit"
//           >
//             Get Started
//           </motion.button>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, delay: 0.3 }}
//           className="relative"
//         >
//           <div className="bg-white text-black rounded-2xl shadow-2xl p-6 space-y-4 max-w-md mx-auto">
//             <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg w-fit font-medium">
//               Claude with HDFC SKY MCP
//             </div>

//             <div className="bg-blue-600 text-white px-4 py-3 rounded-lg w-fit">
//               Show me my portfolio performance and what HDFC research says about my holdings
//             </div>

//             <div className="space-y-3 text-sm">
//               <div className="border p-3 rounded-lg">
//                 <p><strong>SBI:</strong> ₹793.70 (100 shares)</p>
//                 <p className="text-green-600">+1.40%</p>
//                 <p>HDFC Research: <span className="font-semibold">BUY</span> | Target: ₹850</p>
//                 <p>Upside: 7.1%</p>
//               </div>

//               <div className="border p-3 rounded-lg">
//                 <p><strong>IRCTC:</strong> ₹770 (5 shares)</p>
//                 <p className="text-green-600">+1.30%</p>
//                 <p>HDFC Research: <span className="font-semibold">BUY</span> | Target: ₹820</p>
//               </div>
//             </div>

//             <p className="text-gray-700 text-sm">
//               Your portfolio is up <strong>2.1% today</strong>. HDFC research shows
//               positive outlook for both holdings with good upside potential.
//             </p>
//           </div>

//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             className="absolute -top-6 -right-6 bg-white text-black px-4 py-2 rounded-xl shadow-md text-sm font-medium"
//           >
//             🔔 Smart Alerts
//           </motion.div>

//           <motion.div
//             whileHover={{ scale: 1.1 }}
//             className="absolute -bottom-6 -left-6 bg-white text-black px-4 py-2 rounded-xl shadow-md text-sm font-medium"
//           >
//             🤖 AI Trade Suggestions
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }





import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";  // ✅ import navigation hook

export default function Home() {
  const navigate = useNavigate(); // ✅ create navigate function

  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center ">
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
            <li>🔔 Smart alerts and personalized trading insights</li>
          </ul>

          {/* ✅ Navigate to /login when clicked */}
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

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute -top-6 -right-6 bg-white text-black px-4 py-2 rounded-xl shadow-md text-sm font-medium"
          >
            🔔 Smart Alerts
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            className="absolute -bottom-6 -left-6 bg-white text-black px-4 py-2 rounded-xl shadow-md text-sm font-medium"
          >
            🤖 AI Trade Suggestions
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
