import * as React from 'react'
import { Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router-dom'

export default function Shop() {

    const { cat } = useParams()
  
    const testMenuItems = [
        {
            href: '/shop/cars',
            title: 'samochody',
        },
        {
            href: '/shop/paintwork',
            title: 'lakiery',
        },
        {
            href: '/shop/tires',
            title: 'opony',
        },
        {
            href: '/shop/engines',
            title: 'silniki',
        },
        {
            href: '/shop/addons',
            title: 'dodatki',
        },
    ];

    return (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                {testMenuItems.map(({ href, title }) => (
                    <NavLink to={href} >
                        <Button
                            variant="contained"
                            sx={{ mx: 3, my: 1 }}>
                            {title}
                        </Button>
                    </NavLink>
                            ))}
            </Box>
            <Box>{cat}</Box>
        </Box>
    )
}