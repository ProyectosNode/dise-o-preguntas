const express = require('express')
const router = express.Router()

//Rutas
router.get('/', function (req, res, next) {
    res.render('agregar')
})

router.post('/', function (req, res, next) {
    let a = req.body
    console.log(a)
    res.redirect('/')
})

module.exports = router