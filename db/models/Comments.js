const { Schema } = require('mongoose')

module.exports = new Schema(
    {
        comment: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)


