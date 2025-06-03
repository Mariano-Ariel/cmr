import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <h1 className={styles.welcome}>¡Bienvenido a tu CRM!</h1>
        <p className={styles.subtitle}>
          Administra clientes y conversa con la IA desde aquí
        </p>
      </div>

      <div className={styles.linksGrid}>
        <Link to="/clientes" className={styles.card}>
          <div className={styles.cardIcon}>👥</div>
          <div className={styles.cardTitle}>Clientes</div>
          <div className={styles.cardDesc}>Ver, agregar y editar clientes</div>
        </Link>

        <Link to="/chat" className={styles.card}>
          <div className={styles.cardIcon}>💬</div>
          <div className={styles.cardTitle}>Chat IA</div>
          <div className={styles.cardDesc}>Iniciar conversación inteligente</div>
        </Link>

        <div className={styles.card}>
          <div className={styles.cardIcon}>📊</div>
          <div className={styles.cardTitle}>Estadísticas</div>
          <div className={styles.cardDesc}>Próximamente</div>
        </div>
      </div>
    </div>
  );
}
