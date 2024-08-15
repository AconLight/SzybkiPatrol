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
import { startWork } from "../../redux/work/workSlice";
import CardImgTitle from "../../components/card/CardImgTitle";
import workImg from '../../assets/work.jpg';
import LightedGroup from "../../components/group/LightedGroup";
import Space from "../../components/group/Space";
import Timer from "../../components/smart/Timer";

export default function Work() {

    const [time, setTime] = useState(1)
    const handleChange = (event) => {
        setTime(event.target.value);
      };

    const [isWorking, setIsWorking] = useState(false)
    

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()

    const start = () => {
        setIsWorking(true)
        dispatch(startWork({userToken: user.data.token, time: time*1})) // *60
    }

    React.useEffect(() => {
        if (user?.data?.login) {
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
     }, []);

    const maxTimestamp = Math.max(
        user?.data?.timers?.work, 
        user?.data?.timers?.trening,
        0
    )
    
    const canWork = maxTimestamp < Date.now() / 1000.0  && !isWorking
  
    return (
        <div>
            <LightedGroup>
            <CardImgTitle isMain={true} img={workImg} title="Praca" description="Idź do pracy jako mechanik, żeby zarobić trochę pieniędzy"/>
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
                    <MenuItem value={1}>1 h</MenuItem>
                    <MenuItem value={2}>2 h</MenuItem>
                    <MenuItem value={3}>3 h</MenuItem>
                    <MenuItem value={4}>4 h</MenuItem>
                    <MenuItem value={5}>5 h</MenuItem>
                    <MenuItem value={6}>6 h</MenuItem>
                    <MenuItem value={7}>7 h</MenuItem>
                    <MenuItem value={8}>8 h</MenuItem>

                </Select>
            </FormControl>
            <Space />
            <GridedButton
                title="Pracuj"
                onClick={start}
                buttonProps={{
                    color: canWork ? 'primary' : 'secondary'
                }}
            />
            <Box>
                {!canWork && (
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