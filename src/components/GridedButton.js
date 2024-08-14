import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";

export default function GridedButton({title, onClick}) {


    return (
        <Box>
            <Grid container spacing={0} sx={{my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>
                <Grid item sx={{border: 2, py: 1}} xs={12}>
                    <Box textAlign='center'>
                        <Button
                            variant="contained"
                            sx={{ px: 8}}
                            onClick={onClick}
                            >
                            {title}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}