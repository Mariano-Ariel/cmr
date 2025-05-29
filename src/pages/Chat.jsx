import styles from '../styles/Chat.module.css';
import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: 'assistant', text: 'Hola, soy tu asistente. ¿En qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');
    
    // Simulación de respuesta IA
    setTimeout(() => {
      setMessages(prev => [...prev, { sender: 'assistant', text: 'Estoy pensando...' }]);
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, i) => (
          <div
            key={i}
            className={msg.sender === 'user' ? styles.userMsg : styles.assistantMsg}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className={styles.inputArea}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribí tu mensaje..."
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
    </div>
  );
}
