const express = require('express')
const router = express.Router()
const { list } = require('../models/sku')
/* GET home route. */
router.get('/', async (req, res, next) => {
  const [item, value] = Object.entries(req.query)[0]
  list(item, value).then((result) => res.json(result))
})

module.exports = router
