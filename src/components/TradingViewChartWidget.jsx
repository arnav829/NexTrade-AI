import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ChartDashboard = () => {
  const { symbol } = useParams();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.onload = () => {
      new window.TradingView.widget({
        autosize: true,
        symbol: symbol || "AAPL",
        interval: "30",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        container_id: "tvchart",
        allow_symbol_change: true,
        hide_side_toolbar: false,
        studies: ["MACD@tv-basicstudies", "RSI@tv-basicstudies"],
      });
    };

    document.body.appendChild(script);
  }, [symbol]);

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 80px)", 
        padding: 0,
        margin: 0,
      }}
    >
      <div
        id="tvchart"
        style={{ width: "100%", height: "100%" }} 
      ></div>
    </div>
  );
};

export default ChartDashboard;
