const mongoose = require('mongoose')

const health = (_, res) => {
    if (mongoose.connection.readyState === 1) {
        res.sendStatus(200)
    } else {
        res.sendStatus(500)
    }
}

module.exports = { health }