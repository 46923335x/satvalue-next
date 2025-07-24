// pages/asset/[ticker].js
import { useRouter } from 'next/router';
import TradingViewChartWidget from '../../components/Chart/Chart';
import ReturnsTable from '../../components/ReturnsTable/ReturnsTable';

export default function AssetPage() {
  const router = useRouter();
  const { ticker } = router.query;

  if (!ticker) return <div>Loading...</div>;

  return (
    <main>
      <header className="navbar">
        <div className="logo">SatValue.com</div>
        {/* same nav/search */}
      </header>

      <div className="marquee-strip">
        {/* same marquee */}
      </div>

      <section className="hero">
        <h1>{ticker.toUpperCase()} Returns Denominated in BTC</h1>
        <p>View performance of {ticker.toUpperCase()} priced in Bitcoin.</p>
      </section>

      <ChartAndTableRow ticker={ticker.toUpperCase()} />
    </main>
  );
}
