import Header from '../components/Header/Header';
import Marquee from '../components/Marquee/Marquee';
import Chart from '../components/Chart/Chart';
import ReturnsTable from '../components/ReturnsTable/ReturnsTable';
import styles from './index.module.css';

export default function Home() {
  return (
    <main>
      <Header />
      <Marquee />

      <div className={styles.hero}>
        <h1>Investment Returns Denominated in BTC</h1>
        <p>View charts of investment returns across sectors, asset classes, and more, all priced in Bitcoin.</p>
      </div>

<section className={styles.metricsGrid}>
  <div className={styles.chartBox}>
    <h2>S&P 500</h2>
    <Chart ticker="SPY" />
  </div>
  <div className={styles.returnsTableWrapper}>
    <ReturnsTable />
  </div>
</section>


    </main>
  );
}
