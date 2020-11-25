const router = require('express').Router()
const UserController = require('./database/controllers/UserController')

router.post('/user', UserController.create)

module.exports = router