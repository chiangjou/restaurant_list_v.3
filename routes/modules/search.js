const express = require("express")
const router = express.Router()

const Restaurant = require("../../models/restaurant")


// router.get("/", (req, res) => {
//   const keywords = req.query.keyword

//   if (!keywords) {
//     res.redirect("/")
//   }
// })

// router.get("/", (req, res) => {
//   const userId = req.user._id
//   const keyword = req.query.keyword
//   const keywordLowerCase = keyword.toLocaleLowerCase().trim()

//   return Restaurant.find({ userId })
//     .lean()
//     .then(restaurants => {
//       const filteredRestaurants = restaurants.filter(restaurant => {
//         return restaurant.name.toLowerCase().includes(keywordLowerCase) || restaurant.category.toLowerCase().includes(keywordLowerCase)
//       })
//       if (filteredRestaurants.length) {
//         res.render("index", { restaurant: filteredRestaurants, keyword })
//       } else {
//         res.render("searchNoResult", { keyword })
//       }
//     })
//     .catch(error => console.log(error))
// })


// router.get("/", (req, res) => {
//   const userId = req.user._id
//   // const { keyword, sort } = req.query
//   const keyword = req.query.keyword
//   const searchSort = req.query.search-sort
//   const restaurantCategory = req.query.restaurant-category
//   const keywordLowerCase = req.query.keyword.toLowerCase().trim()

//   // 若 keyword 沒有輸入內容，重新導向 / 路由(根目錄)
//   if (!keyword) {
//     return res.redirect("/")
//   }

//   return Restaurant.find({ userId })
//     .lean()
//     .sort({ searchSort, restaurantCategory })
//     .then((restaurant) => {
//       const filterRestaurantData = restaurant.filter(
//         data =>
//           data.name.toLowerCase().includes(keywordLowerCase) || data.category.toLowerCase().includes(keywordLowerCase))

//       if (filterRestaurantData.length) {
//         res.render("index", { restaurant: filterRestaurantData, keyword })
//       } else {
//         res.render("searchNoResult", { keyword })
//       }
//     })
//     .catch(error => console.log(error))
// })

module.exports = router