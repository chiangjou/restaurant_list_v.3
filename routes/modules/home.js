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

module.exports = router