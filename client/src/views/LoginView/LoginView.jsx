import { Grid, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const LoginView = () => {
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const onChange = (e) => {
        setName(e.target.value)
    }

    const onClick = () => {
        if (!name) return

        navigate(`/editor/${name}`)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ minWidth: "100vw", minHeight: "100vh" }}>
            <TextField label="Login" onChange={onChange} />
            <Button
                variant="contained"
                sx={{ margin: '15px' }}
                onClick={onClick}
                disabled={!name}>Login</Button>
        </Grid>
    )
}