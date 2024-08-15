import React from "react";
import { Box, Button, Paper } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { login, logout, refreshToken } from "../../redux/user/userSlice";
import track2 from '../../assets/track2.jpg';

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
    

   const testMenuItems = [
       {
           href: 'overview',
           title: 'podgląd',
       },
       {
            href: 'trening',
            title: 'trening',
        },
        {
            href: 'race',
            title: 'wyścig',
        },
        {
            href: 'work',
            title: 'praca',
        },
        {
            href: 'shop',
            title: 'sklep tuningowy',
        },
        {
            href: 'inventory',
            title: 'wyposażenie',
         },
        {
            href: 'team',
            title: 'zespół',
        },
        {
            href: 'chat',
            title: 'wiadomości',
        },
        {
            href: 'premium',
            title: 'konto premium',
        },
        {
            href: 'ranking',
            title: 'ranking',
        },
       {
            href: '/',
            title: 'Wyloguj',
        }
   ];

   
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
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-end', flexGrow: 3, width: '30%', pr: 4}}>
                <Paper sx={{width: 250, pt: 4, pb: 15}}>
                {testMenuItems.map(({ href, title }) => (
                    href == '/' ? 
                        <Button
                            onClick={() => dispatch(logout())}
                            variant="contained"
                            sx={{ mx: 3, my: 1, width: '200px' }}>
                            {title}
                        </Button>
                        :
                        <NavLink to={href} >
                            <Button
                                variant="contained"
                                sx={{ mx: 3, my: 1, width: '200px' }}>
                                {title}
                            </Button>
                        </NavLink>
                            ))}
                </Paper>
            </Box>
            <Box sx={{flexGrow: 3, pt: 3, width: '40%'}}>
                <main className={'flex-1'}>
                    <Outlet />
                </main>
            </Box>
            <Box sx={{flexGrow: 4, width: '30%'}}></Box>
       </Box>
    </div>
   );
}