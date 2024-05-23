const { WebSocketServer } = require('ws')
const http = require('http')
const { handleConnect } = require('./webSocket/handleConnect')
const { PORT } = require('./constants')

const server = http.createServer()
const wsServer = new WebSocketServer({ server })

server.listen(PORT, () => console.log(`WebSocket server is running on port ${PORT}`))

wsServer.on('connection', handleConnect)
