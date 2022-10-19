const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola mi server en Express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, Soy una nueva ruta');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: 1000,
    },
    {
      name: 'Product 2',
      price: 2000,
    },
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.get('/categories/:categorieId/products/:productId', (req, res) => {
  const { categorieId, productId } = req.params;
  res.json({
    categorieId,
    productId,
  });
});

app.get('/categories', (req, res) => {
  res.json([
    {
      blue: true,
      green: false,
    },
    {
      blue: false,
      red: true,
    },
  ]);
});

app.get('/categories/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    blue: true,
    green: false,
  });
});

app.get('/people', (req, res) => {
  res.json([
    {
      name: 'Luis',
      age: 23,
      role: 'Backend Engineer',
    },
    {
      name: 'Paula',
      age: 25,
      role: 'Product Design',
    },
  ]);
});

app.get('/people/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Luis',
    age: 23,
    role: 'Backend Engineer',
  });
});

app.listen(port, () => {
  console.log('My port: ' + port);
});
