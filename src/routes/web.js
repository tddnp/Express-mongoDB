const express = require('express')
const router = express.Router()
const { getDuyCheo, getListUser, postCreateNewUser, getCreateNewUser } = require('../controllers/homeControllers')

router.get('/', getDuyCheo)
router.get('/listUser', getListUser)
router.get('/create-user', getCreateNewUser)
router.post('/create-user', postCreateNewUser)

module.exports = router