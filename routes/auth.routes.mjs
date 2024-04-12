import express from 'express';
const { authenticate } = require('../middlewares/auth.middleware.mjs');
import * as authController from '../controllers/auth.controller.mjs';
import * as userController from '../controllers/user.controller.mjs';
import * as tweetController from '../controllers/tweet.controller.mjs';
import * as roleController from '../controllers/role.controller.mjs';
//import { authenticate } from '../middlewares/auth.middleware.mjs';


const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/users', authenticate, userController.getAllUsers);
router.get('/users/:id', authenticate, userController.getUserById);
router.post('/users', authenticate, userController.createUser);
router.put('/users/:id', authenticate, userController.updateUser);
router.delete('/users/:id', authenticate, userController.deleteUser);

router.get('/tweets', authenticate, tweetController.getAllTweets);
router.get('/tweets/:id', authenticate, tweetController.getTweetById);
router.post('/tweets', authenticate, tweetController.createTweet);
router.put('/tweets/:id', authenticate, tweetController.updateTweet);
router.delete('/tweets/:id', authenticate, tweetController.deleteTweet);

router.get('/roles', authenticate, roleController.getAllRoles);
router.get('/roles/:id', authenticate, roleController.getRoleById);
router.post('/roles', authenticate, roleController.createRole);
router.put('/roles/:id', authenticate, roleController.updateRole);
router.delete('/roles/:id', authenticate, roleController.deleteRole);

export default router;