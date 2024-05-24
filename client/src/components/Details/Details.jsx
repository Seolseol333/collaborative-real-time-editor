import { Box, Grid, Tab, Tabs } from "@mui/material"
import { useState } from "react"
import { Activities } from "../Activities/Activities"
import { TabPanel } from "../TabPanel/TabPanel"

export const Details = () => {
    const [tab, setTab] = useState("0")

    const onChange = (_, tab) => {
        if (!tab) return

        setTab(tab)
    }

    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            sx={{ maxHeight: "100vh" }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tab} onChange={onChange} aria-label="details tab">
                    <Tab label="Users Online" value="0" />
                    <Tab label="Revisions" value="1" />
                </Tabs>
            </Box>
            <TabPanel value={tab} index="0"><Activities /></TabPanel>
            <TabPanel value={tab} index="1">Revisions</TabPanel>
        </Grid>
    )
}