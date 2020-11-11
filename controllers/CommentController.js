const { Posting, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
    try {
        const comment = new Comment({ ...req.body, user_id: req.params.user_id })
        comment.save()
        await Posting.update(
            { _id: req.params.post_id },
            {
                $push: {
                    content: comment
                }
            }
        )
        res.send(comment)
    } catch (error) {
        throw error
    }
}


const RemoveComment = async (req, res) => {
    try {
        await Comment.deleteOne({ _id: req.params.comment_id })
        const updatedPost = await Posting.findByIdAndUpdate(
            req.params.post_id,
            { $pull: { content: { _id: req.params.content_id } } },
            { upsert: true, new: true }
        )
        res.send(updatedPost)
    } catch (error) {
        throw error
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

module.exports = {
    CreateComment,
    RemoveComment,
    UpdateComment
}