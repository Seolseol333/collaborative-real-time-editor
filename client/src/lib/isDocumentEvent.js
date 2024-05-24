import { EVENTS } from "../contants";

export const isDocumentEvent = (event) =>
    JSON.parse(event.data).type === EVENTS.CONTENT_CHANGE