const User = require('../models/user');

// Get all users
async function getUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}

// Get a specific user by ID
async function getUserById(userId) {
    try {
        const user = await User.findById(userId); // Use Mongoose's `findById` method
        return user;
    } catch (error) {
        throw new Error('Error fetching user: ' + error.message);
    }
}

// Update a user by ID
async function updateUser(userId, updatedData) {
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData, { new: true }); // `new: true` returns the updated document
        return updatedUser;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
}

// Delete a user by ID
async function deleteUser(userId) {
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        return deletedUser;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
}

module.exports = { getUsers, getUserById, updateUser, deleteUser };