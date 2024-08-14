import React, { useState } from 'react';
import UserMediumView from "../../components/user/UserMediumView";
import { useSelector, useDispatch } from "react-redux";
import { fetchUserViewed } from "../../redux/race/raceSlice";
import { Button, Divider, TextField, Grid } from '@mui/material';
import GridedButton from '../../components/GridedButton';

export default function Race() {

    const race = useSelector((state) => state.race)
    const dispatch = useDispatch()

    const [nick, setNick] = useState("");
    const findUserViewed = () => {
        dispatch(fetchUserViewed({nick: nick}))
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
              onChange={(event) => setNick(event.target.value)}
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
        <UserMediumView userViewed={nick == race?.userViewed?.nick  && race?.userViewed} />

        </div>
    )
}