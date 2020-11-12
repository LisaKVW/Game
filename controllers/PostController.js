const { Posting, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
        const { page, limit } = req.query
        const offset =
            page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
        const posts = await Posting.find()
            .limit(parseInt(limit))
            .skip(offset)
            .sort({ createdAt: -1 }) 
    } catch (error) {                   
        throw error
    }
}

const GetPostById = async (req, res) => {
    try {
        const post = await Posting.findById(req.params.post_id).populate([
            {
                model: 'users',
                path: 'user_id',
                select: '_id name'
            },
            {
                path: 'comments',
                populate: {
                    path: 'user_id',
                    model: 'users',
                    select: '_id name'
                }
            }
        ])
        res.send(post)
    } catch (error) {
        throw error
    }
}

const CreatePost = async (req, res) => {
    try {
        const newPost = new Posting({ ...req.body, user_id: req.params.user_id })
        newPost.save()
        res.send(newPost)
    } catch (error) {
        throw error
    }
}

const DeletePost = async (req, res) => {
    try {
        await Comment.deleteMany({ _id: { $in: post.comments } })
        await Posting.findByIdAndDelete(req.params.post_id)
        res.send({ msg: 'Post deleted' })
    } catch (error) {
        throw error
    }
}

const UpdatePost = async (req, res) => {
    try {
        await Posting.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false },
            (err, (d) => (err ? err : res.send(d)))
        )
    } catch (error) {
        throw error
    }
}

module.exports = {
    GetPosts,
    GetPostById,
    CreatePost,
    DeletePost,
    UpdatePost
}
