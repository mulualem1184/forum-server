const express = require('express');
const router = express.Router();
const authMiddleware=require('../Middleware/authMiddleware')
//  user controller
const {register,login,checkUser}= require('../Controller/userController')

// Route for registering a user
router.post("/register", register);

// Route for logging in a user
router.post('/login', login);


// Route for checking a user
router.get('/check', authMiddleware,checkUser);

// Export the router module
module.exports = router;
