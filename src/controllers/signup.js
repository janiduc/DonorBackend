const userService = require('../services/signup');

async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({user: user, status: "success", message: 'User created successfully'});
    } catch (error) {
        console.log(error);
        res.status(400).json({status:"error", message: error.message});
    }
}

module.exports = {createUser};  // Export the createUser function