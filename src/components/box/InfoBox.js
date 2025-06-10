import React from "react";
import { Box, Typography } from "@mui/material";

export default function InfoBox({ title, content, icon, color = "rgba(255,0,55,0.2)" }) {
    return (
        <Box sx={{
            position: 'relative',
            p: 2,
            background: 'linear-gradient(135deg, rgba(25,25,25,0.95) 0%, rgba(35,35,35,0.98) 100%)',
            borderRadius: 2,
            border: `1px solid ${color}`,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '30%',
                height: '1px',
                background: `linear-gradient(90deg, ${color}, transparent)`
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '30%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${color})`
            }
        }}>
            {icon && (
                <Box sx={{
                    color: color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem'
                }}>
                    {icon}
                </Box>
            )}
            <Box>
                <Typography variant="subtitle2" sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    fontSize: '0.75rem',
                    mb: 0.5
                }}>
                    {title}
                </Typography>
                <Typography variant="body1" sx={{ 
                    color: '#fff',
                    letterSpacing: '0.5px'
                }}>
                    {content}
                </Typography>
            </Box>
        </Box>
    );
}
