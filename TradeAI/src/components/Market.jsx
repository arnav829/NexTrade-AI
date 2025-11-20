import React, { useEffect, useRef, useState } from "react";
import HeatmapWidget from "./HeatmapWidget";


function TradingViewEmbed({ widgetSrc, config, className, style }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = widgetSrc;
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify(config);

    containerRef.current.appendChild(script);
  }, [widgetSrc, config]);

  return (
    <div
      className={`tradingview-widget-container ${className || ""}`}
      style={style}
      ref={containerRef}
    />
  );
}



export default function Market() {
  const [cryptoStats, setCryptoStats] = useState(null);
  const [fxAndFutures, setFxAndFutures] = useState(null);
  const [indiaMacro, setIndiaMacro] = useState(null);


  useEffect(() => {
    const fetchCrypto = async () => {
      try {

        const globalRes = await fetch("https://api.coingecko.com/api/v3/global");
        const globalJson = await globalRes.json();

        const totalMcapUsd = globalJson?.data?.total_market_cap?.usd || 0;
        const mcapChange = globalJson?.data?.market_cap_change_percentage_24h_usd || 0;
        const btcDom = globalJson?.data?.market_cap_percentage?.btc || 0;
        const ethDom = globalJson?.data?.market_cap_percentage?.eth || 0;


        const priceRes = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
        );
        const priceJson = await priceRes.json();

        const btc = priceJson.bitcoin || {};
        const eth = priceJson.ethereum || {};

        setCryptoStats({
          totalMcapUsd,
          mcapChange,
          btcDom,
          ethDom,
          othersDom: Math.max(0, 100 - btcDom - ethDom),
          btcPrice: btc.usd || 0,
          btcChange: btc.usd_24h_change || 0,
          ethPrice: eth.usd || 0,
          ethChange: eth.usd_24h_change || 0,
        });
      } catch (e) {
        console.error("Crypto fetch error:", e);
      }
    };

    fetchCrypto();
    const interval = setInterval(fetchCrypto, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const fetchFxFutures = async () => {
      try {
        const url =
          "https://corsproxy.io/?https://query1.finance.yahoo.com/v7/finance/quote?symbols=USDINR=X,CL=F,NG=F,GC=F,HG=F";

        const res = await fetch(url);
        const json = await res.json();
        const results = json?.quoteResponse?.result || [];

        const map = {};
        for (const r of results) {
          map[r.symbol] = r;
        }

        setFxAndFutures({
          usdInr: map["USDINR=X"],
          crude: map["CL=F"],
          natgas: map["NG=F"],
          gold: map["GC=F"],
          copper: map["HG=F"],
        });
      } catch (e) {
        console.error("FX/Futures fetch error:", e);
      }
    };

    fetchFxFutures();
    const interval = setInterval(fetchFxFutures, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {

    setIndiaMacro({
      yieldValue: 6.53,
      yieldChange: 0.31,
      inflation: [5.4, 5.1, 4.8, 4.2, 3.8, 3.2, 2.7, 2.1],
      interestActual: 5.5,
      nextRelease: "Dec 5, 2025",
    });
  }, []);


  const sensexConfig = {
    symbols: [["BSE:SENSEX|1D"]],
    chartOnly: false,
    width: "100%",
    height: 420,
    locale: "en",
    colorTheme: "dark",
    autosize: true,
    showVolume: false,
    showMA: false,
    hideDateRanges: false,
    hideMarketStatus: false,
    hideLegend: false,
    studies: [],
    container_id: "tv-sensex-overview",
  };

  const majorIndicesConfig = {
    width: "100%",
    height: 420,
    colorTheme: "dark",
    locale: "en",
    showSymbolLogo: true,
    isTransparent: false,
    symbolsGroups: [
      {
        name: "Major indices",
        originalName: "Major indices",
        symbols: [
          { name: "BSE:SENSEX", displayName: "Sensex" },
          { name: "SP:SPX", displayName: "S&P 500" },
          { name: "NASDAQ:NDX", displayName: "Nasdaq 100" },
          { name: "TSE:N225", displayName: "Japan 225" },
          { name: "SSE:000001", displayName: "SSE Composite" },
          { name: "LSE:UKX", displayName: "FTSE 100" },
        ],
      },
    ],
    showFloatingTooltip: true,
    container_id: "tv-major-indices",
  };

  const cryptoTotalConfig = {
    symbols: [["CRYPTOCAP:TOTAL|1D"]],
    chartOnly: false,
    width: "100%",
    height: 200,
    locale: "en",
    colorTheme: "dark",
    autosize: true,
    showVolume: false,
    showMA: false,
    hideDateRanges: true,
    hideLegend: true,
    hideMarketStatus: false,
    studies: [],
    container_id: "tv-crypto-total",
  };

  const usdInrConfig = {
    symbols: [["FX_IDC:USDINR|1D"]],
    chartOnly: false,
    width: "100%",
    height: 200,
    locale: "en",
    colorTheme: "dark",
    autosize: true,
    showVolume: false,
    showMA: false,
    hideDateRanges: true,
    hideLegend: true,
    hideMarketStatus: false,
    studies: [],
    container_id: "tv-usdinr",
  };

  const indiaYieldConfig = {
    symbols: [["TVC:IN10Y|1D"]],
    chartOnly: false,
    width: "100%",
    height: 200,
    locale: "en",
    colorTheme: "dark",
    autosize: true,
    showVolume: false,
    showMA: false,
    hideDateRanges: true,
    hideLegend: true,
    hideMarketStatus: false,
    studies: [],
    container_id: "tv-india-yield",
  };



  return (
    <div className="min-h-screen w-full bg-black text-white px-4 sm:px-6 lg:px-10 ">
      <div className="max-w-7xl mx-auto">

        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold">Market summary</h1>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          <div className="lg:col-span-2 bg-[#050509] rounded-3xl border border-gray-800 shadow-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-sm font-bold">
                  30
                </div>
                <div>
                  <p className="font-semibold text-lg">Sensex</p>
                  <p className="text-xs text-gray-400">BSE Sensex Index</p>
                </div>
              </div>
              <span className="text-xs text-gray-500">
                {/* Live chart · Powered by TradingView */}
              </span>
            </div>

            <TradingViewEmbed
              widgetSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
              config={sensexConfig}
              className="rounded-2xl overflow-hidden"
              style={{ height: 420 }}
            />
          </div>


          <div className="bg-[#050509] rounded-3xl border border-gray-800 shadow-xl p-4 sm:p-5 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Major indices</h2>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tradingview.com/markets/indices/quotes-major/",
                    "_blank"
                  )
                }
                className="text-xs text-blue-400 hover:underline"
              >
                See all major indices ›
              </button>
            </div>

            <TradingViewEmbed
              widgetSrc="https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js"
              config={majorIndicesConfig}
              className="flex-1 rounded-2xl overflow-hidden"
              style={{ minHeight: 0 }}
            />
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#050509] rounded-3xl border border-gray-800 shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-300 flex items-center gap-2">
                  <span className="inline-block w-6 h-6 rounded-full bg-blue-600" />
                  Crypto market cap
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-gray-700 text-gray-200">
                    TOTAL
                  </span>
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tradingview.com/markets/cryptocurrencies/prices-all/",
                    "_blank"
                  )
                }
                className="text-[11px] text-blue-400 hover:underline"
              >
                See all crypto coins ›
              </button>
            </div>


            <div className="mb-2">
              {cryptoStats ? (
                <>
                  <p className="text-xl font-semibold">
                    {(cryptoStats.totalMcapUsd / 1e12).toFixed(2)}T{" "}
                    <span className="text-xs text-gray-400">USD</span>
                  </p>
                  <p
                    className={`text-sm ${cryptoStats.mcapChange >= 0
                        ? "text-green-400"
                        : "text-red-400"
                      }`}
                  >
                    {cryptoStats.mcapChange >= 0 ? "+" : ""}
                    {cryptoStats.mcapChange.toFixed(2)}%
                  </p>
                </>
              ) : (
                <p className="text-xs text-gray-500">Loading…</p>
              )}
            </div>


            <TradingViewEmbed
              widgetSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
              config={cryptoTotalConfig}
              className="rounded-2xl overflow-hidden mb-4"
              style={{ height: 200 }}
            />


            {cryptoStats && (
              <>
                <p className="text-xs text-gray-400 mb-1">Bitcoin dominance</p>
                <div className="w-full h-2 rounded-full bg-gray-800 overflow-hidden flex mb-3">
                  <div
                    className="h-full bg-blue-500"
                    style={{ width: `${cryptoStats.btcDom}%` }}
                  />
                  <div
                    className="h-full bg-purple-500"
                    style={{ width: `${cryptoStats.ethDom}%` }}
                  />
                  <div
                    className="h-full bg-teal-500"
                    style={{ width: `${cryptoStats.othersDom}%` }}
                  />
                </div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-blue-400">
                    Bitcoin {cryptoStats.btcDom.toFixed(2)}%
                  </span>
                  <span className="text-purple-300">
                    Ethereum {cryptoStats.ethDom.toFixed(2)}%
                  </span>
                  <span className="text-teal-300">
                    Others {cryptoStats.othersDom.toFixed(2)}%
                  </span>
                </div>

                <div className="mt-3 border-t border-gray-800 pt-3 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Bitcoin</span>
                    <span className="text-right">
                      {cryptoStats.btcPrice.toLocaleString()}{" "}
                      <span className="text-[10px] text-gray-400">USD</span>
                      <br />
                      <span
                        className={
                          cryptoStats.btcChange >= 0
                            ? "text-green-400 text-xs"
                            : "text-red-400 text-xs"
                        }
                      >
                        {cryptoStats.btcChange >= 0 ? "+" : ""}
                        {cryptoStats.btcChange.toFixed(2)}%
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ethereum</span>
                    <span className="text-right">
                      {cryptoStats.ethPrice.toLocaleString()}{" "}
                      <span className="text-[10px] text-gray-400">USD</span>
                      <br />
                      <span
                        className={
                          cryptoStats.ethChange >= 0
                            ? "text-green-400 text-xs"
                            : "text-red-400 text-xs"
                        }
                      >
                        {cryptoStats.ethChange >= 0 ? "+" : ""}
                        {cryptoStats.ethChange.toFixed(2)}%
                      </span>
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>


          <div className="bg-[#050509] rounded-3xl border border-gray-800 shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-300">
                  USD to INR{" "}
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-gray-700 text-gray-200">
                    USDINR
                  </span>
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tradingview.com/markets/futures/prices-all/",
                    "_blank"
                  )
                }
                className="text-[11px] text-blue-400 hover:underline"
              >
                See all futures ›
              </button>
            </div>


            <div className="mb-2">
              {fxAndFutures?.usdInr ? (
                <>
                  <p className="text-xl font-semibold">
                    {fxAndFutures.usdInr.regularMarketPrice.toFixed(4)}{" "}
                    <span className="text-xs text-gray-400">INR</span>
                  </p>
                  <p
                    className={`text-sm ${fxAndFutures.usdInr.regularMarketChangePercent >= 0
                        ? "text-green-400"
                        : "text-red-400"
                      }`}
                  >
                    {fxAndFutures.usdInr.regularMarketChangePercent >= 0
                      ? "+"
                      : ""}
                    {fxAndFutures.usdInr.regularMarketChangePercent.toFixed(2)}%
                  </p>
                </>
              ) : (
                <p className="text-xs text-gray-500">Loading…</p>
              )}
            </div>

            <TradingViewEmbed
              widgetSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
              config={usdInrConfig}
              className="rounded-2xl overflow-hidden mb-4"
              style={{ height: 200 }}
            />

            <div className="mt-1 space-y-2 text-sm">
              {renderFutureRow("Crude oil", fxAndFutures?.crude)}
              {renderFutureRow("Natural gas", fxAndFutures?.natgas)}
              {renderFutureRow("Gold", fxAndFutures?.gold)}
              {renderFutureRow("Copper", fxAndFutures?.copper)}
            </div>
          </div>

          <div className="bg-[#050509] rounded-3xl border border-gray-800 shadow-xl p-4 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-sm text-gray-300">
                  India 10-year yield{" "}
                  <span className="ml-1 px-1.5 py-0.5 text-[10px] rounded-full bg-gray-700 text-gray-200">
                    IN10Y
                  </span>
                </p>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://www.tradingview.com/markets/bonds/yields-all/",
                    "_blank"
                  )
                }
                className="text-[11px] text-blue-400 hover:underline"
              >
                See all economic indicators ›
              </button>
            </div>

            <div className="mb-2">
              {indiaMacro ? (
                <>
                  <p className="text-xl font-semibold">
                    {indiaMacro.yieldValue.toFixed(3)}%
                  </p>
                  <p
                    className={`text-sm ${indiaMacro.yieldChange >= 0
                        ? "text-green-400"
                        : "text-red-400"
                      }`}
                  >
                    {indiaMacro.yieldChange >= 0 ? "+" : ""}
                    {indiaMacro.yieldChange.toFixed(2)}%
                  </p>
                </>
              ) : (
                <p className="text-xs text-gray-500">Loading…</p>
              )}
            </div>

            <TradingViewEmbed
              widgetSrc="https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js"
              config={indiaYieldConfig}
              className="rounded-2xl overflow-hidden mb-4"
              style={{ height: 200 }}
            />


            {indiaMacro && (
              <>
                <p className="text-xs text-gray-400 mb-1">
                  India annual inflation rate
                </p>
                <div className="flex items-end gap-1 h-20 mb-3">
                  {indiaMacro.inflation.map((v, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-blue-500 rounded-t"
                      style={{ height: `${(v / 7) * 100}%` }}
                    />
                  ))}
                </div>

                <div className="text-xs text-gray-300 space-y-1">
                  <p>
                    India interest rate{" "}
                    <span className="font-semibold text-white">
                      {indiaMacro.interestActual.toFixed(1)}%
                    </span>
                  </p>
                  <p>
                    Next release{" "}
                    <span className="text-gray-200">{indiaMacro.nextRelease}</span>
                  </p>
                  <p className="text-[11px] text-gray-500">
                    {/* (Hook this section to a macro API like TradingEconomics for
                    fully live data.) */}
                  </p>
                </div>
              </>
            )}
          </div>
        </div>

        <div className=" flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-bold p-4">Heat Map</h1>
        </div>
        <div className="">
          <HeatmapWidget />
        </div>
      </div>


    </div>
  );
}



function renderFutureRow(label, quote) {
  if (!quote) {
    return (
      <div className="flex justify-between text-xs text-gray-500">
        <span>{label}</span>
        <span>Loading…</span>
      </div>
    );
  }

  const changeColor =
    quote.regularMarketChangePercent >= 0 ? "text-green-400" : "text-red-400";

  return (
    <div className="flex justify-between text-sm">
      <span>{label}</span>
      <span className="text-right">
        {quote.regularMarketPrice.toFixed(2)}{" "}
        <span className="text-[10px] text-gray-400">
          {quote.currency || "USD"}
        </span>
        <br />
        <span className={`${changeColor} text-xs`}>
          {quote.regularMarketChangePercent >= 0 ? "+" : ""}
          {quote.regularMarketChangePercent.toFixed(2)}%
        </span>
      </span>
    </div>
  );
}




