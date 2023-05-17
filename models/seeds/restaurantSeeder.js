const db = require('../../config/mongoose')
const Restaurant = require('../restaurant')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const restaurantList = require('.restaurant.json').results

db.on('error', () => {
  console.log('MongoDB error!')
})

db.once('open', () => {
  console.log('MongoDB connected!')

  Restaurant.create(restaurantList)
    .then(() => {
      console.log('restaurantSeeder done!')
      db.close()
    })
    .catch(error => console.log(error))
})