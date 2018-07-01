const mongoose = require('mongoose');
const { Schema } = mongoose;

// Create Schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
 },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  googleId: String,
  facebookId: String

});

module.exports = User = mongoose.model('users', userSchema);
