const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost:27017/posts', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.set('debug', true)

module.exports = connection

//connection to posts? this as this will be connecting new data - and comments will be posted to posts