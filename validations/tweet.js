import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const tweetSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model('Tweet', tweetSchema);

export const createTweet = async (req, res) => {
  try {
    const tweet = new Tweet({
      userId: req.user._id,
      text: req.body.text,
    });

    await tweet.save();

    res.status(201).json({
      message: 'Tweet created successfully',
      tweet,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error creating tweet',
      error,
    });
  }
};

export const getTimeline = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    const tweets = await Tweet.find({
      userId: {
        $in: user.following,
      },
    })
      .sort({ createdAt: -1 })
      .populate('userId', 'username');

    res.status(200).json({
      message: 'Timeline fetched successfully',
      tweets,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error fetching timeline',
      error,
    });
  }
};