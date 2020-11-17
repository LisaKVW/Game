const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        comment: {
            type: String,
            required: true
        },
        post_id: {
            type: Schema.Types.ObjectId,
            ref: 'posting'
        }
    },
    { timestamps: true }
)


