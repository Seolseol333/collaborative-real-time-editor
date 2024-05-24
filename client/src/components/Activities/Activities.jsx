import { useEffect, useState } from "react"
import useWebSocket from "react-use-websocket"
import { WS_URL } from "../../contants"
import { isUserEvent } from "../../lib/isUserEvent"

export const Activities = () => {
    const [activities, setActivities] = useState([])
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isUserEvent
    })

    // useEffect(() => setActivities(lastJsonMessage?.data.userActivity || []), [])

    useEffect(() => {
        setActivities(lastJsonMessage?.data.userActivity || [])
    }, [lastJsonMessage])

    const length = activities.length
    const min = length < 11 ? 0 : length - 10

    if (length === 0) return null

    return (
        <>
            <ul>
                {activities.slice(min, length).map((act, i) => (
                    <li key={i}>{act}</li>
                ))}
            </ul>
        </>
    )
}