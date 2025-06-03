// src/pages/ViewClients.jsx
import React from 'react';
import ClientList from '../components/ClientList';
import styles from '../styles/Clients.module.css';

export default function ViewClients() {
  // Por ahora, simulamos que tenemos un estado "clients" proveniente del padre o de localStorage.
  const [clients] = React.useState(() => {
    // cargar desde localStorage
    const stored = window.localStorage.getItem('clients');
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div className={styles.clientsPage}>
      <h2>Clientes Registrados</h2>
      {clients.length === 0 ? (
        <p>No hay clientes cargados.</p>
      ) : (
        <ClientList clients={clients} onEdit={() => {}} onDelete={() => {}} />
      )}
    </div>
  );
}
