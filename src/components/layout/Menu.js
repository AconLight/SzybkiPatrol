import React from "react";
import { Box, Button, Paper } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/user/userSlice";

export default function Menu() {
    const dispatch = useDispatch();

    const menuItems = [
        { href: 'overview', title: 'podgląd' },
        { href: 'trening', title: 'trening' },
        { href: 'race', title: 'wyścig' },
        { href: 'work', title: 'praca' },
        { href: 'shop', title: 'sklep tuningowy' },
        { href: 'inventory', title: 'wyposażenie' },
        { href: 'team', title: 'zespół' },
        { href: 'chat', title: 'wiadomości' },
        { href: 'premium', title: 'konto premium' },
        { href: 'ranking', title: 'ranking' },
        { href: '/', title: 'Wyloguj' }
    ];

    return (
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'flex-start', 
            alignItems: 'flex-end', 
            flexGrow: 3, 
            width: '30%', 
            pr: 4
        }}>
            <Paper sx={{
                width: 250,
                pt: 4,
                pb: 15,
                background: 'linear-gradient(180deg, rgba(32,32,32,0.95) 0%, rgba(20,20,20,0.98) 100%)',
                boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
            }}>
                {menuItems.map(({ href, title }) => (
                    href === '/' ? 
                        <Button
                            key={href}
                            onClick={() => dispatch(logout())}
                            variant="contained"
                            sx={{
                                mx: 3,
                                my: 1,
                                width: '200px',
                                background: 'linear-gradient(45deg, #d32f2f 30%, #c62828 90%)',
                                color: '#fff',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                fontWeight: 'bold',
                                border: '1px solid rgba(255,0,0,0.3)',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #c62828 30%, #b71c1c 90%)',
                                    transform: 'scale(1.02)',
                                    transition: 'all 0.2s ease-in-out'
                                }
                            }}>
                            {title}
                        </Button>
                        :
                        <NavLink 
                            key={href} 
                            to={href} 
                            style={{textDecoration: 'none'}}
                        >
                            <Button
                                variant="contained"
                                sx={{
                                    mx: 3,
                                    my: 1,
                                    width: '200px',
                                    background: 'linear-gradient(45deg, rgba(50,50,50,0.9) 30%, rgba(70,70,70,0.9) 90%)',
                                    color: '#fff',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    fontWeight: 'bold',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    '&:hover': {
                                        background: 'linear-gradient(45deg, rgba(70,70,70,0.9) 30%, rgba(90,90,90,0.9) 90%)',
                                        transform: 'scale(1.02)',
                                        transition: 'all 0.2s ease-in-out',
                                        borderColor: 'rgba(255,165,0,0.5)'
                                    }
                                }}>
                                {title}
                            </Button>
                        </NavLink>
                ))}
            </Paper>
        </Box>
    );
}