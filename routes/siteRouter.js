const express = require('express')
const router = express.Router()

// Ruta de acceso
router.get('/', function (req, res, next) {
    res.render('mostrar')
})

router.get('/add', function (req, res, next) {
    res.render('agregar')
})

router.post('/add', function (req, res, next) {
    res.redirect('/')
})

module.exports = router