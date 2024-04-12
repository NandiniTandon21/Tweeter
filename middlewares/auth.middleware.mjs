import { authenticate } from '../middleware/auth.middleware.mjs';
//const { authenticate } = require('../middleware/auth.middleware.js');
export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    const { default: authController } = await import('./auth.controller.js');
    const user = await authController.validateToken(token);

    if (!user) {
      return res.status(401).json({ msg: 'Token is not valid' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};