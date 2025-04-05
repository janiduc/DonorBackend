const express = require('express');
const cors = require('cors');
const childrenController = require('../controllers/children');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();
router.use(cors());

// Add a child
router.post('/children', authMiddleware.authenticateToken, childrenController.addChild);

// Get a specific child by ID
//router.get('/children/:id', authMiddleware.authenticateToken, childrenController.getChildById);
router.get('/children/search', authMiddleware.authenticateToken, childrenController.searchChild);

// Route to search for a child by name
//router.get('/children/name/:name', authMiddleware.authenticateToken, childrenController.getChildByName);

// Get all children
router.get('/children', authMiddleware.authenticateToken, childrenController.getAllChildren);

// Update a child by ID
router.put('/children/:id', authMiddleware.authenticateToken, childrenController.updateChild);

// Delete a child by ID
router.delete('/children/:id', authMiddleware.authenticateToken, childrenController.deleteChild);

module.exports = router;