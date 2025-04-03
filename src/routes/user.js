const express = require("express");
const cors = require("cors");
const userController = require("../controllers/user");
const authMiddleware = require("../utils/authMiddleware");

const router = express.Router();
router.use(cors());

// Route to get all users
router.get("/users", authMiddleware.authenticateToken, userController.getUsers);

// Route to get a specific user by ID
router.get("/users/:id", authMiddleware.authenticateToken, userController.getUserById);

// Update a user by ID
router.put("/users/:id", authMiddleware.authenticateToken, userController.updateUser);

// Delete a user by ID
router.delete("/users/:id", authMiddleware.authenticateToken, userController.deleteUser);

module.exports = router;