module.exports = {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/twitter-db',
    options: {
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false,
       useCreateIndex: true,
    },
 };