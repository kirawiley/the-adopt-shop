var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var parseRequests = bodyParser.json()
var pets = require('./pets')
var findPets = require('./findPets')

app.use(parseRequests)

app.use(express.static('public'))

app.get('/pets', (req, res) => {
  var queryParams = req.query
  var type = queryParams.type
  var breed = queryParams.breed
  var gender = queryParams.gender

  res.json(findPets(type, gender, pets))
})


app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
