import React from 'react';
import styles from './Marquee.module.css';

export default function Marquee() {
  return (
    <div className={styles.strip}>
      <span>
        S&P 500 +0.73%  DSE 2,500 −0.31%  Dow 4.99 +10.4%  FTSE 100 −19.4%  Gold -134 −6.9%  Crude 01 −0.3%
      </span>
    </div>
  );
}
