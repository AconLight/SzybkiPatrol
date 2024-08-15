import React from "react";
import { Grid } from "@mui/material";

export default function Space({size=2}) {


    return (
        <Grid container>
                <Grid item sx={{my: size}} xs={12}> </Grid>
        </Grid>
    )
}
