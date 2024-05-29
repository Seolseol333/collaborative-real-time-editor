const express = require('express')
const health = require('./routes/health')
const v1 = require('./routes/v1')

const app = express()

app.use(express.json())

// Health route
app.use('/health', health)

// v1 route
app.use('/v1', v1)

module.exports = app