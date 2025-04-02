const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../utils/jwtUtils'); // Import the generateToken function

async function login(email, password) {
    try{
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            throw new Error("User not Found");
        }
        const isPasswordValid = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordValid) {
            throw new Error("Incorrect Password");
        }
        const token = generateToken(existingUser); // Generate a JWT token for the user
        return token; // Return the token to the client
    }
    catch (error) {
        console.error("Login Error", error.message);
        throw new Error("Invalid Credentials");
    }
}

module.exports = {
    login
};