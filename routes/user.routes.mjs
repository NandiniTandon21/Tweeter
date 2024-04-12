//const express = require('express');
const router = express.Router();
const tweetController = require('../controllers/tweet.controller.mjs');
const { authenticate } = require('../middlewares/auth.middleware.mjs');
import express from 'express';
import { createUser, loginUser } from '../controllers/user.controller.mjs';

router.post('/', tweetController.createTweet);
router.get('/:userId', tweetController.getTimeline);

export default router;