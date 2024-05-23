const { EVENTS, USERS, CLIENTS } = require("../constants");
const { broadcastMessage } = require("./broadcastMessage");

let userActivity = []

const handleDisconnect = (userId) => {
    console.log(`${userId} disconnected.`);
    const json = { type: EVENTS.USER_EVENT };
    const username = USERS[userId]?.username || userId;
    userActivity.push(`${username} left the document`);
    json.data = { USERS, userActivity };
    delete CLIENTS[userId];
    delete USERS[userId];
    broadcastMessage(json);
}

module.exports = { handleDisconnect }