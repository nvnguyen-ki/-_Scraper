const {User} = require('../models')
module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.JSON())
        } catch (err) {
            res.status(400).send({
                error:'Email has already been used.'
            })
        }
    }
}