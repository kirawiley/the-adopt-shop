var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var parseRequests = bodyParser.json()
var pets = require('./pets').pets

console.log(pets)

app.use(parseRequests)

app.use(express.static('public'))

app.listen(1996, () => {
  console.log('Listening on port 1996!')
})
