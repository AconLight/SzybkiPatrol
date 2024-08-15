import React from "react";
import { Box, Grid } from "@mui/material";

export default function LightedGroup(props) {


    return (
        <Box sx={{ boxShadow: 4 }}>
        <Grid container sx={{borderRadius: 2, border: 0, p: 2, bgcolor: 'rgba(200,200,200,.06)' }}><Grid item sx={{ border: 0}} xs={12}>
            {props.children}
        </Grid></Grid>
        </Box>
    )
}
