const admin = require('../../firebase/index')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    console.log(token)

    console.log('----')

    if(!token) {
        return res.status(401).json({ msg: 'An error ocurred', errors: ['Token was not provided!'] })
    }

    admin.auth().verifyIdToken(token).then(resp => {

        req.body.email = resp.email
        req.body.uuid = resp.uid

        console.log(resp.email)
        

        return next()
    }).catch(err => {
        return res.status(401).json({ msg: 'An error ocurred', errors: ['Unauthorized!'] })
    })
}