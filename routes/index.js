const express = require('express')
const router = express.router()

const booksRoutes = require('./books')

router.use('/books', booksRoutes)

module.exports = router;