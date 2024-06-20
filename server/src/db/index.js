const mongoose = require('mongoose'); // singleton
const { Revision } = require('../model/revision');

let mongoURI = ''

const init = async ({ mongo: { uri } }) => {
    mongoURI = uri

    await mongoose
        .connect(mongoURI, {
            dbName: 'revisions-db'
        })
        .catch((err) => {
            console.error("MongoDB connection error: ", err)
            setTimeout(() => init({ mongo: { uri: mongoURI } }), 5000)
        })

    // drop any missed document on revision's colleciton
    await mongoose.connection.db.dropCollection("revisions").catch(err => console.error('Error on drop revision: ', err))

    Revision(); // create revision collection
}

const db = mongoose.connection

db.on('connected', () => console.log("MongoDB connected!"))

db.on('error', (err) => {
    console.error("MongoDB connection error: ", err)
    mongoose.disconnect()
})

db.on('disconnected', () => {
    console.log("MongoDB disconnected!")
    init({ mongo: { uri: mongoURI } })
})

module.exports = { init }