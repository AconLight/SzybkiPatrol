import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, incUserStat, userRepair } from "../../redux/user/userSlice";
import { Box, Button, Divider, Grid } from "@mui/material";
import { formatSeconds } from "../../utils/format";
import UserMediumView from "../../components/card/UserMediumView";
import Space from "../../components/group/Space";
import LightedGroup from "../../components/group/LightedGroup";
import Timer from "../../components/smart/Timer";

export default function Overview() {
  

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const userIncStat = (statName) => {
        dispatch(incUserStat({userToken: user.data.token, statName}))
    }

    const handleUserRepair = (statName) => {
        dispatch(userRepair({userToken: user.data.token}))
    }

    React.useEffect(() => {
        if (user?.data?.login) {
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
        
     }, []);
    
    return (
        <LightedGroup>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            <UserMediumView userViewed={user.data} onTuning={true} incStat={userIncStat} handleRepair={handleUserRepair}/>
            <Box>
                <Space />
                <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>
                    {user?.data?.stats && Object.keys(user?.data?.stats).map(key => (
                        key !== 'exp' ? (
                        <Grid item sx={{pl:1, border: 2}} xs={6}>
                            <div style={{fontWeight: 'bold'}}>{key}: {user?.data?.stats[key]}</div>
                        </Grid>) : (
                        <Grid item sx={{border: 2, display: 'flex', flexDirection: 'row'}} xs={6}>
                            <Box sx={{width: `${user?.data?.stats.exp / user?.data?.stats.lvl}%`, bgcolor: 'rgba(200,200,0,.6)'}}>
                                <div style={{paddingLeft: '8px', fontWeight: 'bold', position: 'absolute'}}>{key}: {user?.data?.stats[key]}</div>
                            </Box>
                            <Box display="flex" justifyContent="flex-end" sx={{alignTex: 'right', width: `${100 - user?.data?.stats.exp / user?.data?.stats.lvl}%`, bgcolor: 'rgba(80,80,80,.6)'}}>
                                <div style={{fontWeight: 'bold', position: 'absolute'}}>/ {user?.data?.stats.lvl*100}</div>
                            </Box>
                            
                        </Grid>
                        )
                    ))}
                </Grid>
                <Space />
                <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>    
                    <Grid item sx={{pl:1, border: 2}} xs={6}>
                        <b>praca: <Timer timestampSec = {user?.data?.timers?.work}/></b>
                    </Grid>
                    <Grid item sx={{pl:1, border: 2}} xs={6}>
                        <b>trening: <Timer timestampSec = {user?.data?.timers?.trening}/></b>
                    </Grid>
                    <Grid item sx={{pl:1, border: 2}} xs={6}>
                       <b>wyścig: <Timer timestampSec = {user?.data?.timers?.race}/></b>
                    </Grid>
                    <Grid item sx={{pl:1, border: 2}} xs={6}>
                       
                    </Grid>
                </Grid>
                <Space />
                <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>    
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
                </Grid>
            </Box>
        </Box>
        </LightedGroup>
    )
}