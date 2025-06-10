import React from "react";
import { Box, Grid } from "@mui/material";

export default function LightedGroup(props) {
    return (
        <Box sx={{ 
            boxShadow: '0 5px 15px rgba(0,0,0,0.6)',
            position: 'relative',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 2,
                border: '1px solid rgba(255,165,0,0.1)',
                pointerEvents: 'none'
            }
        }}>
            <Grid container sx={{
                borderRadius: 2,
                border: 0,
                p: 0,
                background: 'linear-gradient(180deg, rgba(32,32,32,0.92) 0%, rgba(20,20,20,0.95) 100%)',
                backdropFilter: 'blur(10px)',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                    '&:before': {
                        opacity: 1
                    }
                },
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,165,0,0.2), transparent)',
                    opacity: 0.5,
                    transition: 'opacity 0.3s ease-in-out'
                }
            }}>
                <Grid item sx={{ border: 0 }} xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </Box>
    )
}
