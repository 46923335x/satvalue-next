import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const loadPlot = async () => {
      const Plotly = await import('plotly.js-dist-min');

      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=60"
      );
      const data = await response.json();

      const satsPerUsd = data.prices.map(([timestamp, price]) => {
        return {
          x: new Date(timestamp),
          y: Math.round((1 / price) * 1e8),
        };
      });

      Plotly.newPlot("chart", [{
        x: satsPerUsd.map(p => p.x),
        y: satsPerUsd.map(p => p.y),
        mode: 'lines+markers',
        type: 'scatter',
        line: { color: 'orange' },
        name: 'Sats per USD'
      }], {
        title: 'Sats per USD',
        yaxis: { title: 'Sats per USD' },
        xaxis: { title: 'Date' }
      });
    };

    loadPlot();
  }, []);

  return (
    <div style={{ textAlign: "center", fontFamily: "Arial" }}>
      <h1>SatValue</h1>
      <p><strong>How many sats does it take to buy a dollar?</strong></p>
      <p>This chart will show BTC per USD over time.</p>
      <div id="chart" style={{ width: "90%", margin: "0 auto" }}></div>
    </div>
  );
}
