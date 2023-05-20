// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Favorite model
const Favorite = require('../../models/favorite')

// 定義首頁路由，瀏覽所有餐廳
router.get('/', (req, res) => {
  Favorite.find()
    .lean()
    .sort({ _id: 'asc'})
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router