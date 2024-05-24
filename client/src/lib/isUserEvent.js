import { EVENTS } from "../contants";

export const isUserEvent = (event) =>
    JSON.parse(event.data).type === EVENTS.USER_EVENT