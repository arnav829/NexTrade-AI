import React, { useState, useEffect } from "react";

const WatchlistSidebar = ({ onSelect }) => {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("watchlist")) || [];
    setWatchlist(saved);
  }, []);

  const addToWatchlist = (symbol) => {
    const updated = [...new Set([...watchlist, symbol])];
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
  };

  return (
    <div className="bg-[#111] h-full w-64 p-4 border-r border-gray-700 text-white">
      <h2 className="text-lg font-semibold mb-3">Watchlist</h2>

      {watchlist.map((sym, i) => (
        <div
          key={i}
          className="p-2 cursor-pointer hover:bg-gray-800 rounded"
          onClick={() => onSelect(sym)}
        >
          {sym}
        </div>
      ))}

      <div className="mt-4">
        <input
          type="text"
          placeholder="Add symbol"
          className="bg-gray-800 text-white px-2 py-1 rounded w-full"
          id="addSymbolInput"
        />
        <button
          className="mt-2 w-full bg-blue-600 p-2 rounded"
          onClick={() => {
            const val = document.getElementById("addSymbolInput").value.toUpperCase();
            if (val) addToWatchlist(val);
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default WatchlistSidebar;
