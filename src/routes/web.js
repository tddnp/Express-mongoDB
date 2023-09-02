const express = require('express')
const router = express.Router()
const { getHomePage, getEjs } = require('../controllers/homeControllers')

router.get('/', getHomePage)
router.get('/ejs', getEjs)

module.exports = router