const router = require('express').Router()
const CommentController = require('./database/controllers/CommentController')
const PostController = require('./database/controllers/PostController')
const RequestController = require('./database/controllers/RequestController')
const ResponseController = require('./database/controllers/ResponseController')
const UserController = require('./database/controllers/UserController')
const auth = require('./database/middlewares/auth')

router.post('/user', UserController.createOrLogin)
router.get('/user/search', UserController.searchUser)
router.get('/user/view/:id', UserController.viewUser)
router.post('/post', PostController.createPost)
router.get('/post', PostController.getPosts)
router.post('/comment', CommentController.createComment)
router.post('/response', ResponseController.createResponse)
router.post('/request', RequestController.createRequest)

module.exports = router