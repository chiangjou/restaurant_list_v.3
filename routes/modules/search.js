const express = require('express')
const router = express.Router()
const Favorite = require('../../models/favorite')

router.get('/', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()
  if (!keyword) {
    return res.redirect('/')
  }

  return Favorite.find()
    .lean()
    .then((restaurant) => {
      const filterRestaurantData = restaurant.filter((data) => {
        return data.name.toLowerCase().includes(keyword.toLowerCase().trim()) || data.category.toLowerCase().includes(keyword.toLowerCase().trim())
      })
      res.render('index', { restaurant: filterRestaurantData, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router