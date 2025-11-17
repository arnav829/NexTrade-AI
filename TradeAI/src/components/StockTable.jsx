import React, { useEffect, useState } from "react";

const API_KEY = "d3vso5hr01qn5gnjftegd3vso5hr01qn5gnjftf0";

const symbols = [
  "AAPL", "MSFT", "GOOGL", "AMZN", "META", "TSLA", "NVDA", "BRK.B", "JPM",
  "V", "JNJ", "WMT", "PG", "MA", "UNH", "DIS", "HD", "PFE", "KO", "PEP"
];

const StockTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchStockData = async () => {
    try {
      let results = [];
      for (let i = 0; i < symbols.length; i++) {
        const symbol = symbols[i];
        const res = await fetch(
          `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`
        );
        const json = await res.json();
        results.push({ symbol, ...json });
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
      setData(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching stock data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData();
    const interval = setInterval(fetchStockData, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-10 bg-black text-white w-full">
        <h1 className="text-5xl font-bold text-center m-10">What's Moving the Market</h1>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="text-center text-gray-400 animate-pulse py-10">
            Loading live stock data...
          </div>
        ) : (
          <table className="min-w-full bg-black rounded-xl shadow-lg">
            <thead>
              <tr className="bg-black text-left">
                <th className="py-3 px-4">#</th>
                <th className="py-3 px-4">Symbol</th>
                <th className="py-3 px-4">Current Price ($)</th>
                <th className="py-3 px-4">Change ($)</th>
                <th className="py-3 px-4">Change (%)</th>
              </tr>
            </thead>
            <tbody>
              {data.map((stock, index) => {
                const isUp = stock.d >= 0;
                return (
                  <tr
                    key={stock.symbol}
                    className="border-b border-gray-700 hover:bg-gray-700 transition"
                  >
                    <td className="py-2 px-4">{index + 1}</td>
                    <td className="py-2 px-4 font-medium">{stock.symbol}</td>
                    <td className="py-2 px-4 font-semibold text-blue-400">
                      ${stock.c ? stock.c.toFixed(2) : "N/A"}
                    </td>
                    <td
                      className={`py-2 px-4 font-semibold ${
                        isUp ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isUp ? "+" : ""}
                      {stock.d?.toFixed(2) ?? "N/A"}
                    </td>
                    <td
                      className={`py-2 px-4 font-semibold ${
                        isUp ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {isUp ? "+" : ""}
                      {stock.dp?.toFixed(2) ?? "N/A"}%
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default StockTable;
