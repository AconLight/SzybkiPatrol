import React from "react"
import { TextField, Grid, Divider, Box, Typography } from "@mui/material"
import GridedButton from "../../components/card/GridedButton"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { startTrening } from "../../redux/user/userSlice";
import CardImgTitle from "../../components/card/CardImgTitle";
import treningImg from '../../assets/training.jpg';
import LightedGroup from "../../components/group/LightedGroup";
import Space from "../../components/group/Space";
import Timer from "../../components/smart/Timer";

export default function Trening() {

    const [time, setTime] = useState(10)
    const handleChange = (event) => {
        setTime(event.target.value);
      };

    const [isTraning, setIsTrening] = useState(false)    

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const start = () => {
        setIsTrening(true)
        dispatch(startTrening({time: time}))
    }

    React.useEffect(() => {
        dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
     }, []);

     const maxTimestamp = Math.max(
        user?.data?.timers?.work, 
        user?.data?.timers?.trening,
        0
    )
    
    const canTrain = maxTimestamp < Date.now() / 1000.0  && !isTraning
  
    return (
        <div>
            <LightedGroup>

            <CardImgTitle isMain={true} img={treningImg} title="Trening" description="Rozpocznij trening, aby podszlifować swoje umiejętności oraz zyskać doświadczenie"/>
            <Space />
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Czas treningu</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>10 min</MenuItem>
                    <MenuItem value={2}>20 min</MenuItem>
                    <MenuItem value={3}>30 min</MenuItem>
                    <MenuItem value={4}>40 min</MenuItem>
                    <MenuItem value={5}>50 min</MenuItem>
                    <MenuItem value={6}>60 min</MenuItem>
                    <MenuItem value={7}>70 min</MenuItem>
                    <MenuItem value={8}>80 min</MenuItem>
                    <MenuItem value={9}>90 min</MenuItem>
                    <MenuItem value={10}>100 min</MenuItem>
                    <MenuItem value={11}>110 min</MenuItem>
                    <MenuItem value={12}>120 min</MenuItem>
                </Select>
            </FormControl>
            <Space />
            <GridedButton
                title="Trenuj"
                onClick={start}
                buttonProps={{
                    color: canTrain ? 'primary' : 'secondary'
                }}
            />
            <Box>
                {!canTrain && (
                    <div><Space />
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <Box><Typography><strong>Zacznij trening za <Timer timestampSec={maxTimestamp} /></strong></Typography></Box>
                    </Box>
                    <Space /></div>
                )}
            </Box>

            </LightedGroup>
        </div>
    )
}