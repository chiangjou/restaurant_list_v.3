// require package used in the project
const express = require('express')
const app = express()
const port = 3000

// routes setting
app.get('/', (req, res) => {
  res.send('This is my restaurant list built wit Express')
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})