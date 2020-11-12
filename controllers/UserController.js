const { User, Posting } = require('../db/schema')
const jwt = require('jsonwebtoken')
const {
    checkPassword,
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
        res.json({ msg: error.message })
    }
}

//user who has profile - can sign in again
const SignInUser = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email }) // find user via email
        if (
            user &&
            (await checkPassword(req.body.password, user.password_digest)) // password a match of what is typed (http) and indb
        ) {
            const payload = {
                _id: user._id,
                name: user.name
            }
            res.locals.payload = payload
            return next()
        }
        res.status(401).send({ msg: 'Unauthorized' })
    } catch (error) {
        throw error
    }
}

const RefreshSession = (req, res) => {
    try {
        const token = res.locals.token
        res.send({ user: jwt.decode(token), token: res.locals.token })
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetProfile,
    CreateUser,
    SignInUser,
    RefreshSession
}
