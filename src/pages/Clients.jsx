import React, { useState } from 'react';
import ClientForm from '../components/ClientForm';
import ClientList from '../components/ClientList';

import styles from '../styles/Clients.module.css';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [editingClient, setEditingClient] = useState(null);

  const addClient = (client) => {
    setClients([...clients, { ...client, id: Date.now() }]);
  };

  const deleteClient = (id) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  const startEditClient = (client) => {
    setEditingClient(client);
  };

  const updateClient = (updated) => {
    setClients(
      clients.map((c) => (c.id === updated.id ? updated : c))
    );
    setEditingClient(null);
  };

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
