const { EVENTS, USERS, userActivity } = require("../constants");
const { broadcastMessage } = require("./broadcastMessage");

const handleMessage = (messageRaw, userId) => {
    const message = JSON.parse(messageRaw.toString());
    const json = { type: message.type };

    switch (message.type) {
        case EVENTS.USER_EVENT:
            USERS[userId] = message
            userActivity.push(
                `${message.username} joined to edit the document`
            )
            json.data = { USERS, userActivity }
            break;
        case EVENTS.CONTENT_CHANGE:
            json.data = {
                editorContent: message.content,
                userActivity
            }
            break;
    }

    broadcastMessage(json);
}

module.exports = { handleMessage }