const { CLIENTS } = require('../constants');

const uuidv4 = require('uuid').v4

const handleConnect = (connection) => {
    const userId = uuidv4();
    console.log('Received a new connection')

    CLIENTS[userId] = connection
}

module.exports = { handleConnect }