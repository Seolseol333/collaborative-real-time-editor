require('dotenv').config()

const app = require('./app')
const appWs = require('./app-ws')
const { PORT } = require('./constants')
const db = require('./db')

const databaseURI = { mongo: { uri: process.env.MONGODB_URI } }

const run = async () => {
    await db.init(databaseURI)

    const server = app.listen({ port: PORT }, () =>
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
    );

    appWs(server)
}

run()