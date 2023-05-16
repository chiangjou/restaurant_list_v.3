const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const Restaurant = require('./models/restaurant')
const restaurant = require('./models/restaurant')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection

db.on('error', () => {
  console.log('mongo error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

const port = 3000
const app = express()

app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))



// 編輯餐廳頁面
// 更新餐廳
// 刪除餐廳

// 瀏覽全部餐廳
app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurantsData => res.render('index', { restaurantsData }))
    .catch(error => console.log(error))
})

// 新增餐廳頁面
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

// 新增餐廳
app.post('/restaurants', (req, res) => {
  return Restaurant.create(req.body)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 瀏覽特定餐廳
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant_id = req.params.id
  return Restaurant.findById(restaurant_id)
  .lean()
  .then((restaurantData) => res.render('show', { restaurantData }))
  .catch(error => console.log(error))
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) || restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})