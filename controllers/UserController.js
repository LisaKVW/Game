const { User, Posting } = require('../db/schema')
const jwt = require('jsonwebtoken')
const {
    checkPassWord,
    generatePassword
} = require('../middleware/PasswordHandler')

const GetProfile = async (req, res) => {
    const user = await User.findById(req.params.user_id).select('_id name')
    const posts
}