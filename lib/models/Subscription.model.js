const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const schema = new Schema({
  timestamp: {
    type: Date,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    dropDups: true,
    match: EMAIL_REGEX
  },
});

schema.plugin(require('mongoose-plugin-drop-duplicates'));

module.exports = mongoose.model('Subscription', schema);
