import { Grid } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import useWebSocket, { ReadyState } from "react-use-websocket"
import { Details } from "../../components/Details/Details"
import { Editor } from "../../components/Editor/Editor"
import { OnlineUsers } from "../../components/OnlineUsers/OnlineUsers"
import { SaveButton } from "../../components/SaveButton/SaveButton"
import { EVENTS, WS_URL } from "../../contants"

export const EditorView = () => {
    const { name } = useParams()
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => console.log('WebSocket connection established!'),
        share: true,
        retryOnError: true,
        shouldReconnect: () => true
    })

    useEffect(() => {
        if (name && readyState === ReadyState.OPEN) {
            sendJsonMessage({ username: name, type: EVENTS.USER_EVENT })
        }
    }, [name, sendJsonMessage, readyState])

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="baseline"
            sx={{ minWidth: "100vw", marginTop: "40px" }}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "70%" }}>
                <OnlineUsers />
                <Editor />
                <SaveButton />
            </Grid>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{ width: "30%" }}>
                <Details />
            </Grid>
        </Grid>
    )
}