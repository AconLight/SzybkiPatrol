import React from "react";
import { Box, Grid } from "@mui/material";

export default function MainGroup(props) {
    return (
        <Box sx={{ 
            boxShadow: '0 0 30px rgba(0,0,0,0.8)',
            position: 'relative',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: 3,
                border: '1px solid rgba(255,0,55,0.2)',
                boxShadow: '0 0 20px rgba(255,0,55,0.05), inset 0 0 30px rgba(255,0,55,0.02)',
                pointerEvents: 'none',
                animation: 'neonPulse 8s infinite'
            },
            '@keyframes neonPulse': {
                '0%': {
                    boxShadow: '0 0 20px rgba(255,0,55,0.03), inset 0 0 30px rgba(255,0,55,0.01)',
                    borderColor: 'rgba(255,0,55,0.1)'
                },
                '50%': {
                    boxShadow: '0 0 25px rgba(255,0,55,0.07), inset 0 0 35px rgba(255,0,55,0.03)',
                    borderColor: 'rgba(255,0,55,0.15)'
                },
                '100%': {
                    boxShadow: '0 0 20px rgba(255,0,55,0.03), inset 0 0 30px rgba(255,0,55,0.01)',
                    borderColor: 'rgba(255,0,55,0.1)'
                }
            }
        }}>
            <Grid container sx={{
                borderRadius: 3,
                border: 0,
                p: 3,
                background: 'linear-gradient(180deg, rgba(25,25,25,0.95) 0%, rgba(15,15,15,0.98) 100%)',
                backdropFilter: 'blur(15px)',
                position: 'relative',
                overflow: 'hidden',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '200%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,0,55,0.2), rgba(255,255,255,0.3), rgba(255,0,55,0.2), transparent)',
                    animation: 'lightSpeed 12s linear infinite'
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '-100%',
                    width: '200%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,0,55,0.2), rgba(255,255,255,0.3), rgba(255,0,55,0.2), transparent)',
                    animation: 'lightSpeed 12s linear infinite'
                },
                '@keyframes lightSpeed': {
                    '0%': {
                        left: '-100%'
                    },
                    '100%': {
                        left: '100%'
                    }
                }
            }}>
                <Grid item sx={{ 
                    border: 0,
                    position: 'relative',
                    '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: -16,
                        left: 24,
                        right: 24,
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255,0,55,0.3), transparent)',
                    }
                }} xs={12}>
                    {props.children}
                </Grid>
            </Grid>
        </Box>
    );
}
