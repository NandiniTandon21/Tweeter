const User = require('../models/user.model.mjs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const { createUser, loginUser } = require('../controllers/user.controller.js');
import { createUser, loginUser } from './user.controller.mjs';

// Register a new user
export const register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Login a user
export const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isMatch = await user.comparePassword(req.body.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(200).json({ message: 'Logged in successfully', user, token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};