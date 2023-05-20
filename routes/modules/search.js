const express = require('express')
const router = express.Router()
const Favorite = require('../../models/favorite')

router.get('/', (req, res) => {
  // sort 被賦值為 dropdown box 選擇到的元素的 value
  const { keyword, sort } = req.query
  const keywordLowerCase = req.query.keyword.toLowerCase().trim()

  // 若 keyword 沒有輸入內容，重新導向 / 路由(根目錄)
  if (!keyword) {
    return res.redirect('/')
  }

  return Favorite.find()
    .lean()
    .sort(sort)
    .then((restaurant) => {
      const filterRestaurantData = restaurant.filter(
        data =>
          data.name.toLowerCase().includes(keywordLowerCase) || data.category.toLowerCase().includes(keywordLowerCase))

      if (filterRestaurantData.length) {
        res.render('index', { restaurant: filterRestaurantData, keyword })
      } else {
        res.render('searchNoResult', { keyword })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router