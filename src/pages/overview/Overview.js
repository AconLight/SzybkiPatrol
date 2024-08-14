import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import { Box, Button, Divider, Grid } from "@mui/material";

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
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignContent:'stretch', border: 0}}>
            <Box sx={{display: 'flex', flexDirection: 'row', border: 1}}>
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
                    00:01:41
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
                <Grid container spacing={0} sx={{my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>
                    
                    {user?.data && Object.keys(user?.data).filter(el => el == "speed" || el == "attack" || el == "steering" || el == "armor").map(key => (
                        <Grid item sx={{border: 2}} xs={6}>
                            {key}: {user?.data[key]}
                        </Grid>
                    ))}
                    <Grid item sx={{border: 2, py: 1}} xs={12}>
                    <Box textAlign='center'>
                    <Button
                        variant="contained"
                        sx={{ px: 8}}
                        >
                        tuning
                    </Button>
                    </Box>
                    </Grid>
                </Grid>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
                <Grid container spacing={0} sx={{my: 0, bgcolor: 'rgba(200,200,200,.3)'}}>    
                    <Grid item sx={{border: 2}} xs={12}>
                        statystyki
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        łączny czas gry:
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        01:20:12
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        wygrane wyścigi:
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        423
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}