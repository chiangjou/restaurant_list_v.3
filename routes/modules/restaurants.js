const express = require('express')
const router = express.Router()
const Favorite = require('../../models/favorite')

// Handle New page and Add
// url is same as get details, need to be put in front of get details
router.get('/new', (req, res) => {
  res.render('new')
})
router.post('/', (req, res) => {
  const data = req.body
  console.log(data)
  return Favorite.create(data)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// Handle Show
router.get('/:restaurant_id', (req, res) => {
  const id = req.params.restaurant_id
  return Favorite.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// Handle Edit
router.get('/:id/edit', (req, res) => {
  const id = req.params.id
  return Favorite.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})
router.put('/:id', (req, res) => {
  const id = req.params.id
  const data = req.body
  return Favorite.findByIdAndUpdate(id, data)
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// Handle delete
router.delete('/:id', (req, res) => {
  const id = req.params.id
  return Favorite.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router