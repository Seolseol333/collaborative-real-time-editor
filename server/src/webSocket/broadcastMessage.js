const { WebSocket } = require("ws");
const { CLIENTS } = require("../constants");

const broadcastMessage = (json) => {
    // We are sending the current data to all connected clients
    const data = JSON.stringify(json);
    for (let userId in CLIENTS) {
        let client = CLIENTS[userId];
        if (client.readyState === WebSocket.OPEN) {
            client.send(data);
        }
    };
}

module.exports = { broadcastMessage }