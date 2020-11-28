const admin = require('../../firebase/index')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({ msg: 'An error ocurred', errors: ['Token was not provided!'] })
    }

    admin.auth().verifyIdToken(token).then(resp => {

        req.body.email = resp.email

        return next()
    }).catch(err => {
        return res.status(401).json({ msg: 'An error ocurred', errors: ['Unauthorized!'] })
    })
}