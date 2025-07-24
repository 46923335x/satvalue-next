import React from 'react';
import styles from './ReturnsTable.module.css';

const dummyReturns = [
  { label: '1W', return: -2.3 },
  { label: '1M', return: 5.8 },
  { label: '3M', return: 12.4 },
  { label: '6M', return: 9.7 },
  { label: '1Y', return: 18.2 },
  { label: '3Y', return: 45.1 },
  { label: '5Y', return: 87.3 },
  { label: '10Y', return: 134.6 },
];

export default function ReturnsTable() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Trailing Returns</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Period</th>
            <th className={styles.rightAlign}>Return (BTC)</th>
          </tr>
        </thead>
        <tbody>
          {dummyReturns.map((row) => (
            <tr key={row.label}>
              <td>{row.label}</td>
              <td className={row.return < 0 ? styles.negative : styles.positive}>
                {row.return.toFixed(1)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
