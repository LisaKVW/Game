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
        await Comment.deleteMany({ _id: req.params.comment_id })
        await Posting.findOneAndDelete(
            { _id: req.params.comment_id },
            { upsert: false, new: false }, //upsert must equal false when deleting
            (err, removeComment) => {
                if (err) { console.log(err) }
                res.send(removeComment)
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