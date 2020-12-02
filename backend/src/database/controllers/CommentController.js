const Comment = require('../models/Comment')
const Yup = require('yup')
const { RenderCreatedComment } = require('../views/CommentView')

module.exports = {
    createComment(req, res) {
        const { content, postId, userId } = req.body

        const data = { content, postId, userId }

        const schema = Yup.object().shape({
            content: Yup.string().required('The content is required!'),
            postId: Yup.string().required('The postId is required!'),
            userId: Yup.string().required('The userId is required!')
        })

        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: 'An error ocurred', errors: err.errors })
        })

        Comment.create(data).then(comment => {
            return res.status(201).json(RenderCreatedComment(comment))
        }).catch(err => {
            return res.status(404).json({ msg: 'An error ocurred', errors: ['User not found'] })
        })
    }
}