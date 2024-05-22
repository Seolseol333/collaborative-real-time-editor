import { Grid } from "@mui/material"
import { ContentState, convertToRaw } from "draft-js"
import MUIRichTextEditor from "mui-rte"
import { useParams } from "react-router-dom"
import { Details } from "../../components/Details/Details"
import { OnlineUsers } from "../../components/OnlineUsers/OnlineUsers"

export const EditorView = () => {
    const { name } = useParams()

    const state = ContentState.createFromText(name)
    const content = JSON.stringify(convertToRaw(state))

    const onSave = () => console.log("Saved")

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
                <MUIRichTextEditor
                    label="Start typing..."
                    defaultValue={content}

                    onSave={onSave} />
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