import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import GridedButton from "./GridedButton";

export default function UserMediumView({userViewed, onTuning}) {

    const borderColor = 'background.default'

    return (
        <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            {userViewed ? ( <div>
            <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'row', border: 1, borderColor}}>
                <Box sx={{maxWidth: '50%', border: 1, bgcolor: 'rgba(200,200,200,.2)', borderColor}}>
                    viper
                    <img src="https://i.ibb.co/jH6TWLV/bugv2.png" alt="asd"/>
                </Box>
                <Grid container sx={{px: 0, border: 1, bgcolor: 'rgba(200,200,200,.3)', borderColor }}>
                <Grid item sx={{borderBottom: 1}} xs={12}>
                     {userViewed?.nick} 
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={9}>
                    armor:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={3}>
                    {userViewed?.mainStats?.armor} 
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={9}>
                    speed:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={3}>
                    {userViewed?.mainStats?.speed} 
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={9}>
                    steering:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={3}>
                    {userViewed?.mainStats?.steering}
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={9}>
                    attack:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={3}>
                    {userViewed?.mainStats?.attack} 
                </Grid>
                {onTuning && (
                    <Box textAlign='center' sx={{py: 1, width: '100%'}}>
                    <Button
                        variant="contained"
                        sx={{ px: 4, mr: 2}}
                        >
                        tuning
                    </Button>
                    </Box>
                )}
                </Grid>
            </Box>
            </div> ) : ''}
        </Box>
    )
}
