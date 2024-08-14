import React, { useState } from 'react';
import UserMediumView from "../../components/user/UserMediumView";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserViewed, fightUserViewed } from "../../redux/race/raceSlice";
import { Button, Divider, TextField, Grid, Box, Typography } from '@mui/material';
import GridedButton from '../../components/GridedButton';
import { fetchUser } from '../../redux/user/userSlice';

export default function Race() {

    const race = useSelector((state) => state.race)
    const dispatch = useDispatch()

    const [nick, setNick] = useState("");

    const user = useSelector((state) => state.user)
    React.useEffect(() => {
        if (user?.data?.login) {
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
        
     }, []);

    const findUserViewed = () => {
        dispatch(fetchUserViewed({nick: nick}))
        dispatch(fetchUserViewed({nick: nick}))
    }

    const fightOponent = () => {
        dispatch(fightUserViewed({userToken: user.data.token, oponentNick: nick}))
    }
  
    return (
        <div>
            <TextField
              margin="normal"
              required
              fullWidth
              id="nick"
              label="nick przeciwnika"
              name="nick"
              autoFocus
              onChange={(event) => {
                setNick(event.target.value)
              }}
            />
            <GridedButton
                title="Szukaj"
                onClick={(val) => findUserViewed()}
            />
            <Grid container>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Grid>
            <Divider />
            <Grid container>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Grid>
            <UserMediumView userViewed={!race?.fight && nick == race?.userViewed?.nick  && race?.userViewed} />
            {!race?.fight && nick == race?.userViewed?.nick  &&(
            <Box>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
                <GridedButton title="Wyzwij!" onClick={fightOponent}/>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Box>
            )}
            {race?.fight && (
                <Grid container sx={{px: 0, border: 0, bgcolor: 'rgba(200,200,200,.3)' }}>
                    <Grid item sx={{border: 2}} xs={6}>
                        <UserMediumView userViewed={user?.data} />
                    </Grid>
                    <Grid item sx={{border: 2}} xs={6}>
                        <UserMediumView userViewed={race?.userViewed} />
                    </Grid>
                    <Grid container>
                        <Grid item sx={{my: 2}} xs={12}> </Grid>
                    </Grid>
                    <Grid item sx={{border: 0, pb: 2}} xs={12}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Box><Typography><strong>przebieg walki</strong></Typography></Box>
                        </Box>
                    </Grid>
                    
                    {race?.fight && race.fight.map(el => (
                        <Grid item sx={{border: 0}} xs={12}>
                            <Grid item sx={{border: 1}} xs={12}>
                                {user?.data?.nick} zadaje graczowi {race?.userViewed?.nick} {parseInt(el.dmg1)} punktów obrażeń.
                            </Grid>
                            <Grid item sx={{border: 1}} xs={12}>
                                {race?.userViewed?.nick} zadaje graczowi {user?.data?.nick} {parseInt(el.dmg2)} punktów obrażeń.
                            </Grid>
                            <Grid item sx={{border: 1}} xs={12}>
                                {el.overtake == 1 && (
                                    <div>{user?.data?.nick} wyprzedza {race?.userViewed?.nick}</div>
                                )}
                                {el.overtake == -1 && (
                                    <div>{race?.userViewed?.nick} wyprzedza gracza {user?.data?.nick}</div>
                                )}
                            </Grid>
                        </Grid>
                        ))}
                </Grid>
            )}

        </div>
    )
}