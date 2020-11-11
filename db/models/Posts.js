const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        user_name: {
            type: Schema.Types.ObjectId,  //not sure if will grab name - check
            ref: 'users'
        },
        title_game: {
            type: Number,
            required: true
        },
        content: {
            type: String,
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
