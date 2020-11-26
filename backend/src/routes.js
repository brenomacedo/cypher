const router = require('express').Router()
const UserController = require('./database/controllers/UserController')

router.post('/user', UserController.createOrLogin)
router.get('/user/search', UserController.searchUser)

module.exports = router