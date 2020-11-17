const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const CommentRouter = require('./CommentRouter')
const PostingRouter = require('./PostingRouter')

Router.use('/users', UserRouter)
Router.use('/comments', CommentRouter)
Router.use('/posts', PostingRouter)

module.exports = Router

