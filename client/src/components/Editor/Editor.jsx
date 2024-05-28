import { DefaultEditor } from 'react-simple-wysiwyg'
import useWebSocket from "react-use-websocket"
import { EVENTS, WS_URL } from "../../contants"
import { isDocumentEvent } from "../../lib/isDocumentEvent"

export const Editor = () => {
    const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isDocumentEvent
    })

    let text = lastJsonMessage?.data.editorContent || ''

    const onChange = (e) => {
        sendJsonMessage({
            type: EVENTS.CONTENT_CHANGE,
            content: e.target.value
        })
    }

    return (
        <DefaultEditor
            containerProps={{
                style: {
                    marginTop: '30px',
                    width: '60vw',
                    height: '50vh'
                }
            }}
            value={text}
            onChange={onChange} />
    )
}