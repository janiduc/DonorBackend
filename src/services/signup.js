const User = require('../models/user');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const {
        name,
        email,
        password} = userData;
    // Hash the password before saving the user to the database
    const hashedPassword = await bcrypt.hashSync(password, 10);

    const createdUser = new User({
        name : name,
        email,
        password: hashedPassword,
        role: 'customer'
    });
    
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = {createUser};
