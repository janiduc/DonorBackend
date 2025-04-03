const crypto = require('crypto');

//const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a random secret key
const secretKey = 'your_secret_key'; // Replace with your own secret key

module.exports = {
    secretKey: secretKey // The secret key used for signing the JWT
    //expiresIn: '1h', // Token expiration time
};
