/* eslint-disable no-undef */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importación de del router
import clientsRouter from './routes/clients.js';

dotenv.config();

// ------ instancia de Express ------
const app = express();

// ------ Middlewares globales ------
app.use(cors());         // CORS
app.use(express.json()); // Parsear cuerpos JSON

// ------ rutas ------

app.get('/', (req, res) => {
  res.json({ message: 'Backend CORRIENDO correctamente' });
});

app.use('/api/clients', clientsRouter);

// ------ 4) Levantar el servidor ------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
