const express = require('express')
const router = express.Router()
/* GET home route. */
router.get('/', async (req, res, next) => {
  res.json({ main: 'page' })
})

module.exports = router
