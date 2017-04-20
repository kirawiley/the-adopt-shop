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

  res.json(findPets(type, breed, gender, pets))
})

app.post('/pets', (req, res) => {
  var newPet = req.body
  pets.push(newPet)
  res.sendStatus(201)
})

app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
