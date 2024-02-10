const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const signup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during signup:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const accessToken = jwt.sign({ username: user.username }, 'sakthi123', { expiresIn: '1h' });

    res.status(200).json({ accessToken });
  } catch (error) {
    console.error('Error during login:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getProtectedData = (req, res) => {
  res.json({ message: 'Protected route accessed successfully', user: req.user });
};

module.exports = {
  signup,
  login,
  getProtectedData
};
