import React, { useState, useEffect } from 'react';
import styles from '../styles/Clients.module.css';

export default function ClientForm({ onSubmit, editingClient, clearEdit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editingClient) {
      setName(editingClient.name);
      setEmail(editingClient.email);
      setCompany(editingClient.company || '');
      setPhone(editingClient.phone || '');
    }
  }, [editingClient]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const client = {
      id: editingClient?.id, // si existe, mantenemos el id para actualizar; si no, se genera nuevo en la página padre
      name,
      email,
      company,
      phone,
    };

    onSubmit(client);

    // hacemos cleanup de los campos
    setName('');
    setEmail('');
    setCompany('');
    setPhone('');
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

      <input
        type="text"
        placeholder="Empresa"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit">
        {editingClient ? 'Actualizar' : 'Agregar'}
      </button>

      {editingClient && (
        <button onClick={clearEdit} type="button" className={styles.cancelButton}>
          Cancelar
        </button>
      )}
    </form>
  );
}
