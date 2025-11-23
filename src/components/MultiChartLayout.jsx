import React from "react";
import TradingViewChartWidget from "./TradingViewChartWidget";

const MultiChartLayout = ({ symbol, interval, layout }) => {
  if (layout === 1)
    return (
      <div className="w-full h-full">
        <TradingViewChartWidget symbol={symbol} interval={interval} />
      </div>
    );

  if (layout === 2)
    return (
      <div className="grid grid-cols-2 gap-2 w-full h-full">
        <TradingViewChartWidget symbol={symbol} interval={interval} />
        <TradingViewChartWidget symbol={symbol} interval={interval} />
      </div>
    );

  if (layout === 4)
    return (
      <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full h-full">
        <TradingViewChartWidget symbol={symbol} interval={interval} />
        <TradingViewChartWidget symbol={symbol} interval={interval} />
        <TradingViewChartWidget symbol={symbol} interval={interval} />
        <TradingViewChartWidget symbol={symbol} interval={interval} />
      </div>
    );

  return null;
};

export default MultiChartLayout;
