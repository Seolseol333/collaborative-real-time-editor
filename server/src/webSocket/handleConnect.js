const { CLIENTS } = require('../constants');
const { handleDisconnect } = require('./handleDisconnect');
const { handleMessage } = require('./handleMessage');

const uuidv4 = require('uuid').v4

const handleConnect = (connection) => {
    const userId = uuidv4();
    console.log('Received a new connection')

    CLIENTS[userId] = connection

    connection.on('message', (message) => handleMessage(message, userId))

    connection.on('close', () => handleDisconnect(userId))
}

module.exports = { handleConnect }