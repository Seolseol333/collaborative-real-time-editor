import { Avatar, Grid } from "@mui/material"

export const OnlineUsers = () => {

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ maxHeight: "100vh" }}>
            <Avatar sx={{ margin: "5px" }}>M</Avatar>
            <Avatar sx={{ margin: "5px" }}>S</Avatar>
        </Grid>
    )
}