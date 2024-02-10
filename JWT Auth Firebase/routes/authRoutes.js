const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const  decodeTokenMiddleware = require('../middleware/verifyToken');

router.post('/signup', userController.signup);
router.post('/signin', userController.signin);
router.post('/verify-email', userController.verifyEmail);
router.post('/forget-password', userController.forgetPassword);
router.get('/protected', decodeTokenMiddleware,userController.protected);

module.exports = router;
