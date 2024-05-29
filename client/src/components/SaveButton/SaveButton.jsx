import { Button } from "@mui/material"

export const SaveButton = () => {
    const onClick = () => console.log('Saved revision')

    return (
        <Button sx={{ marginTop: "30px" }} onClick={onClick}>Save Revision</Button>
    )
}