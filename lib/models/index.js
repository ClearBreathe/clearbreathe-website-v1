const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;

mongoose.connect(config.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB.'))
  .catch((err) => { throw err; });

module.exports = {
  Subscription: require('./Subscription.model'),
};
