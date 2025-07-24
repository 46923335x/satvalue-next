import React, { useEffect, useRef, memo } from 'react';
import styles from './Chart.module.css';

function TradingViewChartWidget({ ticker }) {
  const container = useRef();

  useEffect(() => {
    if (!ticker) return;

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `${ticker}/COINBASE:BTCUSD*100000000`,
      interval: "D",
      theme: "light",
      autosize: false,
      width: "100%",
      height: 400,
      allow_symbol_change: false,
      calendar: false,
      details: false,
      hide_side_toolbar: true,
      hide_top_toolbar: true,
      hide_legend: true,
      hide_volume: true,
      hotlist: false,
      locale: "en",
      save_image: true,
      style: "2",
      timezone: "Etc/UTC",
      backgroundColor: "#ffffff",
      gridColor: "rgba(46, 46, 46, 0.06)",
      watchlist: [],
      withdateranges: false,
      compareSymbols: [],
      studies: []
    });

    container.current.innerHTML = '';
    container.current.appendChild(script);
  }, [ticker]);

  return (
    <div className={styles.widgetContainer} ref={container}>
      <div className={styles.widget} />
      <div className={styles.chartFooter}>
        <a href="https://www.tradingview.com/" target="_blank" rel="noopener nofollow">
          Track all markets on TradingView
        </a>
      </div>
    </div>
  );
}

export default memo(TradingViewChartWidget);
