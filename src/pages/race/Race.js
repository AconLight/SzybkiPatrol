import React, { useState } from 'react';
import UserMediumView from "../../components/card/UserMediumView";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserViewed, fightUserViewed } from "../../redux/race/raceSlice";
import { Button, Divider, TextField, Grid, Box, Typography, styled } from '@mui/material';
import GridedButton from '../../components/card/GridedButton';
import { fetchUser } from '../../redux/user/userSlice';
import { formatSeconds } from '../../utils/format';
import CardImgTitle from '../../components/card/CardImgTitle';
import raceImg from '../../assets/race.jpg';
import LightedGroup from '../../components/group/LightedGroup';
import Space from '../../components/group/Space';
import Timer from '../../components/smart/Timer';

const StyledTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;

export default function Race() {

    const race = useSelector((state) => state.race)
    const dispatch = useDispatch()

    const [nick, setNick] = useState("");
    const [isFight, setIsFight] = useState(false)

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
        setIsFight(true)
        dispatch(fightUserViewed({userToken: user.data.token, oponentNick: nick}))
    }
    
    const maxTimestamp = Math.max(
        user?.data?.timers?.work, 
        user?.data?.timers?.race,
        user?.data?.timers?.trening,
        0
    )
    
    const canRace = maxTimestamp < Date.now() / 1000.0 
  
    return (
        <LightedGroup>
            <CardImgTitle isMain={true} img={raceImg} title="Wyścig" description="Wyzwij innego gracza na pojedynek"/>
            <Space />
            <StyledTextField
              //margin="normal"
              required
              fullWidth
              id="nick"
              label="nick przeciwnika"
              name="nick"
              onChange={(event) => {
                setNick(event.target.value)
              }}
              sx={{pb:2}}
            />
            <GridedButton
                title="Szukaj"
                onClick={(val) => findUserViewed()}
                buttonProps={{
                    color: canRace && !isFight ? 'primary' : 'secondary'
                }}
            />
            {!race?.fight && nick == race?.userViewed?.nick  && race?.userViewed &&
            <div>
                <Space />
                <UserMediumView userViewed={race?.userViewed} />
            </div>}
                
            {!race?.fight && nick == race?.userViewed?.nick  &&(
            <Box>
                <Space />
                {!canRace ? (
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box><Typography><strong>Zacznij wyścig za <Timer timestampSec={maxTimestamp} /></strong></Typography></Box>
                    </Box>
                ) : (
                    <GridedButton title="Wyzwij!" onClick={fightOponent}/>
                )}
                <Space />
            </Box>
            )}
            {race?.fight && (
                <div><Space size={1} />
                <LightedGroup>
                    
                    <Grid item sx={{px: 1, border: 0}} xs={12}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            <UserMediumView userViewed={user?.data} />
                            <Divider sx={{
                                "&::before, &::after": {
                                    borderColor: "#444444",
                                }, width: '10%', mx: 1}}>VS</Divider>
                            <UserMediumView userViewed={race?.userViewed} />
                        </Box>
                    </Grid>
                    <Space />
                    <Grid item sx={{border: 0, pb: 2}} xs={12}>
                        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                            <Box><Typography><strong>przebieg walki</strong></Typography></Box>
                        </Box>
                    </Grid>
                    
                    {race?.fight && race.fight.map(el => (
                        <Grid item sx={{border: 0}} xs={12}>
                            <Divider /><Divider />
                            <Grid item sx={{border: 0}} xs={12}>
                                <center>{user?.data?.nick} zadaje graczowi {race?.userViewed?.nick} {parseInt(el.dmg1)} punktów obrażeń.</center>
                            </Grid>
                            <Divider sx={{mx:8}} />
                            <Grid item sx={{border: 0}} xs={12}>
                                <center>{race?.userViewed?.nick} zadaje graczowi {user?.data?.nick} {parseInt(el.dmg2)} punktów obrażeń.</center>
                            </Grid>
                            <Divider sx={{mx:8}} />
                            <Grid item sx={{border: 0}} xs={12}>
                                {el.overtake == 1 && (
                                    <center>{user?.data?.nick} wyprzedza {race?.userViewed?.nick}</center>
                                )}
                                {el.overtake == -1 && (
                                    <center>{race?.userViewed?.nick} wyprzedza gracza {user?.data?.nick}</center>
                                )}
                            </Grid>
                            <Divider sx={{mx:8}} />
                            <Grid item sx={{border: 0}} xs={12}>
                                {el.events1.map(event1 => (
                                    <div><Divider sx={{mx:8}} />
                                    <Grid item sx={{border: 0}} xs={12}>
                                        <center>{event1?.description.replaceAll("<player1>", user?.data?.nick).replaceAll("<player2>", race?.userViewed?.nick)}</center>
                                    </Grid></div>
                                ))}
                                {el.events2.map(event2 => (
                                    <div><Divider sx={{mx:8}} />
                                    <Grid item sx={{border: 0}} xs={12}>
                                        <center>{event2?.description.replaceAll("<player2>", user?.data?.nick).replaceAll("<player1>", race?.userViewed?.nick)}</center>
                                    </Grid></div>
                                ))}
                            </Grid>
                        </Grid>
                        ))}
                </LightedGroup></div>
            )}

        </LightedGroup>
    )
}