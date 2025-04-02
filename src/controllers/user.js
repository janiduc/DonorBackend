const userService = require('../services/user');

async function getUsers(req, res) {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users: " + error.message });
    }
};

module.exports = {getUsers};