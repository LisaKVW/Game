const { User, Posting } = require('../db/schema')
const jwt = require('jsonwebtoken')
const {
    checkPassWord,
    generatePassword
} = require('../middleware/PasswordHandler')

//to find a user and his/her posts
const GetProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.user_id).select('_id name')
        const posts = await Posting.find({ user_id: req.params.user_id })
        res.send({ user, posts })
    } catch (error) {
        throw error
    }
}

//to create a new user
const CreateUser = async (req, res) => {
    try {
        const body = req.body
        const password_digest = await generatePassword(body.password)
        const user = new User({
            name: body.name,
            email: body.email,
            password_digest
        })
        user.save()
        res.send(user)
    } catch (error) {
        throw error
    }
}