import React, { useState, useEffect } from 'react';
import styles from '../styles/Clients.module.css';

export default function ClientForm({ onSubmit, editingClient, clearEdit }) {
  // Estados locales para los campos del formulario. Inicializan de forma vacia 
  const [name, setName] = useState('');      
  const [email, setEmail] = useState('');     
  const [company, setCompany] = useState(''); 
  const [phone, setPhone] = useState(''); 

  // Cuando cambie editingClient (modo edición), cargamos sus valores en el formulario.
  useEffect(() => {
    if (editingClient) {
      // Si editingClient no es null, asignamos sus datos a los estados locales
      setName(editingClient.name);
      setEmail(editingClient.email);
      // Si company o phone no existen en editingClient, usamos cadena vacía
      setCompany(editingClient.company || '');
      setPhone(editingClient.phone || '');
    }
  }, [editingClient]); // Se ejecuta cada vez que editingClient cambie

  // Handle del submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();           // Evita que la página se recargue
    if (!name || !email) return;  // Validación mínima: nombre y correo son obligatorios

    // Construimos el objeto cliente
    const client = {
      id: editingClient?.id,
      name,
      email,
      company,
      phone,
    };

    onSubmit(client); // Llamamos a la función onSubmit (prop) pasando el objeto cliente

    // Limpiamos los campos para dejar el formulario vacío
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
        pattern='^[a-zA-ZÀ-ÿ\s]{1,40}$' // Validación: solo letras y espacios, 1 a 40 caracteres
        title='El nombre solo puede contener letras y espacios, de 1 a 40 caracteres'
        required // Campo obligatorio
        value={name}                    // Valor controlado por el estado `name`
        onChange={(e) => setName(e.target.value)} // Al cambiar, actualizamos `name`
      />

      <input
        type="email"
        placeholder="Correo"
        pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$' // Validación de correo electrónico
        title='Ingrese un correo electrónico válido (ejemplo@ejemplo.com)'
        required // Campo obligatorio
        value={email}                   // Valor controlado por el estado `email`
        onChange={(e) => setEmail(e.target.value)} // Al cambiar, actualizamos `email`
      />

      <input
        type="text"
        placeholder="Empresa"
        value={company}                 // Valor controlado por el estado `company`
        onChange={(e) => setCompany(e.target.value)} // Al cambiar, actualizamos `company`
      />

      <input
        type="text"
        placeholder="Teléfono"
        pattern='^\+?[0-9\s-]{7,15}$' // Validación: números, espacios y guiones, 7 a 15 caracteres
        title='Ingrese un número de teléfono válido (7 a 15 dígitos, con o sin +)'
        inputMode='tel' // Muestra teclado numérico en dispositivos móviles
        value={phone}                   // Valor controlado por el estado `phone`
        onChange={(e) => setPhone(e.target.value)}   // Al cambiar, actualizamos `phone`
      />

      {/* Botón de envío: si editingClient existe, mostramos “Actualizar”, de lo contrario “Agregar” */}
      <button type="submit">
        {editingClient ? 'Actualizar' : 'Agregar'}
      </button>

      {/* Si estamos en modo edición (editingClient no es null), mostramos botón “Cancelar” */}
      {editingClient && (
        <button
          onClick={clearEdit}         // Llama a clearEdit (prop) para salir del modo edición
          type="button"
          className={styles.cancelButton}
        >
          Cancelar
        </button>
      )}
    </form>
  );
}