const express = require('express');
const router = express.Router();

// controllers
const {register} = require('../controllers/AuthController');

router.post('/register', register);

module.exports = router;

