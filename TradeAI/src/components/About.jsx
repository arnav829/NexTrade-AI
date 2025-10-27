import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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
  );
};

export default About;
