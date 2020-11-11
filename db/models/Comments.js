const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        comment: {
            type: String,
            required: true
        },
        posts_id: {
            type: Schema.Types.ObjectId,
            ref: 'posts'
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true }
)


