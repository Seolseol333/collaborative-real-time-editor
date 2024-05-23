import { ContentState, convertToRaw } from "draft-js"
import MUIRichTextEditor from "mui-rte"
import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import { EVENTS, WS_URL } from "../../contants"

const isDocumentEvent = (message) => JSON.parse(message.data).type === EVENTS.CONTENT_CHANGE

export const Editor = () => {
    const [content, setContent] = useState('')
    const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isDocumentEvent
    })

    useEffect(() => {
        const editorContent = lastJsonMessage?.data.editorContent || ''
        if (!content.includes(editorContent)) {
            const state = ContentState.createFromText(editorContent)
            setContent(JSON.stringify(convertToRaw(state)))
        }
    }, [lastJsonMessage])

    const onChange = (state) => {
        sendJsonMessage({
            type: EVENTS.CONTENT_CHANGE,
            content: state.getCurrentContent().getPlainText()
        })
    }
    const onSave = () => console.log("Saved")

    return (
        <MUIRichTextEditor
            label="Start typing..."
            defaultValue={content}
            onChange={onChange}
            onSave={onSave} />
    )
}