// src/pages/Clients.jsx
import React, { useState, useEffect } from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';
import styles from '../styles/Clients.module.css';

export default function Clients() {
  const [clients, setClients] = useState(() => {
    const stored = window.localStorage.getItem('clients');
    return stored ? JSON.parse(stored) : [];
  });
  const [editingClient, setEditingClient] = useState(null);

  // Cada vez que cambie "clients", lo guardamos en localStorage por ahora
  useEffect(() => {
    window.localStorage.setItem('clients', JSON.stringify(clients));
  }, [clients]);

  const addClient = (newClient) => setClients([...clients, newClient]);

  const updateClient = (updatedClient) => {
    setClients(
      clients.map((c) =>
        c.id === updatedClient.id ? updatedClient : c
      )
    );
    setEditingClient(null);
  };

  const deleteClient = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  const startEditClient = (client) => setEditingClient(client);

  return (
    <div className={styles.clientsPage}>
      <h2>Clientes</h2>
      <ClientForm
        onSubmit={editingClient ? updateClient : addClient}
        editingClient={editingClient}
        clearEdit={() => setEditingClient(null)}
      />
      <ClientList
        clients={clients}
        onEdit={startEditClient}
        onDelete={deleteClient}
      />
    </div>
  );
}
