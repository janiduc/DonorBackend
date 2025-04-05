const express = require('express');
const multer = require('multer');
const sponsorshipController = require('../controllers/sponsorship');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' }); // Files will be stored in the `uploads` directory

// Add a sponsorship
router.post('/sponsorships', authMiddleware.authenticateToken, upload.single('photo'), sponsorshipController.addSponsorship);

// Get all sponsorships
router.get('/sponsorships', authMiddleware.authenticateToken, sponsorshipController.getAllSponsorships);

// Get a specific sponsorship by ID
router.get('/sponsorships/:id', authMiddleware.authenticateToken, sponsorshipController.getSponsorshipById);

// Update sponsorship status
router.put('/sponsorships/:id/status', authMiddleware.authenticateToken, sponsorshipController.updateSponsorshipStatus);

// Delete a sponsorship by ID
router.delete('/sponsorships/:id', authMiddleware.authenticateToken, sponsorshipController.deleteSponsorship);

module.exports = router;