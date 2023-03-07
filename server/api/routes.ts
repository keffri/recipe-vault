const express = require('express');
const router = express.Router();

const auth_controller = require('../src/controllers/authController');

// AUTH
router.post('/signup', auth_controller.signup_post);
router.post('/login', auth_controller.login_post);

module.exports = router;
