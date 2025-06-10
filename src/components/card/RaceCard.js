import React from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";

export default function RaceCard({ 
    image, 
    title, 
    subtitle, 
    difficulty = 1,
    onClick 
}) {
    return (
        <Card 
            onClick={onClick}
            sx={{
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(20,20,20,0.95) 0%, rgba(30,30,30,0.98) 100%)',
                borderRadius: 2,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                overflow: 'hidden',
                '&:hover': {
                    transform: 'scale(1.02)',
                    '& .card-glow': {
                        opacity: 1
                    }
                }
            }}
        >
            <Box 
                className="card-glow"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'radial-gradient(circle at 50% -20%, rgba(255,0,55,0.15), transparent 70%)',
                    opacity: 0,
                    transition: 'opacity 0.3s ease'
                }}
            />
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
                sx={{
                    opacity: 0.7,
                    transition: 'opacity 0.3s ease',
                    '&:hover': {
                        opacity: 0.9
                    }
                }}
            />
            <Box 
                sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    p: 1,
                    display: 'flex',
                    gap: 0.5
                }}
            >
                {[...Array(difficulty)].map((_, i) => (
                    <Box
                        key={i}
                        sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'rgba(255,0,55,0.7)',
                            boxShadow: '0 0 8px rgba(255,0,55,0.5)'
                        }}
                    />
                ))}
            </Box>
            <CardContent>
                <Typography variant="h6" sx={{ 
                    color: '#fff',
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                    mb: 1
                }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ 
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.5px'
                }}>
                    {subtitle}
                </Typography>
            </CardContent>
        </Card>
    );
}
