const listaProductos = document.getElementById('lista-productos');
const formProducto = document.getElementById('form-producto');
const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');

// Mostrar errores en el DOM para facilitar la depuración
function mostrarError(mensaje) {
  const li = document.createElement('li');
  li.textContent = `⚠️ Error: ${mensaje}`;
  li.style.color = 'red';
  listaProductos.appendChild(li);
}

// Función para obtener todos los productos
function obtenerProductos() {
  fetch('http://localhost:3000/productos', { method: 'GET' })
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then(data => {
        console.log(data)
      listaProductos.innerHTML = ''; // Limpiar la lista
      data.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.id}. ${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(li);
      });
    })
    .catch(error => {
      console.error('Error al obtener productos:', error);
      mostrarError('No se pudieron cargar los productos.');
    });
}

// Función para agregar un nuevo producto
formProducto.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar recarga de la página

  const nuevoProducto = {
    nombre: nombreInput.value,
    precio: parseFloat(precioInput.value),
  };

  fetch('http://localhost:3000/productos/agregar', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(nuevoProducto),
  })
    .then(response => {
      if (!response.ok) throw new Error(`Error ${response.status}: ${response.statusText}`);
      return response.json();
    })
    .then(data => {
      console.log('Producto agregado:', data);
      obtenerProductos(); // Actualizar lista
      formProducto.reset(); // Limpiar formulario
    })
    .catch(error => {
      console.error('Error al agregar producto:', error);
      mostrarError('No se pudo agregar el producto.');
    });
});

// Obtener productos al cargar la página
obtenerProductos();
