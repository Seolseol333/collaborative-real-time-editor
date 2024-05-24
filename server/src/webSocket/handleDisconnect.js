const { EVENTS, USERS, CLIENTS, userActivity } = require("../constants");
const { broadcastMessage } = require("./broadcastMessage");

const handleDisconnect = (userId) => {
    const username = USERS[userId]?.username || userId;

    console.log(`${userId} disconnected.`);

    // remove userId
    delete CLIENTS[userId];
    delete USERS[userId];

    userActivity.push(`${username} left the document`);

    const data = {
        USERS,
        userActivity
    }

    broadcastMessage({ type: EVENTS.USER_EVENT, data });
}

module.exports = { handleDisconnect }