const express = require('express');
const router = express.Router();

// controllers
const {register, login} = require('../controllers/AuthController');
const {getProduct} = require('../controllers/productController');
const {reserve, purchase, userOrders} = require('../controllers/orderController');

router.post('/register', register);
router.post('/login', login);

router.get('/products', getProduct);

router.post('/reserve', reserve);
router.put('/purchase', purchase);
router.post('/user_orders', userOrders);

module.exports = router;

