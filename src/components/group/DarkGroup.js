import React from "react";
import { Box } from "@mui/material";

export default function DarkGroup({ children, glowColor = "rgba(255,0,55,0.2)", intensity = "medium" }) {
    const getGlowIntensity = () => {
        switch (intensity) {
            case "high":
                return {
                    opacity: 0.15,
                    blur: "30px"
                };
            case "low":
                return {
                    opacity: 0.05,
                    blur: "10px"
                };
            default:
                return {
                    opacity: 0.1,
                    blur: "20px"
                };
        }
    };

    const { opacity, blur } = getGlowIntensity();

    return (
        <Box sx={{ 
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(25,25,25,0.98) 0%, rgba(15,15,15,0.95) 100%)',
            borderRadius: 2,
            border: `1px solid ${glowColor}`,
            p: 3,
            overflow: 'hidden',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '10%',
                right: '10%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
                opacity: opacity
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                pointerEvents: 'none',
                boxShadow: `0 0 ${blur} ${glowColor}`,
                opacity: opacity
            }
        }}>
            {children}
        </Box>
    );
}
