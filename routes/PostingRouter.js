const Router = require('express').Router()
const PostController = require('../controllers/PostController')

Router.get('/', PostController.GetPosts)
Router.get('/:post_id', PostController.GetPostById)
Router.post('/:user_id', PostController.CreatePost)
Router.put('/:post_id', PostController.UpdatePost)
Router.delete('/:post_id', PostController.DeletePost)

module.exports = Router

//post - insomia test: http://localhost:3003/api/posts/5facba9936e623532e44025e
//api/posts/user_id

//UPDATE (put)  http://localhost:3003/api/posts/5faf22c03fde744aa2835c53
//api/posts/post_id

//DELETE: http://localhost:3003/api/posts/5faf22c03fde744aa2835c53
//api/posts/post_id