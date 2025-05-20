import React, { useState } from "react";
import { Box, Button, Divider, Grid, IconButton } from "@mui/material";
import GridedButton from "./GridedButton";
import AddBoxIcon from '@mui/icons-material/AddBox';
import StatWithBar from "../box/StatWithBar";
import Timer from "../../components/smart/Timer";

export default function UserMediumView({userViewed, onTuning, incStat, handleRepair, toggleTuning}) {

    const borderColor = 'background.default'

    return (
        <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            {userViewed ? ( <div>
            <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'row', border: 1, borderColor}}>
                <Box sx={{maxWidth: '50%', border: 1, bgcolor: 'rgba(200,200,200,.2)', borderColor}}>
                    {userViewed?.car?.name}
                    <img src={userViewed?.car?.url} alt="asd"/>
                </Box>
                <Grid container sx={{px: 0, border: 1, bgcolor: 'rgba(200,200,200,.3)', borderColor }}>
                    <Grid item sx={{px: 1, display: 'flex', flexDirection: 'row', justifyContent: "space-between", borderBottom: 1}} xs={12}>
                        <div>{userViewed?.nick}</div><div>lvl: {userViewed?.stats?.lvl}</div>
                    </Grid>
                    <Grid item sx={{border: 1, display: 'flex', flexDirection: 'row'}} xs={12}>
                        <StatWithBar color={'rgba(200, 0, 0, 0.6)'} statName={'hp'} value={userViewed?.mainStats?.hp} maxValue={1000} content={" /" + 1000} />
                    </Grid>
                    <Grid item sx={{border: 1, display: 'flex', flexDirection: 'row'}} xs={12}>
                        <StatWithBar color={'rgba(200,200,0,.6)'} statName={'exp'} value={userViewed?.stats?.exp} maxValue={1000} content={" /" + 1000} />
                    </Grid>


                    <Grid item sx={{px: 1, border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12}>
                        money: {userViewed?.stats?.money}$ + {userViewed?.stats?.rt}MRH
                    </Grid>
                    <Grid item sx={{px: 1, display: 'flex', flexDirection: 'row', justifyContent: "space-between", border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12}>
                        <b>praca / trening:</b> <b><Timer timestampSec = {Math.max(userViewed?.timers?.work, userViewed?.timers?.trening)}/></b>
                    </Grid>
                    <Grid item sx={{px: 1, display: 'flex', flexDirection: 'row', justifyContent: "space-between", border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12}>
                        <b>wyścig: </b> <b><Timer timestampSec = {userViewed?.timers?.race}/></b>
                    </Grid>

                </Grid>
                
            </Box>
            </div> ) : ''}
        </Box>
    )
}
