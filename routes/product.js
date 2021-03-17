//Rutas para producto
const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productController');

// api/products
router.post('/', productoController.createProduct);
router.get('/', productoController.getProducts);
router.put('/:id', productoController.putProduct);
router.get('/:id', productoController.getProduct);
router.delete('/:id', productoController.deleteProduct);

module.exports = router;