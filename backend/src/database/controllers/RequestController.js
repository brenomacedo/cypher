const Yup = require('yup')
const Request = require('../models/Request')
const User = require('../models/User')
const { RenderRequest } = require('../views/RequestView')

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
                    
                    User.findOne({
                        where: {
                            id: from
                        }
                    }).then(user1 => {
                        User.findOne({
                            where: {
                                id: to
                            }
                        }).then(user2 => {
                            user2.addFriend(user1).then(() => {
                                user1.addFriend(user2).then(() => {
                                    Request.create(data).then(() => {
                                        return res.status(201).json({ msg: "Friendship made!" })
                                    }).catch(err => {
                                        return res.status(409).json({ msg: "An error ocurred", errors: ['Unknown Error!'] })
                                    })
                                }).catch(err => res.status(409).json({ msg: "An error ocurred", errors: ['Unknown Error!'] }))
                            })
                        }).catch(err => { return res.json({ msg: "An error ocurred", errors: ['Unknown Error!'] }) })
                    }).catch(err => { return res.json({ msg: "An error ocurred", errors: ['Unknown Error!'] }) })
                    return
                }
    
                Request.create(data).then(request => {
                    return res.status(201).json(RenderRequest(request))
                }).catch(err => {
                    return res.status(409).json({ msg: "An error ocurred", errors: ['Unknown Error!'] })
                })
            })
        })
    }
}