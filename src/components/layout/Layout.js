import { Box, Button } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";
import { Avatar } from "@mui/material";
import Divider from '@mui/material/Divider';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
export default function Layout() {
   const testMenuItems = [
       {
           href: 'main',
           title: 'Główna',
       },
       {
           href: 'garage',
           title: 'Garaż',
       },
       {
           href: 'shop',
           title: 'Sklep',
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
        <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {testMenuItems.map(({ href, title }) => (
                <NavLink to={href} >
                    <Button
                        variant="contained"
                        sx={{ m: 3 }}>
                        {title}
                    </Button>
                </NavLink>
                           ))}
        </Box>
        <Divider />
        <main className={'flex-1'}>
                      <Outlet />
       </main>
    </div>
   );
}