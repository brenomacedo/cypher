const router = require('express').Router()
const CommentController = require('./database/controllers/CommentController')
const PostController = require('./database/controllers/PostController')
const UserController = require('./database/controllers/UserController')

router.post('/user', UserController.createOrLogin)
router.get('/user/search', UserController.searchUser)
router.post('/post', PostController.createPost)
router.get('/post', PostController.getPosts)
router.post('/comment', CommentController.createComment)

module.exports = router