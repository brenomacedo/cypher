const Yup = require('yup')
const Post = require('../models/Post')
const User = require('../models/User')

module.exports = {
    createPost(req, res) {
        const { type, description, url, userId } = req.body

        const data = { type, description, userId, url }

        const shape = {
            type: Yup.string().required('The post type is required!')
                .equals(['TEXT', 'IMAGE', 'VIDEO'], 'Invalid post type!'),
            description: Yup.string().required('The description is required!'),
            userId: Yup.number().required('The userId is required!')
        }

        if(type === "VIDEO" || type === "IMAGE") {
            shape.url = Yup.string().url('Url format is invalid!')
                .required('The image/video url is required!')
        }

        const schema = Yup.object().shape(shape)

        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: 'An error ocurred', errors: err.errors })
        })

        Post.create(data).then(post => {
            return res.status(201).json(post)
        }).catch(err => {
            return res.status(500).json({ msg: 'An error ocurred', errors: ['Unknown error'] })
        })
    },

    getPosts(req, res) {
        Post.findAll({
            include: [{all: true, nested: true}]
        }).then(resp => {
            return res.status(200).json(resp)
        }).catch(err => {
            return res.status(500).json({ msg: "An error ocurred", errors: ['Unknown error'] })
        })
    }
}