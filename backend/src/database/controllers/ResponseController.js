const Yup = require('yup')
const Response = require('../models/Response')
const { RenderCreatedResponse } = require('../views/ResponseView')

module.exports = {
    createResponse(req, res) {
        const { content, commentId, userId } = req.body

        const data = { content, commentId, userId }

        const schema = Yup.object().shape({
            content: Yup.string().required('The content is required!'),
            commentId: Yup.string().required('The commentId is required!'),
            userId: Yup.string().required('The userId is required!')
        })

        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: 'An error ocurred', errors: err.errors })
        })

        Response.create(data).then(response => {
            return res.status(201).json(RenderCreatedResponse(response))
        }).catch(err => {
            return res.status(404).json({ msg: 'An error ocurred', errors: ['User not found'] })
        })
    }
}