const { Posting, Comment } = require('../db/schema')

const CreateComment = async (request, response) => {
    try {
        const addComment = await new Comment(request.body)
        addComment.save()
        return response.status(201).json({
            addComment,
        });
    } catch (error) {
        return response.status(500).json({ error: error.message })
    }
}

const RemoveComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.comment_id })
        await Posting.findOneAndUpdate(
            { _id: req.params.post_id },
            { $pull: { comments: req.params.comment_id } },
            { upsert: true, new: true },
            (err, updatedPost) => {
                if (err) { console.log(err) }
                res.send(updatedPost)
            }
        )
    } catch (err) {
        throw err
    }
}

const UpdateComment = async (req, res) => {
    try {
        await Comment.findByIdAndUpdate(
            req.params.comment_id,
            { ...req.body },
            { upsert: true, new: true },
            (err, d) => (err ? err : res.send(d))
        )
    } catch (error) {
        throw error
    }
}

const GetComments = async (req, res) => {
    try {
        const comments = await Comment.find().sort({ createdAt: -1 })
        res.send(comments)
    } catch (error) {
        throw error
    }
}

module.exports = {
    CreateComment,
    RemoveComment,
    UpdateComment,
    GetComments
}