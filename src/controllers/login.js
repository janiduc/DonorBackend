const authservice = require('../services/login');

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const token = await authservice.login(email, password);
        res.status(200).json({ status: "success", token });
    } catch (error) {
        res.status(401).json({ status: "error", message: "Invalid Credentials" });
    }
}

async function refreshToken(req, res) {
    try {
        const { token } = req.body;
        const newToken = await authservice.refreshToken(token);
        res.status(200).json({ status: "success", newToken });
    } catch (error) {
        res.status(401).json({ status: "error", message: "Invalid Token" });
    }
}

module.exports = {
    login,
    refreshToken
};
