// Include express from node_modules
const express = require('express')
// require express-handlebars here
const exphbs = require('express-handlebars')
// Include body-parser
const bodyParser = require('body-parser')
// Include method-override
const methodOverride = require('method-override')
// Define server related variables
const port = 3000

// Include router
const routes = require('./routes')
// require mongoose
require('./config/mongoose')

const app = express()

// setting template engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }))
app.set("view engine", "handlebars")

// setting static engine
app.use(express.static('public'))
// Ask every request use body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// Ask every request use methodOverride
app.use(methodOverride('_method'))
// Direct request to router
app.use(routes)

// Start and Listen the server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})