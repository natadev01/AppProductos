const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Ruta raíz
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la API de Productos</h1><p>Consulta <a href="/productos">/productos</a> para ver todos los productos.</p>');
});

// Obtener todos los productos
app.get('/productos', (req, res) => {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los datos' });
    }
    const productos = JSON.parse(data);
    res.json(productos);
  });
});

// Obtener un producto por ID
app.get('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los datos' });
    }
    const productos = JSON.parse(data);
    const producto = productos.find(p => p.id === id);
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.json(producto);
  });
});

// Agregar un nuevo producto
app.post('/productos/agregar', (req, res) => {
  const nuevoProducto = req.body;
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los datos' });
    }
    const productos = JSON.parse(data);
    nuevoProducto.id = productos.length + 1;
    productos.push(nuevoProducto);
    fs.writeFile('data.json', JSON.stringify(productos, null, 2), err => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar los datos' });
      }
      res.status(201).json(nuevoProducto);
    });
  });
});

// Actualizar un producto por ID
app.put('/productos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const productoActualizado = req.body;

  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Error al leer los datos' });
    }
    let productos = JSON.parse(data);
    const index = productos.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    productos[index] = { ...productos[index], ...productoActualizado };

    fs.writeFile('data.json', JSON.stringify(productos, null, 2), err => {
      if (err) {
        return res.status(500).json({ error: 'Error al guardar los datos' });
      }
      res.json(productos[index]);
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
