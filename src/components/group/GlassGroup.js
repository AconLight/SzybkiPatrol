import React from "react";
import { Box } from "@mui/material";

export default function GlassGroup({ children, blur = 15 }) {
    return (
        <Box sx={{ 
            position: 'relative',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)',
            backdropFilter: `blur(${blur}px)`,
            borderRadius: 2,
            border: '1px solid rgba(255,255,255,0.1)',
            p: 3,
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,0,55,0.1), transparent 50%)',
                opacity: 0.1
            },
            '& > *': {
                position: 'relative',
                zIndex: 1
            }
        }}>
            <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 0% 0%, rgba(255,255,255,0.1) 0%, transparent 50%)',
                opacity: 0.5
            }} />
            {children}
        </Box>
    );
}
