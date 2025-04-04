const express = require('express');
const cors = require('cors');
const eldersController = require('../controllers/elders');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();
router.use(cors());

// Add a elder
router.post('/elders', authMiddleware.authenticateToken, eldersController.addElder);

// Get a specific elder by ID
router.get('/elders/:id', authMiddleware.authenticateToken, eldersController.getElderById);

// Get all elders
router.get('/elders', authMiddleware.authenticateToken, eldersController.getAllElders);

// Update a elder by ID
router.put('/elders/:id', authMiddleware.authenticateToken, eldersController.updateElder);

// Delete a elder by ID
router.delete('/elders/:id', authMiddleware.authenticateToken, eldersController.deleteElder);

module.exports = router;