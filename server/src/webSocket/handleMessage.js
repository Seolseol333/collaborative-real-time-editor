const { EVENTS, USERS } = require("../constants");
const { broadcastMessage } = require("./broadcastMessage");

let editorContent = null
let userActivity = []

const handleMessage = (message, userId) => {
    const dataFromClient = JSON.parse(message.toString());
    const json = { type: dataFromClient.type };
    if (dataFromClient.type === EVENTS.USER_EVENT) {
        USERS[userId] = dataFromClient;
        userActivity.push(`${dataFromClient.username} joined to edit the document`);
        json.data = { USERS, userActivity };
    } else if (dataFromClient.type === EVENTS.CONTENT_CHANGE) {
        editorContent = dataFromClient.content;
        json.data = { editorContent, userActivity };
    }
    broadcastMessage(json);
}

module.exports = { handleMessage }