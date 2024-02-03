const express = require('express');
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/protected', verifyToken, userController.getProtectedData);

module.exports = router;
