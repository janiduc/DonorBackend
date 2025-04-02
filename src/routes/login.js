const express = require("express");
const cors = require("cors");
const {login} = require("../controllers/login");

const router = express.Router();
router.use(cors());
router.post("/login", login); // POST request to /login endpoint
module.exports = router; // Export the router for use in the main app