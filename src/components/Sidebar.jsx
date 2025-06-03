import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clientes"
              end
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/clientes/ver"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Ver Clientes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chat"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Chat IA
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? styles.linkActive : styles.link
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
