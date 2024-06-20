import { useAllRevisions } from "../../hooks/useAllRevisions"

export const Revisions = () => {
    const { data: revs, loading } = useAllRevisions()

    if (loading) return <p>'Loading...'</p>

    if (revs.length === 0) return <p>No revisions</p>

    return (
        <>
            <ul>
                {revs.map(rev => (
                    <li key={rev._id}>{rev.revision}</li>
                ))}
            </ul>
        </>
    )
}