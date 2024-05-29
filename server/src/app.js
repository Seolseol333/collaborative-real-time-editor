const express = require('express')
const cors = require('cors')
const health = require('./routes/health')
const v1 = require('./routes/v1')

const app = express()

app.use(express.json())

const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true, // access-control-allow-credentails: true
}
// app.use(cors(corsOptions)) // for all routes

// Health route
app.use('/health', health)

// v1 route
app.use('/v1', cors(corsOptions), v1)

module.exports = app