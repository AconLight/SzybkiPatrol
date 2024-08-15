import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import { Box, Button, Divider, Grid } from "@mui/material";
import { formatSeconds } from "../../utils/format";
import UserMediumView from "../../components/card/UserMediumView";
import Space from "../../components/group/Space";
import LightedGroup from "../../components/group/LightedGroup";

export default function Overview() {
  

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
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
            {/* <Box sx={{display: 'flex', flexDirection: 'row', border: 1}}>
                <Box sx={{border: 2, bgcolor: 'rgba(200,200,200,.2)'}}>
                    viper
                    <img src="https://i.ibb.co/jH6TWLV/bugv2.png" alt="asd"/>
                </Box>
                <Grid container sx={{px: 0, border: 0, bgcolor: 'rgba(200,200,200,.3)' }}>
                <Grid item sx={{border: 2}} xs={12}>
                    {user?.data?.nick}
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    kasa:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    1000$
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    puchy:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    0
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    praca/trening:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    00:00:12
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    następny wyścig:
                </Grid>
                <Grid item sx={{border: 2}} xs={6}>
                    {user?.data?.timers?.race && formatSeconds((Math.max(user?.data?.timers?.race - Date.now() / 1000.0, 0)))}
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    brak zespołu:
                </Grid>
                <Grid item sx={{border: 2}} xs={12}>
                    coś tam
                </Grid>
                </Grid>
            </Box> */}
            <UserMediumView userViewed={user.data} onTuning={true}/>
            <Box>
                <Space />
                <Grid container spacing={0} sx={{my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>
                    {user?.data?.stats && Object.keys(user?.data?.stats).map(key => (
                        key !== 'exp' ? (
                        <Grid item sx={{border: 2}} xs={6}>
                            <div style={{fontWeight: 'bold'}}>{key}: {user?.data?.stats[key]}</div>
                        </Grid>) : (
                        <Grid item sx={{border: 2, display: 'flex', flexDirection: 'row'}} xs={6}>
                            <Box sx={{width: `${user?.data?.stats.exp / user?.data?.stats.lvl}%`, bgcolor: 'rgba(200,200,0,.6)'}}>
                                <div style={{fontWeight: 'bold', position: 'absolute'}}>{key}: {user?.data?.stats[key]}</div>
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
                    <Grid item sx={{pl:1, border: 2}} xs={12}>
                        <b>timery</b>
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        <b>praca/trening:</b>
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                       <b>wyścig:</b> 
                    </Grid>
                </Grid>
                <Space />
                <Grid container spacing={0} sx={{borderRadius: 1, border: 1, my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>    
                    <Grid item sx={{pl:1, border: 2}} xs={12}>
                    <b>statystyki</b>
                    </Grid>
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