const port = 3003 //caso esteja usando na net mudar a porta para 80

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
	console.log(`BACKEND is running on port ${port} .`)
})

