import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser, incUserStat, userRepair } from "../../redux/user/userSlice";
import { Box, Button } from "@mui/material";
import { formatSeconds } from "../../utils/format";
import UserMediumView from "../../components/card/UserMediumView";
import StatsCard from "../../components/card/StatsCard";
import Timer from "../../components/smart/Timer";

export default function Overview() {
    const [isTuning, setIsTuning] = useState(false)
    const toggleTuning = () => setIsTuning(!isTuning)
  
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
    
    const playerStats = user?.data?.mainStats ? {
        attack: user.data.mainStats.attack,
        speed: user.data.mainStats.speed,
        steering: user.data.mainStats.steering,
        armor: user.data.mainStats.armor
    } : {};

    return (
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            gap: 3,
            padding: 2,
            background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(15,15,15,0.98) 100%)',
            minHeight: '100vh'
        }}>
            <UserMediumView 
                userViewed={user.data} 
                onTuning={true} 
                incStat={incStat} 
                handleRepair={handleRepair} 
                toggleTuning={toggleTuning}
            />

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <StatsCard
                    title="Vehicle Statistics"
                    stats={playerStats}
                    onIncrease={incStat}
                    editable={isTuning}
                />
                {onTuning && (
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: 2
                    }}>
                        <Button
                            onClick={toggleTuning}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, rgba(50,50,50,0.9) 30%, rgba(70,70,70,0.9) 90%)',
                                px: 4,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, rgba(70,70,70,0.9) 30%, rgba(90,90,90,0.9) 90%)',
                                }
                            }}>
                            tuning
                        </Button>
                        <Button
                            onClick={handleRepair}
                            variant="contained"
                            sx={{
                                background: 'linear-gradient(45deg, rgba(200,50,50,0.9) 30%, rgba(220,70,70,0.9) 90%)',
                                px: 4,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, rgba(220,70,70,0.9) 30%, rgba(240,90,90,0.9) 90%)',
                                }
                            }}>
                            naprawa
                        </Button>
                    </Box>
                )}
            </Box>
        </Box>
    );
}