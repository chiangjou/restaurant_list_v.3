// Include mongoose and connect to database under recommend method
const mongoose = require('mongoose')
// Include dotenv only in informal environment
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// access connection
const db = mongoose.connection
// deviate
db.on('error', () => {
  console.log('MongoDB error!')
})
// success
db.once('open', () => {
  console.log('MongoDB connected!')
})

module.exports = db