import React, { useEffect, useRef, memo } from 'react';
function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
         if (!container.current) return;
    container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-timeline.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "displayMode": "regular",
          "feedMode": "all_symbols",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "width": 1200,
          "height": 500
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/news/top-providers/tradingview/" rel="noopener nofollow" target="_blank"><span className="blue-text">Top stories</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
