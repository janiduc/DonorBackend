const jwt = require('jsonwebtoken');
const secretkey = require('../configuration/jwtConfig')

function authenticateToken(req, res, next) {
    const authHeader = req.headers["Authorization"];
    if (!authHeader) {
        return res.status(401).json({ message: "Unauthorized: Missing Token1!" });
    }
    const [bearer, token] = authHeader.split(" ");
    if(bearer !== "Bearer" || !token) {
        return res.status(401).json({ message: "Unauthorized: Invalid Token Format" });
    }

    jwt.verify(token, secretkey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden: Invalid Token" });
        }
        req.user = user;
        next();
    })
}

module.exports = { authenticateToken };