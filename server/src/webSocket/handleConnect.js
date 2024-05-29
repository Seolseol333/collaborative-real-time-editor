const { CLIENTS } = require('../constants');
const uuidv4 = require('uuid').v4

const { handleDisconnect } = require('./handleDisconnect');
const { handleMessage } = require('./handleMessage')

const handleConnect = (connection) => {
    console.log('Received a new connection')

    const userId = uuidv4();
    CLIENTS[userId] = connection

    connection.on('message', (message) => handleMessage(message, userId))

    connection.on('close', () => handleDisconnect(userId))

    connection.on('error', (error) => console.error(error))
}

module.exports = { handleConnect }