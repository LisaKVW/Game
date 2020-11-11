const AppRouter = require('./routes/AppRouter')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const connection = require('./db/connection')

const PORT = process.env.PORT || 3003
const app = express()

// Initialize Middleware
app.use(logger('dev'))
app.use(helmet())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Initialize Middleware
app.disable('X-Powered-By')
app.get('/', (req, res) => res.send({ msg: 'Server Working - home route' }))
app.use('/api', AppRouter)

app.listen(PORT, async () => {
    try {
        await connection
        console.log('Database Connected')
        console.log(`App listening on port: ${PORT}`)
    } catch (error) {
        throw new Error('Connection Error')
    }
})
