const mongoose = require('mongoose');
const config = require('../config');

mongoose.Promise = Promise;

module.exports = {
  Subscription: require('./Subscription.model'),
};
