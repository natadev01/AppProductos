# APP de Productos

Este proyecto es una aplicación web sencilla dividida en **backend** y **frontend**. El **backend** es una API REST desarrollada en Express para gestionar productos, mientras que el **frontend** permite obtener todos los productos y agregar nuevos.

## Requisitos

- **Node.js v20.17.0** (asegúrate de tener la misma versión para evitar conflictos)
- **npm** (se instala con Node.js)
- **Git** (opcional para clonar el repositorio)

---

## Estructura del Proyecto

```plaintext
.
├── backend
│   ├── index.js
│   └── data.json
└── frontend
    └── app.js
    └── index.html
```

- **backend**: Contiene la API y los datos en `data.json`.
- **frontend**: Contiene los archivos del frontend (HTML, CSS, JavaScript).

---

## Instalación del Proyecto

### Paso 1: Clonar el Repositorio

Si tienes Git instalado, puedes clonar este proyecto ejecutando:

```bash
git clone https://github.com/natadev01/app-productos.git
cd app-productos
```

Si no tienes Git, descarga el proyecto como archivo ZIP desde el repositorio y extrae su contenido.

---

## Configuración del Backend

1. **Ir a la carpeta del backend:**

   ```bash
   cd backend
   ```

2. **Instalar las dependencias:**

   ```bash
   npm install
   ```

3. **Verificar el archivo `data.json`:**

   Asegúrate de que el archivo `data.json` existe y contiene lo siguiente:

   ```json
   []
   ```

4. **Iniciar el servidor:**

   ```bash
   node index.js
   ```

5. **Verificar el servidor:**

   El servidor estará corriendo en: [http://localhost:3000](http://localhost:3000).

---

## Endpoints del Backend

### Obtener todos los productos

```bash
GET /productos
```

**Respuesta:**

```json
[
  { "id": 1, "nombre": "Producto 1", "precio": 100 }
]
```

### Agregar un nuevo producto

```bash
POST /productos/agregar
```

**Cuerpo:**

```json
{
  "nombre": "Producto Nuevo",
  "precio": 200
}
```

**Respuesta:**

```json
{
  "id": 2,
  "nombre": "Producto Nuevo",
  "precio": 200
}
```

---

## Configuración del Frontend

1. **Ir a la carpeta del frontend:**

   ```bash
   cd ../frontend
   ```

2. **Instalar dependencias del frontend** (si el proyecto tiene alguna):

   ```bash
   npm install
   ```

3. **Configurar la conexión al backend:**

   Asegúrate de que el frontend apunte a la URL del backend, por ejemplo:

   ```javascript
   const API_URL = 'http://localhost:3000';
   ```

4. **Ejecutar el frontend:**

   Si es una página estática, simplemente abre el archivo HTML en tu navegador. Si usas un servidor de desarrollo, ejecuta:

   ```bash
   npx serve .
   ```

---

## Troubleshooting

- **Error de CORS:**  
  Asegúrate de que el middleware `cors()` esté habilitado en el backend.

- **Problemas de conexión:**  
  Verifica que tanto el backend como el frontend estén corriendo y que apunten al mismo puerto.

---

## Cómo cambiar a la versión 20.17.0 de Node.js

Si tienes una versión diferente de Node.js instalada, puedes usar **nvm**:

1. **Instalar NVM:**  
   Sigue las instrucciones en [nvm](https://github.com/nvm-sh/nvm#installation-and-update).

2. **Instalar la versión 20.17.0 de Node.js:**

   ```bash
   nvm install 20.17.0
   ```

3. **Usar la versión 20.17.0:**

   ```bash
   nvm use 20.17.0
   ```

4. **Verificar la versión de Node.js:**

   ```bash
   node -v
   ```

   Debería mostrar:

   ```bash
   v20.17.0
   ```

---

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras un error o tienes sugerencias para mejorar el proyecto, no dudes en abrir un issue o enviar un pull request.

---

## Licencia

Este proyecto está bajo la licencia MIT.

```text
MIT License

Copyright (c) 2024 Natalia Polanco

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
