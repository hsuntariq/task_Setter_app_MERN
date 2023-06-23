const express = require('express');
const { registerUser, loginUser, getUser } = require('../controllers/userController');
const router = express.Router();


router.post('/login',loginUser)
router.post('/register',registerUser)
router.get('/getUser',getUser)
module.exports = router;