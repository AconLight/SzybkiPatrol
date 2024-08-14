import React from "react";
import { Box, Button, Divider, Grid } from "@mui/material";
import GridedButton from "../GridedButton";

export default function UserMediumView({userViewed}) {


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
                <Grid item sx={{border: 2}} xs={9}>
                    armor:
                </Grid>
                <Grid item sx={{border: 2}} xs={3}>
                    {userViewed?.mainStats?.armor} 
                </Grid>
                <Grid item sx={{border: 2}} xs={9}>
                    speed:
                </Grid>
                <Grid item sx={{border: 2}} xs={3}>
                    {userViewed?.mainStats?.speed} 
                </Grid>
                <Grid item sx={{border: 2}} xs={9}>
                    steering:
                </Grid>
                <Grid item sx={{border: 2}} xs={3}>
                    {userViewed?.mainStats?.steering} 
                </Grid>
                <Grid item sx={{border: 2}} xs={9}>
                    attack:
                </Grid>
                <Grid item sx={{border: 2}} xs={3}>
                    {userViewed?.mainStats?.attack} 
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    brak zespołu:
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    coś tam
                </Grid>
                </Grid>
            </Box>
            </div> ) : ''}
        </Box>
    )
}
