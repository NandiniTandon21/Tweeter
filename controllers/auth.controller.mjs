const { User } = require('../models/index.mjs');
const { validateRegistration, validateLogin } = require('../utils/validation');

exports.register = async (req, res) => {
  const { error } = validateRegistration(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = new User({ ...req.body });
  try {
    const savedUser = await user.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  const { error } = validateLogin(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    const validate = await user.isValidPassword(password);
    if (!validate) {
      return res.status(400).json({ message: 'Invalid email or password.' });
    }
    res.json({ user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};