import { useEffect, useState } from "react"
import { API_URL } from "../contants"

export const useGetRevisions = (id) => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (id === '') return

        setLoading(true)

        const fetchFunc = async () => await fetch(`${API_URL}/v1/revision/${id}`)
            .then(data => data.json())
            .then(setData)
            .catch((err) => {
                console.error(err)
                setError(err)
            })
            .finally(() => setLoading(false))

        fetchFunc()
    }, [id])

    return { data, loading, error }
}