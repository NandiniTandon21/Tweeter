const mongoose = require('mongoose');

const dbConfig = {
  url: process.env.MONGODB_URI,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
};

mongoose.connect(dbConfig.url, dbConfig.options)
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));