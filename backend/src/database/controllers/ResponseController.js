const Yup = require('yup')
const Response = require('../models/Response')

module.exports = {
    createResponse(req, res) {
        const { content, commentId } = req.body

        const data = { content, commentId }

        const schema = Yup.object().shape({
            content: Yup.string().required('The content is required!'),
            commentId: Yup.string().required('The commentId is required!')
        })

        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: 'An error ocurred', errors: err.errors })
        })

        Response.create(data).then(response => {
            return res.status(201).json(response)
        }).catch(err => {
            return res.status(404).json({ msg: 'An error ocurred', errors: err })
        })
    }
}