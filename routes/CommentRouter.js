
const Router = require('express').Router()
const CommentController = require('../controllers/CommentController')

Router.post(
    '/add', CommentController.CreateComment
)
Router.delete(
    '/:comment_id', CommentController.RemoveComment
)
Router.put(
    '/:comment_id', CommentController.UpdateComment
)

Router.get('/', CommentController.GetComments)

module.exports = Router

// POST - http://localhost:3003/api/comments/5faf22c03fde744aa2835c53/user/5facba9936e623532e44025e
// api/comments/post_id/user/user_id

// PUT  - http://localhost:3003/api/comments/5faf2901fb1a2b4da2d9f43a
//api/comments/comment_id

//http://localhost:3003/api/comments/5faf22c03fde744aa2835c53/remove/5faf2901fb1a2b4da2d9f43a
//api/comments/post_id/remove/comment_id

//MODNAY note can post comment via api/comments/post_id