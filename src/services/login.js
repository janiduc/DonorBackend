const bcrypt = require('bcrypt');
const User = require('../models/user');
const {generateToken} = require('../utils/jwtUtils'); // Import the generateToken function
const { verify } = require('crypto');
const { verifyToken } = require('../utils/authMiddleware');

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

async function refreshToken(oldToken){
    try{
        const decordedToken = verifyToken(oldToken); // Verify the old token
        const user = User.findById(decordedToken._id);
        if (!user) {
            throw new Error("User not Found");
        }
        const newToken = generateToken(user); // Generate a new JWT token for the user
        return newToken; // Return the new token to the client
    }
    catch (error) {
        console.error("Refresh Token Error", error.message);
        throw new Error("Invalid Token");
    }
}

module.exports = {
    login,
    refreshToken
};