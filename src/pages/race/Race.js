import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { fetchUserViewed, fightUserViewed } from "../../redux/race/raceSlice";
import { Button, TextField, Box, Typography, styled } from '@mui/material';
import { fetchUser } from '../../redux/user/userSlice';
import UserMediumView from "../../components/card/UserMediumView";
import ActionCard from '../../components/card/ActionCard';
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
    const [nick, setNick] = useState("");
    const [isFight, setIsFight] = useState(false)
    const race = useSelector((state) => state.race)
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
    }, []);

    const findUserViewed = () => {
        dispatch(fetchUserViewed({nick: nick}))
    }

    const fightOponent = () => {
        setIsFight(true)
        dispatch(fightUserViewed({oponentNick: nick}))
    }
    
    const maxTimestamp = Math.max(
        user?.data?.timers?.work, 
        user?.data?.timers?.race,
        user?.data?.timers?.trening
    );

    return (
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            padding: 2,
            background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(15,15,15,0.98) 100%)',
            minHeight: '100vh'
        }}>
            <ActionCard
                title="Find Your Opponent"
                description="Enter nickname to find and challenge other racers"
                actionContent={
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <StyledTextField
                            label="Nickname"
                            variant="outlined"
                            size="small"
                            value={nick}
                            onChange={(e) => setNick(e.target.value)}
                            sx={{ 
                                input: { color: 'white' },
                                label: { color: 'rgba(255,255,255,0.7)' }
                            }}
                        />
                        <Button
                            onClick={findUserViewed}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, rgba(50,50,50,0.9) 30%, rgba(70,70,70,0.9) 90%)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, rgba(70,70,70,0.9) 30%, rgba(90,90,90,0.9) 90%)',
                                }
                            }}>
                            Find
                        </Button>
                    </Box>
                }
            />

            {race.userViewed && (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <UserMediumView userViewed={race.userViewed} />
                    <Button
                        onClick={fightOponent}
                        variant="contained"
                        disabled={maxTimestamp > Date.now()}
                        sx={{
                            background: 'linear-gradient(45deg, rgba(200,50,50,0.9) 30%, rgba(220,70,70,0.9) 90%)',
                            alignSelf: 'center',
                            px: 4,
                            '&:hover': {
                                background: 'linear-gradient(45deg, rgba(220,70,70,0.9) 30%, rgba(240,90,90,0.9) 90%)',
                            }
                        }}>
                        Race!
                    </Button>
                </Box>
            )}

            {maxTimestamp > Date.now() && (
                <Timer timestamp={maxTimestamp} />
            )}

            {isFight && race.result && (
                <ActionCard
                    title="Race Results"
                    description={`${race.result.winner} wins! Money: $${race.result.money}, Experience: ${race.result.exp}`}
                />
            )}
        </Box>
    );
}