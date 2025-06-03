import React from 'react';
import styles from '../styles/Topbar.module.css';

export default function Topbar() {
  return (
    <header className={styles.topbar}>
      <div>
        <span style={{ fontWeight: 600, fontSize: '18px' }}>CRM Template</span>
      </div>
      <div className={styles.userInfo}>
        Usuario: Mariano
      </div>
    </header>
  );
}
