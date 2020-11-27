const Yup = require('yup')
const Request = require('../models/Request')

module.exports = {
    createRequest(req, res) {
        const { from, to } = req.body
        const data = { from, to }

        const schema = Yup.object().shape({
            from: Yup.number().required('The "from" attribute is required!'),
            to: Yup.number().required('The "to" attribute is required!')
        })

        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: "An error ocurred", errors: err.errors })
        })

        Request.findOne({
            where: data
        }).then(request => {
            if(request) {
                return res.status(409).json({ msg: "An error ocurred", errors: ['This request was already sent!'] })
            }

            Request.findOne({
                where: {
                    from: to,
                    to: from
                }
            }).then(request => {
                if(request) {
                    // CREATE FRIENDS
                    return res.status(409).json({ msg: "make friends!" })
                }
    
                Request.create(data).then(request => {
                    return res.status(201).json(request)
                }).catch(err => {
                    return res.status(409).json({ msg: "An error ocurred", errors: ['Unknown Error!'] })
                })
            })
        })
    }
}