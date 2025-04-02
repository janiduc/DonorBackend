const User = require('../models/user');

async function getUsers() {
    try {
        const users = await User.find({});
        return users;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
}

module.exports = {getUsers};