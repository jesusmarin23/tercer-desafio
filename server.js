const express = require('express');
const app = express();
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el Puerto: ${PORT}`);
  });
  

const productos = [
  { id: 1, nombre: 'Producto 1' },
  { id: 2, nombre: 'Producto 2' },
  { id: 3, nombre: 'Producto 3' },
  { id: 4, nombre: 'Producto 4' },
  { id: 5, nombre: 'Producto 5' },
  { id: 6, nombre: 'Producto 6' },
  { id: 7, nombre: 'Producto 7' },
  { id: 8, nombre: 'Producto 8' },
  { id: 9, nombre: 'Producto 9' },
  { id: 10, nombre: 'Producto 10' },
];

app.use((req, res, next) => {
  if (productos.length < 10) {
    return res.status(500).json({ error: 'Deben existir al menos 10 productos' });
  }
  next();
});

app.get('/products', (req, res) => {
  const { limit } = req.query;
  if (limit) {
    const limitedProducts = productos.slice(0, limit);
    return res.json(limitedProducts);
  }
  return res.json(productos);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  const product = productos.find((p) => p.id === parseInt(id));
  if (product) {
    return res.json(product);
  } else {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }
});

