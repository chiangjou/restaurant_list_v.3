const express = require('express')
const router = express.Router()
const Favorite = require('../../models/favorite')

// 進入新增餐廳頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增餐廳
router.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  return Favorite.create(data)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 瀏覽一家餐廳的詳細資訊
router.get('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return Favorite.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// 進入編輯頁面
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Favorite.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// 修改餐廳
router.put('/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  return Favorite.findByIdAndUpdate(id, data)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// 刪除餐廳
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Favorite.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router