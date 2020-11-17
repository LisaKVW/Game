const { Posting, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
        const posts = await Posting.find().sort({ createdAt: -1 })
        res.send(posts)
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

const DeletePost = async (req, res) => {
    try {
        await Comment.deleteMany({ _id: req.params.post_id })
        await Posting.findOneAndDelete(
            { _id: req.params.post_id },
            { upsert: false, new: false }, //upsert must equal false when deleting
            (err, deletedPost) => {
                if (err) { console.log(err) }
                res.send(deletedPost)
            }
        )
    } catch (err) {
        throw err
    }
}

const UpdatePost = async (req, res) => {
    try {
        await Posting.findByIdAndUpdate(
            req.params.post_id,
            {
                ...req.body
            },
            { new: true, useFindAndModify: false }
        )
        res.send('updated')
    } catch (error) {
        throw error
    }
}

const AddPost = async (request, response) => {
    try {
        const addNew = await new Posting(request.body)
        addNew.save()
        return response.status(201).json({
            addNew,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

module.exports = {
    GetPosts,
    GetPostById,
    DeletePost,
    UpdatePost,
    AddPost
}



