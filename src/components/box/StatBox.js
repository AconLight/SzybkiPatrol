import React from "react";
import { Box, Typography } from "@mui/material";

export default function StatBox({ title, value, color = "rgba(255,0,55,0.2)" }) {
    return (
        <Box sx={{
            position: 'relative',
            p: 2,
            background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.98) 100%)',
            borderRadius: 1,
            border: `1px solid ${color}`,
            boxShadow: `0 0 15px ${color}`,
            backdropFilter: 'blur(8px)',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`
            }
        }}>
            <Typography variant="subtitle2" sx={{ 
                color: 'rgba(255,255,255,0.7)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontSize: '0.75rem'
            }}>
                {title}
            </Typography>
            <Typography variant="h5" sx={{ 
                color: '#fff',
                fontWeight: 'bold',
                letterSpacing: '0.5px',
                textShadow: `0 0 10px ${color}`
            }}>
                {value}
            </Typography>
        </Box>
    );
}
