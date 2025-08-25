// import React from "react";
// import dash from "../assets/dash.avif"; 

// export default function Dashboard({ user }) {
//   return (
//     <div
//       className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
//       style={{ backgroundImage: `url(${dash})` }}
//     >
//       <div className="bg-white bg-opacity-70 p-6 rounded-lg shadow-lg text-center">
//         <h1 className="text-3xl font-bold text-green-600 mb-2">Welcome 🎉</h1>
//         <p className="text-lg">
//           Hello, <span className="font-semibold">{user?.displayName}</span>
//         </p>
//       </div>
//     </div>
//   );
// }




import React from "react";
import dashBg from "../assets/dash.avif"; // background image

export default function TradingDashboard({ user }) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${dashBg})` }}
    >
      {/* Overlay for better readability */}
      <div className="bg-black bg-opacity-60 min-h-screen p-6">
        {/* Header */}
        <header className="flex justify-between items-center text-white mb-8">
          <h1 className="text-3xl font-bold">Trading Dashboard</h1>
          <div>
            Hello, <span className="font-semibold">{user?.displayName}</span>
          </div>
        </header>

        {/* Key Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Portfolio Value</h2>
            <p className="text-2xl mt-2">$12,345</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Today's Gain</h2>
            <p className="text-2xl mt-2 text-green-400">+3.2%</p>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-semibold">Predicted Trend</h2>
            <p className="text-2xl mt-2">Bullish 📈</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">Price Chart</h2>
            {/* Placeholder for chart */}
            <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center text-white">
              Chart will go here
            </div>
          </div>
          <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-white">Prediction Tool</h2>
            {/* Placeholder for prediction inputs */}
            <div className="flex flex-col gap-4 text-white">
              <input
                type="text"
                placeholder="Enter Stock Symbol"
                className="p-2 rounded bg-gray-700 placeholder-gray-300"
              />
              <button className="bg-green-500 p-2 rounded font-semibold hover:bg-green-600">
                Predict Trend
              </button>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg text-white">
          <h2 className="text-lg font-semibold mb-4">Recent Trades</h2>
          <ul className="space-y-2">
            <li>Bought 10 shares of AAPL at $145</li>
            <li>Sold 5 shares of TSLA at $720</li>
            <li>Bought 20 shares of AMZN at $3,300</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
