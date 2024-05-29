const WebSocket = require('ws')
const { PORT } = require('./constants')

const { handleConnect } = require('./webSocket/handleConnect')

module.exports = (server) => {
    const wsServer = new WebSocket.Server({ server })

    console.log(`🚀 WebSocket Server ready at ws://localhost:${PORT}`)

    wsServer.on('connection', handleConnect)
}
