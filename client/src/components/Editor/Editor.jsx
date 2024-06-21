import { useEffect } from 'react'
import { DefaultEditor } from 'react-simple-wysiwyg'
import useWebSocket from "react-use-websocket"
import { EVENTS, WS_URL } from "../../contants"
import { useGetRevisions } from '../../hooks/useGetRevision'
import { isDocumentEvent } from "../../lib/isDocumentEvent"
import { useRevision } from '../RevisionContext/RevisionContext'

export const Editor = () => {
    const { revId } = useRevision()
    const { data, loading } = useGetRevisions(revId)
    const { lastJsonMessage, sendJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isDocumentEvent
    })

    useEffect(() => {
        if (!loading && data.text !== undefined) sendJsonMessage({
            type: EVENTS.CONTENT_CHANGE,
            content: data.text
        })
    }, [loading])

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