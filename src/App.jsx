import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';

import Home from './pages/Home';
import Clients from './pages/Clients';
import Chat from './pages/Chat';

import styles from './styles/App.module.css';

export default function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Sidebar />
        <div className={styles.main}>
          <Topbar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/clientes" element={<Clients />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}
