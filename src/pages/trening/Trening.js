import React from "react"
import { TextField, Grid, Divider } from "@mui/material"
import GridedButton from "../../components/card/GridedButton"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { startTrening } from "../../redux/trening/treningSlice";
import CardImgTitle from "../../components/card/CardImgTitle";
import treningImg from '../../assets/training.jpg';
import LightedGroup from "../../components/group/LightedGroup";
import Space from "../../components/group/Space";

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
        dispatch(startTrening({userToken: user.data.token, time: time}))
    }

    React.useEffect(() => {
        if (user?.data?.login) {
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
     }, []);

     const canTrain = user?.data?.timers?.trening < Date.now() / 1000.0
  
    return (
        <div>
            <LightedGroup>

            <CardImgTitle img={treningImg} title="Trening" description="Rozpocznij trening, aby podszlifować swoje umiejętności oraz zyskać doświadczenie"/>
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
                    <MenuItem value={10}>10 min</MenuItem>
                    <MenuItem value={20}>20 min</MenuItem>
                    <MenuItem value={30}>30 min</MenuItem>
                    <MenuItem value={40}>40 min</MenuItem>
                    <MenuItem value={50}>50 min</MenuItem>
                    <MenuItem value={60}>60 min</MenuItem>
                    <MenuItem value={70}>70 min</MenuItem>
                    <MenuItem value={80}>80 min</MenuItem>
                    <MenuItem value={90}>90 min</MenuItem>
                    <MenuItem value={100}>100 min</MenuItem>
                    <MenuItem value={110}>110 min</MenuItem>
                    <MenuItem value={120}>120 min</MenuItem>
                </Select>
            </FormControl>
            <Space />
            <GridedButton
                title="Trenuj"
                onClick={start}
                buttonProps={{
                    color: canTrain && !isTraning ? 'primary' : 'secondary'
                }}
            />
            </LightedGroup>
        </div>
    )
}