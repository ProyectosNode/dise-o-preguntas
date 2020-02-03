const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const siteRouter = require('./routes/siteRouter')
const { config } = require('./config')

const PORT = config.port

// App
const app = express()

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// View engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Rutas
app.use('/', siteRouter)

// Servidor
const server = app.listen(PORT, function() {
    console.log(`Servidor lanzado en http://localhost:${server.address().port}`)
})