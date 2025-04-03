const jwt = require('jsonwebtoken');
//const { secretKey } = require('../configuration/jwtConfig'); // Import the secret key from the configuration
const secretKey = 'your_secret_key'; // Replace with your own secret key

function generateToken(user) {
    const payload = {
        id: user._id,
        email: user.email,
        role: user.role
    };
    // Create a JWT token with user information and expiration time
    return jwt.sign( payload, secretKey, { expiresIn: '1h' });
};

module.exports = {
    generateToken
};