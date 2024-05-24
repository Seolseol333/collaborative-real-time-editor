const PORT = 8000
const CLIENTS = {}
const USERS = {}
const EVENTS = {
    USER_EVENT: 'userEvent',
    CONTENT_CHANGE: 'contentChange'
}
let userActivity = []

module.exports = { PORT, CLIENTS, USERS, EVENTS, userActivity }