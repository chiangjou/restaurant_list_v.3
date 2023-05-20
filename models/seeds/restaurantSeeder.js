const db = require('../../config/mongoose')
// 載入 Restaurant model
const Restaurant = require('../restaurant')

// 僅在非正式環境時, 使用 dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const restaurantList = require('.restaurant.json').results


db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log('restaurantSeeder done!')
      db.close()
    })
    .catch(error => console.log(error))
})