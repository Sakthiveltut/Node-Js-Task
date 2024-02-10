const userModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

class UserController {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
      await userModel.createUserWithEmailAndPassword(email, password);
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async signin(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userModel.signInWithEmailAndPassword(email, password);

      // Generate an access token
      const accessToken = jwt.sign({ uid: user.uid, email: user.email }, 'sakthi123', { expiresIn: '1h' });

      res.json({ user, accessToken });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async verifyEmail(req, res) {
    try {
      await userModel.sendEmailVerification();
      res.status(200).json({ status: 'Email Verification Sent!' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async forgetPassword(req, res) {
    try {
      const { email } = req.body;
      await userModel.sendPasswordResetEmail(email);
      res.status(200).json({ status: 'Password Reset Email Sent' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async protected(req,res){
    res.json({ user: req.user });
  }
}

module.exports = new UserController();
