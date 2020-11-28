const User = require('../models/User')
const { RenderUser, RenderUsers } = require('../views/UserView')
const { Op } = require('sequelize')

module.exports = {
    createOrLogin(req, res) {
        const { email, uuid } = req.body

        User.findOne({
            where: {
                email
            }
        }).then(user => {

            if(user) {
                return res.status(200).json(RenderUser(user)) 
            }
        }).catch(() => {
            return res.status(500).json({ msg: 'An error ocurred', errors: ['Unknown error'] })
        })
        
        const banner = 'https://firebasestorage.googleapis.com/v0/b/cypher-a2544.appspot.com/o/banner%2FdefaultBanner.png?alt=media&token=e95739bf-a621-468e-a60d-259f235e3f8b'
        
        const avatar = 'https://firebasestorage.googleapis.com/v0/b/cypher-a2544.appspot.com/o/avatar%2FdefaultAvatar.png?alt=media&token=a004fcb9-0bfa-43aa-aadd-a5acc77674c4'

        const name = email.split('@')[0]

        User.create({
            name, email, avatar, banner, uuid
        }).then(user => {
            return res.status(201).json(RenderUser(user))
        }).catch(err => {
            return res.status(500).json({ msg: 'An error ocurred!', errors: ['Unknown error'] })
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
                    uuid: search
                }
            },
            include: ['post', 'request', 'friends']
        }).then(users => {
            return res.status(200).json(users)
        }).catch(err => {
            return res.status(500).json(err)
        })
    },

    viewUser(req, res) {
        const { uuid } = req.params.id

        User.findOne({
            where: { uuid },
        }).then(user => {
            return res.status(200).json(RenderUser(user))
        }).catch(err => {
            return res.status(500).json({ msg: "An error ocurred", errors: ["Unknown error"] })
        })
    }
}