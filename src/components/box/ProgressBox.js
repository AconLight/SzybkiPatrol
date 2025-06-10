import React from "react";
import { Box, LinearProgress } from "@mui/material";

export default function ProgressBox({ value, maxValue, color = "rgba(255,0,55,0.3)", height = 8 }) {
    const percentage = (value / maxValue) * 100;

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            p: 0.5,
            background: 'linear-gradient(180deg, rgba(20,20,20,0.95) 0%, rgba(25,25,25,0.98) 100%)',
            borderRadius: 1,
            border: '1px solid rgba(255,255,255,0.1)',
            '&:hover': {
                '& .progress-glow': {
                    opacity: 0.7
                }
            }
        }}>
            <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                    height: height,
                    borderRadius: height / 2,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    '& .MuiLinearProgress-bar': {
                        background: `linear-gradient(90deg, ${color} 0%, rgba(255,255,255,0.3) 100%)`,
                        borderRadius: height / 2
                    }
                }}
            />
            <Box
                className="progress-glow"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: `${percentage}%`,
                    width: 16,
                    height: 16,
                    transform: 'translate(-50%, -50%)',
                    borderRadius: '50%',
                    boxShadow: `0 0 10px ${color}`,
                    opacity: 0.3,
                    transition: 'opacity 0.3s ease'
                }}
            />
        </Box>
    );
}
