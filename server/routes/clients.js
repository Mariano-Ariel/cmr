// routes/clients.js
import { Router } from 'express';

const router = Router();

let clients = []; // arreglo en memoria; es provisorio hasta tener DB

// GET /api/clients lista todos los clientes
router.get('/', (req, res) => {
  res.json(clients);
});

// POST /api/clients crea un nuevo cliente
router.post('/', (req, res) => {
  const newClient = { id: Date.now(), ...req.body };
  clients.push(newClient);
  res.status(201).json(newClient);
});

// PUT /api/clients/:id actualiza cliente
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const index = clients.findIndex(c => c.id === id);
  if (index === -1) return res.status(404).json({ error: 'No existe' });
  clients[index] = { ...clients[index], ...req.body };
  res.json(clients[index]);
});

// DELETE /api/clients/:id elimina cliente
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  clients = clients.filter(c => c.id !== id);
  res.status(204).end();
});

export default router;
