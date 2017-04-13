var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var parseRequests = bodyParser.json()
var pets = require('./pets')
var bootstrap = require('bootstrap')

app.use(parseRequests)

app.use(express.static('public'))

app.get('/pets', (req, res) => {
  res.json(pets)
})

app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
