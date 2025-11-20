import React from "react";
import mobileMockup from "../assets/mobile-mockup.webp";
import { Twitter, Linkedin, Github, Apple } from "lucide-react";
import { useNavigate } from "react-router-dom";
import AAPL from "./TradeSlider/AAPL";
import AMZN from "./TradeSlider/AMZN";
import NVDA from "./TradeSlider/NVDA";
import TSLA from "./TradeSlider/TSLA";
import META from "./TradeSlider/META";
import GOOGLE from "./TradeSlider/GOOGLE";
import BITCOIN from "./TradeSlider/BITCOIN";
import TradeNews from "./TradeNews";
import video_trade from "../assets/video_trade.mp4";
import OverView from "./OverView";
import Gainer_Loser from "./Gainer_Loser";
const FeatureCard = ({ title, description, buttonText, href }) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-4 py-2 font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600 text-white
              shadow-md rounded-lg"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default function TradingDashboard({ user }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen text-white">
      
<section className="w-full overflow-x-auto">
      <div className="flex gap-6 px-4 py-4 snap-x snap-mandatory overflow-x-scroll scrollbar-hide">
    <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <AAPL />
    </div>
    <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <AMZN />
    </div>
    <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <NVDA />
    </div>
    <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <TSLA />
    </div>
     <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <META />
    </div>
     <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <GOOGLE />
    </div>
     <div className="snap-center shrink-0 w-[90vw] md:w-[400px]">
      <BITCOIN />
    </div>
  </div>
</section>


      <header className="p-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-lg mt-3 md:mt-0">
          Hello,{" "}
          <span className="font-semibold text-green-400">
            {user?.displayName || "Trader"}
          </span>
        </div>
      </header>

      <main className="p-6 space-y-12">


      <div className="w-full">
      <video
        className="
          w-full
          rounded-xl
          shadow-lg
          object-cover
          h-64
          lg:h-[500px]
          xl:h-[650px]
        "
        src={video_trade}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Indian markets at your fingertips.
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Long-term or short-term, high risk or low risk. Be the kind of
              investor you want to be.
            </p>

            <button
              className="w-56 px-6 mb-5 py-3 cursor-pointer rounded-full font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600 text-white
              shadow-md hover:shadow-lg hover:scale-105
              transition-all duration-300"
            >
              Start Investing
            </button>

            <button
              onClick={() => navigate("/news")}
              className="w-56 px-6 py-3 cursor-pointer rounded-full font-semibold
              bg-gradient-to-r from-green-500 to-emerald-600 text-white
              shadow-md hover:shadow-lg hover:scale-105
              transition-all duration-300"
            >
              Real-time News
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


<section className="w-full">
  <div className="w-full flex flex-col gap-6 p-5">
    <div className="w-full flex justify-center gap-5">
      <TradeNews />
     
    </div>


    <div className="flex gap-5 justify-center  w-full ">
      <Gainer_Loser/>
      <OverView/>
      
    </div>


  </div>
</section>



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
              <li><a href="/dashboard" className="hover:text-blue-500 transition">Dashboard</a></li>
              <li><a href="/login" className="hover:text-blue-500 transition">Login</a></li>
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
