import React from "react";
import { Box } from "@mui/material";

export default function RacingGroup({ children, variant = "primary" }) {
    const getVariantStyles = () => {
        switch (variant) {
            case "danger":
                return {
                    color: "rgba(255,0,0,0.3)",
                    gradient: "linear-gradient(135deg, rgba(40,20,20,0.95) 0%, rgba(30,15,15,0.98) 100%)",
                    borderOpacity: "0.3",
                    shadow: "0 0 20px rgba(255,0,0,0.1)"
                };
            case "secondary":
                return {
                    color: "rgba(255,255,255,0.1)",
                    gradient: "linear-gradient(135deg, rgba(30,30,30,0.95) 0%, rgba(25,25,25,0.98) 100%)",
                    borderOpacity: "0.05",
                    shadow: "none"
                };
            default:
                return {
                    color: "rgba(255,0,55,0.3)",
                    gradient: "linear-gradient(135deg, rgba(25,25,25,0.95) 0%, rgba(20,20,20,0.98) 100%)",
                    borderOpacity: "0.2",
                    shadow: "0 0 30px rgba(255,0,55,0.1)"
                };
        }
    };

    const { color, gradient } = getVariantStyles();

    return (
        <Box sx={{ 
            position: 'relative',
            background: gradient,
            borderRadius: 2,
            p: 2,
            overflow: 'hidden',
            border: `1px solid ${color}`,
            '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            },
            '&:after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '20%',
                width: '60%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            },
            '& > *': {
                position: 'relative',
                zIndex: 1
            }
        }}>
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(45deg)',
                width: '200%',
                height: '200%',
                background: `linear-gradient(transparent, ${color})`,
                opacity: 0.03
            }} />
            {children}
        </Box>
    );
}
