var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var parseRequests = bodyParser.json()
var pets = require('./pets')
var findPets = require('./findPets')
var knex = require('knex')

var database = knex({
  client: 'pg',
  connection: {
    user: 'occs',
    database: 'pets'
  }
})

app.use(parseRequests)

app.use(express.static('public'))

app.get('/pets', (req, res) => {
  var queryParams = req.query
  var type = queryParams.type
  var breed = queryParams.breed
  var gender = queryParams.gender

  database
    .select(findPets(type, breed, gender, database))
    .from('pets')
    .then((pets) => {
      res.json(pets)
    })
})

app.post('/pets', (req, res) => {
  database
    .insert(req.body)
    .into('pets')
})

app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
