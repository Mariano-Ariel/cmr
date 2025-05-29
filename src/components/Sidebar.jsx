import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.logo}>Mi CRM</h2>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/clientes">Clientes</Link></li>
          <li><Link to="/chat">Chat IA</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
