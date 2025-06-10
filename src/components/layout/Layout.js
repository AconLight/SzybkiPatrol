import React from "react";
import { Box, Avatar, Divider } from "@mui/material";
import { Outlet } from "react-router-dom";
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { refreshToken } from "../../redux/user/userSlice";
import track2 from '../../assets/track_logged.webp';
import Menu from './Menu';
import MainGroup from '../group/MainGroup';

export default function Layout() {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user)
    const dispatch = useDispatch()
    
    React.useEffect(() => {
        if (!user.data) {
            if (!sessionStorage.getItem('login')) {
                navigate('/')
            } else {
                dispatch(refreshToken({token: sessionStorage.getItem('token')}))
            }
        }
    }, [user]);

    return (
        <div style={{ 
            backgroundImage: `url(${track2})`,
            minHeight: '100vh',
            backgroundPosition: 'center top',
            backgroundSize: '100% auto',
            backgroundRepeat: 'repeat'
        }}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <SportsScoreIcon />
                </Avatar>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <SportsScoreIcon />
                </Avatar>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <SportsScoreIcon />
                </Avatar>
            </Box>
            <Divider />
            <Box sx={{display: 'flex', flexDirection: 'row', mt: 8}}>
                <Menu />
                <Box sx={{flexGrow: 3, pt: 3, width: '40%'}}>
                    <main className={'flex-1'}>
                        <MainGroup>
                            <Outlet />
                        </MainGroup>
                    </main>
                </Box>
                <Box sx={{flexGrow: 4, width: '30%'}}></Box>
            </Box>
        </div>
    );
}