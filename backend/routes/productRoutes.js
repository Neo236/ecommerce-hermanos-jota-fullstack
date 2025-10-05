const express = require('express');
const router = express.Router();

const products = require('../data/products.json');

// --- ENDPOINTS ---

// 1. GET /api/productos
// Devuelve la lista completa de productos.
router.get('/', (req, res) => {
    res.json(products);
});

// 2. GET /api/productos/:id
// Devuelve un producto específico según su ID.
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);

    const product = products.find(p => p.id === productId);

    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Producto no encontrado' });
    }
});

module.exports = router;