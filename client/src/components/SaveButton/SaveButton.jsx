import useWebSocket from "react-use-websocket"
import { Button } from "@mui/material"
import { isDocumentEvent } from "../../lib/isDocumentEvent"
import { WS_URL } from "../../contants"
import { useAddRevision } from "../../hooks/useAddRevision"

export const SaveButton = () => {
    const { mutationFunc, data, error } = useAddRevision()
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isDocumentEvent
    })

    const onClick = () => mutationFunc({ text: lastJsonMessage?.data.editorContent || '' })

    return (
        <Button sx={{ marginTop: "30px" }} onClick={onClick}>Save Revision</Button>
    )
}