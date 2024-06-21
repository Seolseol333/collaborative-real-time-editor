import { useEffect, useState } from "react"
import { API_URL } from "../contants"

export const useAllRevisions = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const fetchFunc = async () => await fetch(`${API_URL}/v1/revision/all`)
        .then(data => data.json())
        .then(setData)
        .catch((err) => {
            console.error(err)
            setError(err)
        })
        .finally(() => setLoading(false))

    useEffect(() => {
        setLoading(true)

        fetchFunc()
    }, [])

    return { data, loading, error, refetch: fetchFunc }
}