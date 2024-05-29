const { WebSocket } = require("ws");
const { CLIENTS } = require("../constants");

const broadcastMessage = (message) => {
    const json = JSON.stringify(message);

    for (let userId in CLIENTS) {
        let client = CLIENTS[userId];
        if (client.readyState === WebSocket.OPEN) {
            client.send(json);
        }
    };
}

module.exports = { broadcastMessage }