import React from 'react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>SatValue.com</div>
      <div className={styles.navLinks}>
        <span className={styles.dropdown}>Countries ▼</span>
        <span className={styles.dropdown}>Asset Classes ▼</span>
        <span className={styles.dropdown}>Sectors ▼</span>
      </div>
      <div className={styles.navSearch}>
        <input type="text" placeholder="Enter a ticker" className={styles.searchInput} />
        <button className={styles.searchButton}>Search</button>
      </div>
    </header>
  );
}
