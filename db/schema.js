const { model } = require('mongoose')
const UserModel = require('./models/User')
const PostModel = require('./models/Posting')
const CommentModel = require('./models/Comments')

const User = model('users', UserModel)
const Posting= model('posting', PostModel)
const Comment = model('comments', CommentModel)

module.exports = {
    User,
    Posting,
    Comment
}

//import all of our created Schemas and export them in one, modular file.