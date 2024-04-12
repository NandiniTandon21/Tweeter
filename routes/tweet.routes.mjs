import express from 'express';
import * as tweetController from '../controllers/tweet.controller.mjs';
//import { authenticate } from '../middlewares/auth.middleware.js';
const { authenticate } = require('../middlewares/auth.middleware.mjs');

const router = express.Router();

router.get('/', authenticate, tweetController.getAllTweets);
router.get('/:id', authenticate, tweetController.getTweetById);
router.post('/', authenticate, tweetController.createTweet);
router.put('/:id', authenticate, tweetController.updateTweet);
router.delete('/:id', authenticate, tweetController.deleteTweet);

export default router;
