import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user/userSlice";
import { Box, Button, Divider, Grid } from "@mui/material";

export default function Overview() {
  

    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    React.useEffect(() => {
        if (user?.data?.login) {
            console.log('fetch redux')
            console.log(user)
            dispatch(fetchUser({login: user.data.login, token: user.data.token}))
        } else {
            console.log('fetch session')
            dispatch(fetchUser({login: sessionStorage.getItem('login'), token: sessionStorage.getItem('token')}))
        }
        
     }, []);
    
    return (
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <Box sx={{p:2}}>
                {user?.data?.nick}
                <img src="https://i.ibb.co/jH6TWLV/bugv2.png" alt="asd"/>
            </Box>
            <Grid container spacing={2}>
                {user?.data && Object.keys(user?.data).filter(el => el != "_id" && el != "imgUrl" && el != '__v' && el != 'token').map(key => (
                    <Grid item xs={6} md={4}>
                        {key}: {user?.data[key]}
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}