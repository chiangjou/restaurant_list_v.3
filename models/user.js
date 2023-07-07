const mongoose = require('mongoose')
const Schema = mongoose.Schema

userSchema = new Schema({
  name: {
    type: String,
    requied: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createAt: {
    type: Date,
    default: Date.now
  }
})
module.exports = mongoose.model('User', userSchema)