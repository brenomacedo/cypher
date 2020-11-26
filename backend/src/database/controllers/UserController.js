const User = require('../models/User')
const Yup = require('yup')
const { RenderUser } = require('../views/UserView')
const { Sequelize, Op } = require('sequelize')

module.exports = {
    createOrLogin(req, res) {
        const { name, email, avatar: rawAvatar } = req.body

        const data = { name, email, rawAvatar }
        const schema = Yup.object().shape({
            name: Yup.string().required('The name is required!'),
            email: Yup.string().required('The email is required!'),
            rawAvatar: Yup.string('Invalid avatar type!')
        })
        
        schema.validate(data, {
            abortEarly: false
        }).catch(err => {
            return res.status(422).json({ msg: 'An error occurred', errors: err.errors })
        })

        User.findOne({
            where: {
                email
            }
        }).then(user => {

            // verify authentication

            if(user) {
                return res.status(200).json(RenderUser(user)) 
            }
        }).catch(() => {
            return res.status(500).json({ msg: 'An error ocurred', errors: ['Unknown error'] })
        })
        
        const banner = 'https://firebasestorage.googleapis.com/v0/b/cypher-a2544.appspot.com/o/banner%2FdefaultBanner.png?alt=media&token=e95739bf-a621-468e-a60d-259f235e3f8b'

        let avatar

        if(!rawAvatar) {
            avatar = 'https://firebasestorage.googleapis.com/v0/b/cypher-a2544.appspot.com/o/avatar%2FdefaultAvatar.png?alt=media&token=a004fcb9-0bfa-43aa-aadd-a5acc77674c4'
        } else {
            avatar = rawAvatar
        }

        User.create({
            name, email, avatar, avatar, banner, uuid: '123'
        }).then(user => {
            return res.status(201).json(RenderUser(user))
        }).catch(err => {
            return res.status(409).json({ msg: 'An error ocurred!', errors: err })
        })
    },

    searchUser(req, res) {
        const { search } = req.query

        User.findAll({
            where: {
                [Op.or]: {
                    name: {
                        [Op.like]: `%${search}%`
                    },
                    uuid: `7e34fbb7-9573-4386-983b-d1d871bd11ce`
                }
            }
        }).then(user => {
            return res.status(200).json(user)
        }).catch(err => {
            return res.status(500).json(err)
        })
    }
}