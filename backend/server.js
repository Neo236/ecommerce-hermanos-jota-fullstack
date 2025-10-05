const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');
const app = express();
const PORT = 3001;

// --- MIDDLEWARES ---

app.use(cors());

// 1. Middleware global para loguear peticiones
app.use((req, res, next) => {
    console.log(`Petición recibida: ${req.method} ${req.url}`);
    next(); // Es crucial llamar a next() para que la petición continúe
});

// 2. Middleware para parsear JSON (necesario para futuras peticiones POST/PUT)
app.use(express.json());

// --- RUTAS ---

// Usamos nuestras rutas de productos bajo el prefijo /api/productos
app.use('/api/productos', productRoutes);

// --- MANEJO DE ERRORES ---

// 3. Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ message: 'La ruta solicitada no existe.' });
});

// 4. Middleware centralizado para manejar otros errores
app.use((err, req, res, next) => {
    console.error(err.stack); // Loguea el error en la consola del servidor
    res.status(500).json({ message: 'Ocurrió un error en el servidor.' });
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});