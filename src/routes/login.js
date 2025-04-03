const express = require("express");
const cors = require("cors");
const {login, refreshToken} = require("../controllers/login");

const router = express.Router();
router.use(cors());
router.post("/login", login); // POST request to /login endpoint
router.post("/refresh-token", refreshToken); // POST request to /refresh-token endpoint

module.exports = router; // Export the router for use in the main app