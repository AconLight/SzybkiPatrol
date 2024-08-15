import React from "react"
import { TextField, Grid, Divider } from "@mui/material"
import GridedButton from "../../components/GridedButton"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TitleCard from "../../components/card/TrainingCardTitle";

export default function Trening() {

    const [time, setTime] = useState(10)
    const handleChange = (event) => {
        setTime(event.target.value);
      };

    const [isTraning, setIsTrening] = useState(false)
    

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
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
            <Grid container sx={{px: 0, border: 0, bgcolor: 'rgba(200,200,200,.06)' }}>
                <Grid item sx={{border: 0}} xs={12}>

            <TitleCard />
            <Grid container>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Grid>
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
            <Grid container>
                <Grid item sx={{my: 2}} xs={12}> </Grid>
            </Grid>
            <GridedButton
                title="Trenuj"
                onClick={(val) => null}
                buttonProps={{
                    color: canTrain && !isTraning ? 'primary' : 'secondary'
                }}
            />
            </Grid>
            </Grid>
        </div>
    )
}