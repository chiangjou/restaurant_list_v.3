const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

// 首頁路由，瀏覽所有餐廳
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .sort({ _id: 'asc' })
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

// 搜尋餐廳
router.get('/search', (req, res) => {
  const userId = req.user._id
  const keyword = req.query.keyword
  const keywordLowerCase = keyword.toLowerCase().trim()

  return Restaurant.find({ userId })
    .lean()
    .then(restaurants => {
      const filteredRestaurants = restaurants.filter(restaurant => {
        return restaurant.name.toLowerCase().includes(keywordLowerCase) || restaurant.category.toLowerCase().includes(keywordLowerCase)
      })

      if (filteredRestaurants.length) {
        res.render('index', { restaurants: filteredRestaurants, keyword: keyword })
      } else {
        res.render('searchNoResult', { keyword })
      }
    })
})

module.exports = router