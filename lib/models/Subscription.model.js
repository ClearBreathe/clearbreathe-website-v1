const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const schema = new Schema({
  timestamp: {
    type: Date,
    required: true
  },
  email: {
    type: Number,
    required: true,
    match: EMAIL_REGEX
  },
});

module.exports = mongoose.model('Subscription', schema);
