const jwt = require('jsonwebtoken');
//const secretkey = require('../configuration/jwtConfig')
const secretKey = 'your_secret_key'; // Replace with your own secret key

function authenticateToken(req, res, next) {
    //const authHeader = req.headers["Authorization"];
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing Token!" });
    }
    const [bearer, token] = authHeader.split(" ");
    if(bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized: Invalid Token Format" });
    }

    jwt.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden: Invalid Token" });
        }
        req.user = user;
        next();
    })
}

module.exports = { authenticateToken };