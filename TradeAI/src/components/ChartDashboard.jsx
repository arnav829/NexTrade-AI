import React, { useState, useEffect } from "react";
import WatchlistSidebar from "./WatchlistSidebar";
import MultiChartLayout from "./MultiChartLayout";
import { useParams } from "react-router-dom";


const ChartDashboard = () => {

    const { symbol: routeSymbol } = useParams();
    const [symbol, setSymbol] = useState(routeSymbol || "AAPL");


  const [interval, setInterval] = useState("30"); 
  const [layout, setLayout] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  useEffect(() => {
    localStorage.setItem("lastSymbol", symbol);
  }, [symbol]);

  return (
    <div className="flex h-screen bg-black text-white">
      
      
      <WatchlistSidebar onSelect={setSymbol} />

      
      <div className={`flex-1 p-3 ${fullscreen ? "fixed inset-0 z-50 bg-black" : ""}`}>
        
        
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold">{symbol}</h2>

          <div className="flex gap-3 items-center">
            
            
            <select
              value={interval}
              onChange={(e) => setInterval(e.target.value)}
              className="bg-gray-800 px-3 py-1 rounded"
            >
              <option value="1">1m</option>
              <option value="5">5m</option>
              <option value="15">15m</option>
              <option value="30">30m</option>
              <option value="60">1h</option>
              <option value="D">1D</option>
            </select>

            
            <select
              value={layout}
              onChange={(e) => setLayout(Number(e.target.value))}
              className="bg-gray-800 px-3 py-1 rounded"
            >
              <option value="1">1 Chart</option>
              <option value="2">2 Chart</option>
              <option value="4">4 Chart</option>
            </select>

            
            <button
              className="bg-blue-600 px-3 py-1 rounded"
              onClick={() => setFullscreen(!fullscreen)}
            >
              {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
            </button>
          </div>
        </div>

        
        <div className="w-full h-[90%]">
          <MultiChartLayout symbol={symbol} interval={interval} layout={layout} />
        </div>

      </div>
    </div>
  );
};

export default ChartDashboard;
