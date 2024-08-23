import React, { useState } from "react";
import { Box, Button, Divider, Grid, IconButton } from "@mui/material";
import GridedButton from "./GridedButton";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function UserMediumView({userViewed, onTuning, incStat, handleRepair}) {

    const borderColor = 'background.default'

    const [isTuning, setIsTuning] = useState(false)

    const toggleTuning = () => setIsTuning(!isTuning)

    const leftSize = isTuning ? 7 : 9

    return (
        <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            {userViewed ? ( <div>
            <Box sx={{borderRadius: 1, display: 'flex', flexDirection: 'row', border: 1, borderColor}}>
                <Box sx={{maxWidth: '50%', border: 1, bgcolor: 'rgba(200,200,200,.2)', borderColor}}>
                    {userViewed?.car?.name}
                    <img src={userViewed?.car?.url} alt="asd"/>
                </Box>
                <Grid container sx={{px: 0, border: 1, bgcolor: 'rgba(200,200,200,.3)', borderColor }}>
                <Grid item sx={{borderBottom: 2}} xs={12}>
                     {userViewed?.nick}
                </Grid>
                <Grid item sx={{borderBottom: 1, display: 'flex', flexDirection: 'row'}} xs={12}>
                    <Box sx={{width: `${userViewed?.mainStats?.hp / 1000 * 100}%`, bgcolor: 'rgba(200,0,0,.6)'}}>
                        <span style={{fontWeight: 'bold'}}>{'hp'}: {userViewed?.mainStats?.hp}<div style={{paddingLeft: '8px', fontWeight: 'bold', position: 'absolute'}}></div></span>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" sx={{alignTex: 'right', width: `${100 - userViewed?.mainStats?.hp / 1000 *100}%`, bgcolor: 'rgba(80,80,80,.6)'}}>
                        <div style={{fontWeight: 'bold', position: 'absolute'}}>/ 1000</div>
                    </Box>
                    
                </Grid>

                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={leftSize}>
                    armor:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12 - leftSize}>
                    {userViewed?.mainStats?.armor} {isTuning && <span><IconButton><AddBoxIcon onClick={() => incStat('armor')} /></IconButton> $100 </span>}
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={leftSize}>
                    speed:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12 - leftSize}>
                    {userViewed?.mainStats?.speed} {isTuning && <span><IconButton><AddBoxIcon onClick={() => incStat('speed')} /></IconButton> $100 </span>}
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={leftSize}>
                    steering:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12 - leftSize}>
                    {userViewed?.mainStats?.steering} {isTuning && <span><IconButton><AddBoxIcon onClick={() => incStat('steering')} /></IconButton> $100 </span>}
                </Grid>
                <Grid item sx={{border: 1, borderRight: 2, borderLeft: 0, borderColor}} xs={leftSize}>
                    attack:
                </Grid>
                <Grid item sx={{border: 1, borderRight: 0, borderLeft: 0, borderColor}} xs={12 - leftSize}>
                    {userViewed?.mainStats?.attack} {isTuning && <span><IconButton><AddBoxIcon onClick={() => incStat('attack')} /></IconButton> $100 </span>}
                </Grid>
                {onTuning && (
                    <Box textAlign='center' sx={{py: 1, width: '100%'}}>
                    <Button
                        onClick={toggleTuning}
                        variant="contained"
                        sx={{ px: 4, mr: 2}}
                        >
                        tuning
                    </Button>
                    <Button
                        onClick={handleRepair}
                        variant="contained"
                        sx={{ px: 4, mr: 2}}
                        >
                        naprawa
                    </Button>
                    </Box>
                )}
                </Grid>
            </Box>
            </div> ) : ''}
        </Box>
    )
}
