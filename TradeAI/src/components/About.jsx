import { useState, useEffect } from "react";
import { ArrowUp, Twitter, Linkedin, Github } from "lucide-react";

const About = () => {
  const [showButton, setShowButton] = useState(false);

  // Show the button when scrolled down 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-8 py-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-400">
          About <span className="text-white">Nextrade AI</span>
        </h1>

        <p className="text-center text-lg md:text-xl max-w-3xl text-gray-300 mb-12 leading-relaxed">
          Nextrade AI is a smart trading assistant designed to help investors
          predict market trends, analyze stock data, and make informed
          financial decisions. We combine AI-driven insights with real-time
          stock information to empower traders at every level.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {[
            {
              title: "AI-Powered Predictions",
              desc: "Our models learn from massive datasets to provide accurate stock price forecasts.",
            },
            {
              title: "Real-Time Analytics",
              desc: "Get instant insights into market movements and portfolio performance.",
            },
            {
              title: "User-Friendly Dashboard",
              desc: "An intuitive interface designed for both beginners and experts in trading.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-blue-500/30 transition-all"
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Scroll-to-top button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Footer Section */}
      <footer className="bg-black text-gray-400 py-12 px-6 mt-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h2 className="text-white text-2xl font-bold mb-4">NexTradeAI</h2>
            <p className="text-sm">
              Smarter trading powered by AI. <br />
              Turning complex data into clear, confident decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/Dashboard" className="hover:text-blue-500 transition">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/login" className="hover:text-blue-500 transition">
                  Login
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition"
              >
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-gray-900 hover:bg-blue-600 transition"
              >
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-600 text-sm mt-12 border-t border-gray-800 pt-6">
          © {new Date().getFullYear()} NexTradeAI. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default About;
