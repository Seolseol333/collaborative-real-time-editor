import { Button, Grid } from "@mui/material"
import { useEffect } from "react"
import { useAllRevisions } from "../../hooks/useAllRevisions"
import { useRevision } from "../RevisionContext/RevisionContext"

export const Revisions = ({ refresh }) => {
    const { setRevId } = useRevision()
    const { data: revs, loading, refetch } = useAllRevisions()
    console.log(refresh)
    useEffect(() => {
        console.log('refresh')
        refetch()
    }, [refresh])
    console.log('loading >', loading)
    if (loading) return <p>'Loading...'</p>

    if (revs.length === 0) return <p>No revisions</p>

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "20px" }}
        >
            {revs.map(({ revision }) => (
                <Button key={revision} onClick={() => setRevId(revision)}>{revision}</Button>
            ))}
        </Grid>
    )
}