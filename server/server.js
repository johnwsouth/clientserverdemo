const express = require('express')
const cors = require('cors');
const server = express();
server.use(cors())

const names = [
  {
    "name": "John"
  },
  {
    "name": "Shane"
  },
  {
    "name": "Saria"
  }
]

const favFoods = [
  {
    "age": "2",
    "food": "macNcheese"
  },
  {
    "age": "5",
    "food": "Milk"
  },
  {
    "age": "2",
    "food": "macNcheese"
  }
]

server.get('/favfoods', function (request, response) {
  response.send(favFoods)
})

server.get('/names', (request, response) => {
  response.send(names)
})

server.listen(3001, function(){
  console.log('server started bruh')
})
