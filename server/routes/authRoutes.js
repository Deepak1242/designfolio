const express = require('express');
const router = express.Router();
const { loginUser } = require('../controllers/authController');

// Only login - admin users are managed directly in MongoDB
router.post('/login', loginUser);

module.exports = router;
