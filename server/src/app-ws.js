const WebSocket = require('ws')
const { PORT } = require('./constants')

const { handleConnect } = require('./webSocket/handleConnect')
const { handleDisconnect } = require('./webSocket/handleDisconnect')
const { handleMessage } = require('./webSocket/handleMessage')

module.exports = (server) => {
    const wsServer = new WebSocket.Server({ server })

    console.log(`🚀 WebSocket Server ready at ws://localhost:${PORT}`)

    wsServer.on('connection', handleConnect)

    wsServer.on('message', (message) => handleMessage(message, userId))

    wsServer.on('close', () => handleDisconnect(userId))

    wsServer.on('error', (error) => console.error(error))
}
