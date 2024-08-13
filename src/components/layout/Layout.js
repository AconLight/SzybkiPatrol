import React from "react";
import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { login, logout, refreshToken } from "../../redux/user/userSlice";

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
           href: 'chat',
           title: 'wiadomości',
       },
       {
           href: 'shop',
           title: 'sklep tuningowy',
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
            href: 'team',
            title: 'zespół',
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
    <div>
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
        <Box sx={{display: 'flex', flexDirection: 'row', mt: 15, ml: 15}}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start'}}>
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
            </Box>
            <Box sx={{m: 5}}>
                <main className={'flex-1'}>
                    <Outlet />
                </main>
            </Box>
       </Box>
    </div>
   );
}