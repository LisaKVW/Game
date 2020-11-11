const { model } = require('mongoose')
const UserModel = require('./models/User')
const PostModel = require('./models/Posting')
const CommentModel = require('./models/Comments')

const User = model('users', UserModel)
const Post = model('posting', PostModel)
const Comment = model('comments', CommentModel)

module.exports = {
    User,
    Post,
    Comment
}

//import all of our created Schemas and export them in one, modular file.