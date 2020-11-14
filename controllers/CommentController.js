const { Posting, Comment } = require('../db/schema')

const CreateComment = async (req, res) => {
    console.log('CreateComment')
    try {
        const comment = new Comment({ ...req.body, user_id: req.params.user_id })
        comment.save()
        console.log(comment)
        await Posting.update(
            { _id: req.params.post_id },
            {
                $push: {
                    comments: comment
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

module.exports = {
    CreateComment,
    RemoveComment,
    UpdateComment
}