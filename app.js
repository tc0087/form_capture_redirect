const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.use('/', (req, res, next) => {
	console.log("this always runs")
	next()
})

app.use('/add_product', (req, res, next) => { 
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button></form')
})

app.use('/product', (req, res, next) => { 
	console.log(req.body)
	res.redirect('/')
})

app.use('/', (req, res, next) => {
	res.send('You sent a product title!')
})

const server = http.createServer(app)

server.listen(3000)