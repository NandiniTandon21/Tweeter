const Tweet = require('../models/tweet.model.mjs');

exports.create = (req, res) => {
  const tweet = new Tweet(req.body);
  tweet.save((err, data) => {
    if (err) {
      return res.status(500).json({
        message: 'Error while posting tweet',
        error: err.message,
      });
    }
    res.status(201).json({
      message: 'Tweet successfully posted',
      tweetId: data._id,
    });
  });
};

exports.findAll = (req, res) => {
  Tweet.find()
    .populate('userId', 'username')
    .exec((err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error while fetching timeline',
          error: err.message,
        });
      }
      res.json(data);
    });
};

exports.findOne = (req, res) => {
  Tweet.findById(req.params.tweetId)
    .populate('userId', 'username')
    .exec((err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error while fetching tweet',
          error: err.message,
        });
      }
      res.json({ message: 'Tweet fetched successfully', tweet: data });
    });
};

exports.update = (req, res) => {
  Tweet.findByIdAndUpdate(req.params.tweetId, req.body, { new: true })
    .populate('userId', 'username')
    .exec((err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error while updating tweet',
          error: err.message,
        });
      }
      res.json({ message: 'Tweet updated successfully', tweet: data });
    });
};

exports.delete = (req, res) => {
  Tweet.findByIdAndDelete(req.params.tweetId)
    .exec((err, data) => {
      if (err) {
        return res.status(500).json({
          message: 'Error while deleting tweet',
          error: err.message,
        });
      }
      res.json({ message: 'Tweet deleted successfully' });
    });
};