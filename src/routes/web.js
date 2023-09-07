const express = require('express')
const router = express.Router()
const { getDuyCheo, getListUser, postCreateNewUser, getCreateNewUser, getUpdatePage, postUpdatePage, getDeletePage, postDeletePage } = require('../controllers/homeControllers')

//homepage
router.get('/', getDuyCheo)
//manage user
router.get('/listUser', getListUser)
router.get('/create-user', getCreateNewUser)
router.post('/create-user', postCreateNewUser)
router.get('/edit-user/:id', getUpdatePage)
router.post('/edit-user', postUpdatePage)
router.get('/delete-user/:id', getDeletePage)
router.post('/delete-user', postDeletePage)

module.exports = router