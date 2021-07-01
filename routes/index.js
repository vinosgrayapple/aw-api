const express = require('express')
const router = express.Router()
const usersRouter = require('./users')
const skuRouter = require('./sku')
const mainRouter = require('./main')

router.use('/', mainRouter)
router.use('/users', usersRouter)
router.use('/sku', skuRouter)

module.exports = router
