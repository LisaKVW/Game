const { Posting, User, Comment } = require('../db/schema')

const GetPosts = async (req, res) => {
    try {
        const { page, limit } = req.query
        const offset =
            page === '1' ? 0 : Math.floor(parseInt(page) * parseInt(limit))
        const posts = await Posting.find()
            .limit(parseInt(limit))
            .skip(offset)
            .sort({ user_id: -1 }) // want to sort it most recent post - StackOv - sayd object.id containse timestamp, so sort like this?
        res.send(posts)                 // https://stackoverflow.com/questions/13293254/sort-by-date-and-time-in-mongoose
    } catch (error) {                   //https://stackoverflow.com/questions/5125521/uses-for-mongodb-objectid-creation-time
        throw error
    }
}