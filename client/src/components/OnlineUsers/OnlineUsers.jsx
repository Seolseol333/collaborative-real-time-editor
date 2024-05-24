import { Avatar, Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { isUserEvent } from "../../lib/isUserEvent"
import useWebSocket from "react-use-websocket"
import { WS_URL } from "../../contants"

export const OnlineUsers = () => {
    const [users, setUsers] = useState([])
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isUserEvent
    })

    useEffect(() => {
        setUsers(Object.values(lastJsonMessage?.data?.USERS || {}))
    }, [lastJsonMessage])

    if (users.length === 0) return null

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ maxHeight: "100vh" }}>
            {
                users.map((user, i) => (
                    <Avatar key={i} sx={{ margin: "5px" }}>
                        {user.username[0].toUpperCase()}
                    </Avatar>
                ))
            }
        </Grid>
    )
}