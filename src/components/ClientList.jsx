import React from 'react';
import styles from '../styles/Clients.module.css';

export default function ClientList({ clients, onEdit, onDelete }) {
  return (
    <ul className={styles.list}>
      {clients.map((client) => (
        <li key={client.id} className={styles.item}>
          <span>{client.name} ({client.email})</span>
          <div>
            <button onClick={() => onEdit(client)}>Editar</button>
            <button onClick={() => onDelete(client.id)}>Eliminar</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
