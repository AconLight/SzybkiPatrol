import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
export default function Layout() {
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
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                {testMenuItems.map(({ href, title }) => (
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