import { useState } from "react"
import { API_URL } from "../contants"

export const useAddRevision = () => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)

    const mutationFunc = async (rev) =>
        await fetch(
            `${API_URL}/v1/revision`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(rev)
            })
            .then(data => data.json())
            .then(setData)
            .catch((err) => {
                console.error(err)
                setError(err)
            })

    return { mutationFunc, data, error }
}