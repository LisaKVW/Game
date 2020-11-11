const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        title_game: {
            type: Number,
            required: true
        },
        content: {
            type: Schema.Types.ObjectId,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
    },
    { timestamps: true }
)
