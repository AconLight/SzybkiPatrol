import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import GridedButton from "../GridedButton";

export default function UserMediumView({userViewed, onClick}) {


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            {userViewed ? ( <div>
            <Box sx={{display: 'flex', flexDirection: 'row', border: 1}}>
                <Box sx={{border: 2, bgcolor: 'rgba(200,200,200,.2)'}}>
                    viper
                    <img src="https://i.ibb.co/jH6TWLV/bugv2.png" alt="asd"/>
                </Box>
                <Grid container sx={{px: 0, border: 0, bgcolor: 'rgba(200,200,200,.3)' }}>
                <Grid item sx={{border: 2}} xs={12}>
                     {userViewed?.nick} 
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    armor:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    {userViewed?.armor} 
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    speed:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    {userViewed?.speed} 
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    steering:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    {userViewed?.steering} 
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    attack:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    {userViewed?.attack} 
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    brak zespołu:
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    coś tam
                </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
                <GridedButton title="Wyzwij!" onClick={onClick}/>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Box>
            </div> ) : ''}
        </Box>
    )
}
