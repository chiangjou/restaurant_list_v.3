const express = require('express')
const router = express.Router()
const Favorite = require('../../models/favorite')

// Get all data from Favorite model
router.get('/', (req, res) => {
  Favorite.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.log(error))
})

module.exports = router