const userService = require('../services/user');

// Get all users
async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users: " + error.message });
    }
}

// Get a specific user by ID
async function getUserById(req, res) {
    try {
        const userId = req.params.id; // Extract the user ID from the request parameters
        const user = await userService.getUserById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user: " + error.message });
    }
}

// Update a user by ID
async function updateUser(req, res) {
    try {
        const userId = req.params.id; // Extract user ID from request parameters
        const updatedData = req.body; // Extract updated data from request body
        const updatedUser = await userService.updateUser(userId, updatedData);
        if (!updatedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User updated successfully", user: updatedUser });
    } catch (error) {
        res.status(500).json({ message: "Error updating user: " + error.message });
    }
}

// Delete a user by ID
async function deleteUser(req, res) {
    try {
        const userId = req.params.id; // Extract user ID from request parameters
        const deletedUser = await userService.deleteUser(userId);
        if (!deletedUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user: " + error.message });
    }
}

module.exports = { getUsers, getUserById, updateUser, deleteUser };