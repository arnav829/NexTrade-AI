import { AlignCenter, AlignCenterHorizontal } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const HEATMAP_SOURCES = {
  "Nasdaq 100": "NASDAQ100",
  "S&P 500": "SPX500",
  "Dow Jones": "DJI",
  "Crypto": "CRYPTO",
};

export default function HeatmapWidget() {
  const [source, setSource] = useState("NASDAQ100");
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js";
    script.type = "text/javascript";

    script.innerHTML = JSON.stringify({
      colorTheme: "dark",
      locale: "en",
      hasTopBar: true,
      dataSource: source,
      grouping: "sector",
      blockSize: "market_cap_basic",
      blockColor: "change",
      width: "100%",
      height: 620,
    });

    containerRef.current.appendChild(script);
  }, [source]);

  return (
    <div className="w-full mt-10">
      {/* ---- CUSTOM TOP BAR ---- */}
      <div className="flex gap-3 mb-4 bg-[#0a0a0f] p-3 rounded-xl border border-gray-800">
        {Object.entries(HEATMAP_SOURCES).map(([label, value]) => (
          <button
            key={value}
            onClick={() => setSource(value)}
            className={`px-4 py-2 rounded-lg text-sm transition ${
              source === value
                ? "bg-blue-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ---- HEATMAP ---- */}
      <div
        ref={containerRef}
        className="rounded-3xl border border-gray-800 overflow-hidden shadow-xl justify center"
        style={{ width: "100%", height: 620 , }}
      />
    </div>
  );
}


