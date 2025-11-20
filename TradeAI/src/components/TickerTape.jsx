import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
        if (!container.current) return;
    container.current.innerHTML = "";
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            {
              "proName": "FOREXCOM:SPXUSD",
              "title": "S&P 500 Index"
            },
            {
              "proName": "FOREXCOM:NSXUSD",
              "title": "US 100 Cash CFD"
            },
            {
              "proName": "FX_IDC:EURUSD",
              "title": "EUR to USD"
            },
            {
              "proName": "BITSTAMP:BTCUSD",
              "title": "Bitcoin"
            },
            {
              "proName": "BITSTAMP:ETHUSD",
              "title": "Ethereum"
            },
            {
              "proName": "NASDAQ:NVDA",
              "title": "NVDA"
            },
            {
              "proName": "INDEX:BTCUSD",
              "title": "BTCUSD"
            },
            {
              "proName": "FOREXCOM:XAUUSD",
              "title": "GOLD"
            },
            {
              "proName": "TICKMILL:EURUSD",
              "title": "EURO / USD"
            },
            {
              "proName": "NASDAQ:TSLA",
              "title": "TESLA"
            },
            {
              "proName": "NASDAQ:AAPL",
              "title": "Apple"
            },
            {
              "proName": "NASDAQ:PLTR",
              "title": "PLTR"
            },
            {
              "proName": "NASDAQ:COIN",
              "title": "COIN"
            },
            {
              "proName": "NASDAQ:AVGO",
              "title": "AVGO"
            },
            {
              "proName": "BINANCE:ZECUSDT",
              "title": "ZECU"
            },
            {
              "proName": "BITSTAMP:XRPUSD",
              "title": "XPPS"
            },
            {
              "proName": "BINANCE:SUIUSDT",
              "title": "SUIUSDT"
            },
            {
              "proName": "BINANCE:LINKUSDT",
              "title": "LINKUSD-T"
            },
            {
              "proName": "BINANCE:NEARUSDT",
              "title": "NEAR"
            },
            {
              "proName": "TVC:DXY",
              "title": "US"
            },
            {
              "proName": "CAPITALCOM:US100",
              "title": "US - 100"
            },
            {
              "proName": "CRYPTOCAP:TOTAL3",
              "title": "TOTAL"
            },
            {
              "proName": "IG:NASDAQ",
              "title": "TECH"
            }
          ],
          "colorTheme": "dark",
          "locale": "en",
          "largeChartUrl": "",
          "isTransparent": false,
          "showSymbolLogo": true,
          "displayMode": "adaptive"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/markets/" rel="noopener nofollow" target="_blank"><span className="blue-text">Ticker tape</span></a><span className="trademark"> by TradingView</span></div>
    </div>
  );
}

export default memo(TradingViewWidget);
