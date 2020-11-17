const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        title_game: {
            type: String,
            required: true
        },
        share: {
            type: String,
            required: true
        },
        image: {
            type: String,
        },
        user_id: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
        api_id: {
            type: Number
        },
        post_title: {
            type: String,
        }
    },
    { timestamps: true }
)
