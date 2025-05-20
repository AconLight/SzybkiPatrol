import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, incUserStat, userRepair } from "../../redux/user/userSlice";
import { Box, Button, Divider, Grid, IconButton } from "@mui/material";
import { formatSeconds } from "../../utils/format";
import UserMediumView from "../../components/card/UserMediumView";
import StatWithBar from "../../components/box/StatWithBar";
import Space from "../../components/group/Space";
import LightedGroup from "../../components/group/LightedGroup";
import Timer from "../../components/smart/Timer";
import AddBoxIcon from '@mui/icons-material/AddBox';

export default function Overview() {

    const borderColor = 'background.default'

    const [isTuning, setIsTuning] = useState(false)

    const toggleTuning = () => setIsTuning(!isTuning)

    const leftSize = isTuning ? 7 : 9
  
    const onTuning = true
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const incStat = (statName) => {
        dispatch(incUserStat({statName}))
    }

    const handleRepair = (statName) => {
        dispatch(userRepair())
    }

    React.useEffect(() => {
        dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))   
     }, []);
    
    return (
        <LightedGroup>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            <UserMediumView userViewed={user.data} onTuning={true} incStat={incStat} handleRepair={handleRepair} toggleTuning={toggleTuning}/>
            <Box>
                <Space />
                <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>
                    {user?.data?.stats && ["attack", "speed", "steering", "armor"].map(key => (
                        <Grid item sx={{border: 1, display: 'flex', flexDirection: 'row'}} xs={12}>
                            <StatWithBar
                                color={'rgba(23, 200, 0, 0.6)'}
                                statName={key} value={user?.data?.mainStats[key]}
                                maxValue={100}
                                content={isTuning && <span><IconButton size="small"><AddBoxIcon onClick={() => incStat(key)} /></IconButton> $100 </span>} />
                        </Grid>
                        )
                    )}
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
                <Space />
                {/* <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>    
                    <Grid item sx={{border: 2}} xs={6}>
                    <b>łączny czas gry:</b>
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                    <b>01:20:12</b>
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                    <b>wygrane wyścigi:</b>
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                    <b>423</b>
                    </Grid>
                </Grid> */}
            </Box>
        </Box>
        </LightedGroup>
    )
}