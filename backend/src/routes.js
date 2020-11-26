const router = require('express').Router()
const UserController = require('./database/controllers/UserController')

router.post('/user', UserController.createOrLogin)

module.exports = router