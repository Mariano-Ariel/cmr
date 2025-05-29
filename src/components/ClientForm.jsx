import React, { useState, useEffect } from 'react';
import styles from '../styles/Clients.module.css';

export default function ClientForm({ onSubmit, editingClient, clearEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setEmail(editingClient.email);
    }
  }, [editingClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const client = {
      name,
      email,
      id: editingClient?.id,
    };

    onSubmit(client);
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">
        {editingClient ? 'Actualizar' : 'Agregar'}
      </button>
      {editingClient && <button onClick={clearEdit} type="button">Cancelar</button>}
    </form>
  );
}
