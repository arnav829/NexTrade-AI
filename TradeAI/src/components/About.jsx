const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex flex-col items-center justify-center px-8 py-16">
      
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-blue-400">
        About <span className="text-white">Nextrade AI</span>
      </h1>

      {/* Intro Paragraph */}
      <p className="text-center text-lg md:text-xl max-w-3xl text-gray-300 mb-12 leading-relaxed">
        Nextrade AI is a smart trading assistant designed to help investors 
        predict market trends, analyze stock data, and make informed 
        financial decisions. We combine AI-driven insights with real-time 
        stock information to empower traders at every level.
      </p>

      {/* Features Section */}
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
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-3">
              {item.title}
            </h3>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
