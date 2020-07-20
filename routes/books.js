const express = require('express')
const router = express.router()

const { list } = require('../controllers')

//api/books
router.get('/', book.list)

//POSt api/books
router.post('/', book.add)

//DELETE api/books/_id
router.post('/:_id', book.remove)

module.exports = router;