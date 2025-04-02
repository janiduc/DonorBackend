const express = require('express');
const signpController = require('../controllers/signup');

const router = express.Router();

router.post("/register", signpController.createUser);

module.exports = router;