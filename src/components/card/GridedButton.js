import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";

export default function GridedButton({title, onClick, buttonProps}) {

    const borderColor = 'background.default'

    return (
        <Box sx={{borderRadius: 1, borderColor}}>
            <Grid container spacing={0} sx={{borderRadius: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)', borderColor}}>
                <Grid item sx={{borderRadius: 1, border: 2, py: 1, borderColor}} xs={12}>
                    <Box textAlign='center'>
                        <Button
                            variant="contained"
                            sx={{ px: 8}}
                            onClick={onClick}
                            {...buttonProps}
                            >
                            {title}
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}